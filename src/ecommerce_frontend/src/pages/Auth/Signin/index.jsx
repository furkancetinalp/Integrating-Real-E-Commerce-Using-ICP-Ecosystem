import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert, } from "@chakra-ui/react";
import { Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import Error401 from '../../Error401';
import Success200 from '../../Success200';
function Signin() {
  // const {login} = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = React.useState({});
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
          
          let check = data["Ok"];
          if(check !=undefined){
        
            localStorage.setItem("token",token);
            localStorage.setItem("userid",id);
            return(<Success200/>)
          }
          else{
            localStorage.removeItem("token");
            localStorage.removeItem("userid");
            return (<Error401/>)
          }
        });
        return(<Success200/>)
      }
      catch (error) {
        bag.setErrors({ general: error.response.data.message })
        return (<Error401/>)

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