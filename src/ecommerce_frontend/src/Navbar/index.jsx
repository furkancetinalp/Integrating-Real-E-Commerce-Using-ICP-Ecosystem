import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styles from './styles.module.css'
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">e-commerce</Link>
                </div>
            </div>

            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>
            <div className={styles.right}>
                <Link to='/signin'>
                    <Button colorScheme='pink'>Register</Button>

                </Link>
                <Link to='signup'>
                    <Button colorScheme='pink'>SignUp</Button>
                </Link>
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