import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon,AlertTitle,AlertDescription,useToast} from "@chakra-ui/react";
import { Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import Error401 from '../../Error401';
import Success200 from '../../Success200';
import { useAuth } from '../../../contexts/AuthContext';
function Signin() {
  const {login} = useAuth();
  const toast = useToast()
  const toastIdRef = React.useRef()

  const navigate = useNavigate();
  function addToast() {
    toastIdRef.current = toast({ description: 'Success',colorScheme:'teal',  status:'success'})
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    
    onSubmit: async (values, bag) => {
      try {
        const imp = await ecommerce_backend.login_letgo(values.email, values.password).then((data) => {
          const id = (data["Ok"]["id"]);
          const token = (data["Ok"]["token"]);

          console.log("id", id);
          if (id != undefined) {
            // localStorage.setItem("token", token);
            // localStorage.setItem("userid", id);
            login(data["Ok"]);
            addToast();
            var timer = setTimeout(function() {
              
            }, 3000);
            navigate("/");

            return(<div>
              <Success200 />
            </div>);
          }
          else {
            console.log("hataya girdi")
            localStorage.removeItem("token");
            localStorage.removeItem("userid");
            return (<Error401 />)
          }
        });
        return (<Success200 />);
      }
      catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        console.log("catche!!!");
        bag.setErrors({ general: "Login Failed!!" });

        return (<div>hata!!!!!!!!!</div>);

      }
    }
  })
  return (
    <div>
      <Flex align='center' width='full' justifyContent='center'>
        <Box pt='10'>
          <Box textAlign='center'>
            <Heading>Login</Heading>
          </Box>
          <Box my='5'>
            {formik.errors.general && (
              <Alert status='error'>{formik.errors.general}</Alert>
            )}
          </Box>
          <Box my={5} textAlign='left' >
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                ></Input>
              </FormControl>

              <FormControl mt='4'>
                <FormLabel>Password</FormLabel>
                <Input name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type='password'
                  isInvalid={formik.touched.password && formik.errors.password}

                ></Input>
              </FormControl>
              <Button type='submit' mt='4' width='full'>Login</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin