// export const render = () => (
//   // Some other JSX
// );

import React, { useContext, createContext, useState } from "react";

export const auth = {
  signin(cb) {
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    setTimeout(cb, 100);
  }
};


const authContext = createContext();

export const ProvideAuth = function ({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = function () {
  return useContext(authContext);
}

export const useProvideAuth = function () {
  const [user, setUser] = useState(localStorage.getItem('user') || null);

  const signin = cb => {
    return auth.signin(() => {
      setUser(localStorage.getItem('user') || null)
      cb();
    });
  };

  const signout = cb => {
    return auth.signout(() => {
      setUser(null)
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}
