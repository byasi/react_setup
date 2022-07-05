import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  const { user, isAuthenticated, login } = useContext(AuthContext);
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  console.log({ user, isAuthenticated });
  return (
    <div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter your password" />
      </div>
      <div className="form-group">
        <button onClick={() => login(state.email, state.password)}>Login</button>
      </div>
    </div>
  )
}