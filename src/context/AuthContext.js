import React, {createContext, useEffect, useState, useCallback} from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [user, setUser] = useState([]);
  


  const signIn = async (email, password) => {
    const authUser = {email, password}
    setIsLoading(true)

    try {
      const {data} = await axios.post("https://hordecall.net/tp_app/prepaidApp/public/api/appmidLogin", authUser)
      console.log(data);

      if(data.status == 200){
        // setErrorMessage(null);
        let response = data;
        console.log(response);
        setUserToken(response.token);
        console.log(response.token);
        setUser(response.user);
        setWalletBalance(response.balance);
            
      }
    } catch (error) {
      console.log('login error', error)
    }
    setIsLoading(false)
  }

  const signOut = () => {
    setUserToken(null);
    setUser([]);
    setWalletBalance([]);
  }

    return (
        <AuthContext.Provider value={{signIn, signOut, userToken, user, walletBalance}}>
          {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};