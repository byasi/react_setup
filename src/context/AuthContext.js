import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {}
});

const AuthProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false,
  })

  useEffect(() => {
    const getUser = () => {
      try {
        const user = localStorage.getItem('user');
      if (!user) {
        setState({ user: null, isAuthenticated: false});
      }
      if (user) {
        setState({ user: JSON.parse(user), isAuthenticated: true});

        // dealing with tokens
        // fetch('', {
        //   headers: {
        //     'Content-Type': 'Application/json',
        //     'Authorization': `Bearer ${user}`
        //   }
        // })
      }
      } catch (error) {
        console.log(error);
      }
    };
    getUser()
  }, [setState]);

  const handleLogin = (email, password) => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setState((prevState) => ({ ...prevState, user: { email, password }, isAuthenticated: true }));
  }

  return (
    <AuthContext.Provider value={{ ...state, login: handleLogin }} >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;