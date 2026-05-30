import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./components/AuthLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import { ApproveDocumentsPage } from "./pages/AppoveDocument/ApproveDocuments";
import { UploadPage } from "./pages/uploadDocument/UploadDocument";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploadDocument" element={<UploadPage />} />
        <Route path="/approveDocument" element={<ApproveDocumentsPage />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
