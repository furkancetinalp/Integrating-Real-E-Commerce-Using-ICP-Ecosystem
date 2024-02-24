import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styles from './styles.module.css'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert, } from "@chakra-ui/react";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
function Navbar() {
    const {loggedIn,logout} = useAuth();
    console.log(loggedIn);

    const handleLogOut = async() =>{
        await logout();
    }
  return (
    <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">Main Page</Link>
                </div>
            </div>

            <ul>
                <Link to='/sendproduct'>
                    <Button colorScheme='green' >SendProduct</Button>
                </Link>
            </ul>
            <div className={styles.right}>
                {/* <Link to='/signin'>
                    <Button colorScheme='pink'>Login</Button>

                </Link> */}
                {
                    !loggedIn && (
                        <>
                          <Link to='./signin'>
                            <Button colorScheme='green'>Login</Button>
                          </Link>
                          
                        </>
                      )
                }
                {
                    loggedIn && (
                        <>
                          <Link to='#'>
                            <Button  colorScheme='pink' onClick={handleLogOut}>Logout</Button>
                          </Link>
                          
                        </>
                      )
                }
               
            </div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul> */}

        </nav>
  )
}

export default Navbar