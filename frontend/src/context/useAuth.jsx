import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  IconApprove,
  IconBell,
  IconDashboard,
  IconMenu,
  IconSearch,
  IconUpload,
} from "../utils/Icons";

const AuthContext = createContext(null);

const STORAGE_KEY = "auth_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    store: "Rindu Store",
    email: "test@gmail.com",
    password: "123456",
  });
  const navigate = useNavigate();

  const allNavItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <IconDashboard />,
      roles: ["admin", "manager", "user"],
      path: "/dashboard"
    },
    {
      id: "upload",
      label: "Upload Document",
      icon: <IconUpload />,
      roles: ["user"],
      path: "/uploadDocument"
    },
    {
      id: "approve",
      label: "Approve Documents",
      icon: <IconApprove />,
      roles: ["admin", "manager"],
      path: "/approveDocument"
    },
  ];

  console.log("user: ", user)

  const navItems = allNavItems.filter((item) =>
    item.roles.includes(user?.role),
  );
  console.log("navItems: ", navItems);

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else navigate("/login");
  }, []);

  const signin = async () => {
    console.log("signin")
    const { email, password } = form;

    try {
      const response = await axios.post(
        // "http://localhost:3000/api/auth/login",
        // "http://192.168.1.153:5000/api/auth/login",
        // "https://docupload-scad.onrender.com/api/auth/login",
        "https://docupload-production.up.railway.app/api/auth/login",
        {
          email,
          password,
        },
      );

      const user = response?.data?.user;

      const loggedInUser = {
        name: user.name,
        email: user.email,
        role: user.role,
      };

      setUser(loggedInUser);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedInUser));

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    navigate("/login");
  };

  const value = { user, setUser, signin, signout, form, setForm, navItems };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
