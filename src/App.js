import AuthProvider from "./context/AuthContext";
import Router from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App;