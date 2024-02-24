import { useContext, createContext } from "react";
import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const login = (data) => {
        setLoggedIn(true);

        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", data.id);
    }
    
    const logout = async () => {
        setLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
    }

    
    const values = {
        loggedIn,
        login,
        logout,
    };

    

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export {
    useAuth,
    AuthProvider
};