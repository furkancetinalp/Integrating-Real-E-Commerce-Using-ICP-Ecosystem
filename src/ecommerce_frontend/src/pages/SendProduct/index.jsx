import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon, AlertTitle, AlertDescription, useToast } from "@chakra-ui/react";
import { Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import Success200 from '../Success200';
import Error401 from '../Error401';
function SendProduct() {

  let token =localStorage.getItem("token"); 

  const toast = useToast()
  const toastIdRef = React.useRef()

  const navigate = useNavigate();
  function addToast() {
    toastIdRef.current = toast({ description: 'Success',colorScheme:'teal',  status:'success',title:"Product sending is successful"})
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      category_id: "",
      price: "",
      image_id: "",
      description: "",
    },

    onSubmit: async (values, bag) => {
      try {
        const imp = await ecommerce_backend.sendProductLetgo(values.title, Number(values.category_id),
        parseFloat(values.price),values.image_id,values.description,token
        ).then((data) => {
          const result = (data["Ok"]);

          if (result != undefined) {
            addToast();
            var timer = setTimeout(function () {

            }, 3000);
            navigate("/");

            return (<div>
              <Success200 />
            </div>);
          }
          else {
            return (<Error401 />)
          }
        });
        return (<Success200 />);
      }
      catch (error) {
        bag.setErrors({ general: "Sending product failed!!" });

        return (<div>error!!!!!!!!!</div>);

      }
    }
  })

  return (
    <div>
      <Flex align='center' width='full' justifyContent='center'>
        <Box pt='10'>
          <Box textAlign='center'>
            <Heading>SendProduct</Heading>
          </Box>
          <Box my='5'>
            {formik.errors.general && (
              <Alert status='error'>{formik.errors.general}</Alert>
            )}
          </Box>
          <Box my={5} textAlign='left' >
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input name='title' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.title}
                  isInvalid={formik.touched.title && formik.errors.title}
                ></Input>
              </FormControl>

              <FormControl mt='4'>
                <FormLabel>CategoryId</FormLabel>
                <Input name='category_id' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.category_id}
                  isInvalid={formik.touched.category_id && formik.errors.category_id}


                ></Input>
              </FormControl>
              

              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input name='price' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.price}
                  isInvalid={formik.touched.price && formik.errors.price}
                ></Input>
              </FormControl>

              <FormControl mt='4'>
                <FormLabel>Image Id</FormLabel>
                <Input name='image_id' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.image_id}
                  isInvalid={formik.touched.image_id && formik.errors.image_id}


                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input name='description' onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.description}
                  isInvalid={formik.touched.description && formik.errors.description}
                ></Input>
              </FormControl>

              
              <Button type='submit' mt='4' width='full'>Send Product</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default SendProduct