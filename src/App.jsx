import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import InventoryDetails from "./components/InventoryDetails";
import RequireAuth from "./components/RequireAuth";
import ManageInventories from "./pages/ManageInventories";
import AddNewItem from "./pages/AddNewItem";
import MyItems from "./pages/MyItems";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/add-new-item"
          element={
            <RequireAuth>
              <AddNewItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="manage-inventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="inventory/:productId"
          element={
            <RequireAuth>
              <InventoryDetails />
            </RequireAuth>
          }
        />
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
        <Route path="not-found" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
