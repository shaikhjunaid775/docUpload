
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/useAuth";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default AuthLayout;