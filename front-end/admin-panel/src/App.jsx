import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteProduct from "./pages/DeleteProduct";
import Update from "./pages/Update";
import Home from "./pages/Home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Options from "./pages/Options";
import { useApi } from "./hooks/useApi";
import {
  asyncThunkToGetBrands,
  asyncThunkToGetCountries,
  asyncThunkToGetRams,
} from "./store/options/optionsSlice";
import { BRANDS_URL, COUNTRIES_URL, RAMS_URL } from "./api";
import Users from "./pages/Users";
import "./generalStyles.scss";
import { asyncThunkToGetUsers } from "./store/authentication/usersSlice";
import { notificationAfterLoginIn } from "./notifications/notifications";
import Authorization from "./components/Authentication";
import AboutProduct from "./pages/AboutProduct";
import AboutUser from "./pages/AboutUser";

function App() {
  const { isAdmin, rememberMe } = useSelector((state) => state.authorization);

  //cutsom hook for request
  useApi(asyncThunkToGetBrands(BRANDS_URL));
  useApi(asyncThunkToGetCountries(COUNTRIES_URL));
  useApi(asyncThunkToGetRams(RAMS_URL));
  useApi(asyncThunkToGetUsers());

  //* logic for checking is it admin

  //if admin not log in
  if (JSON.parse(localStorage.getItem("admin")) === null) {
    if (isAdmin === null) {
      return (
        <>
          <Authorization />
          <ToastContainer />
        </>
      );
    }
    if (isAdmin === false) {
      return (
        <>
          <Authorization />
          <ToastContainer />
        </>
      );
    }
    if (isAdmin === true) {
      // if admin choose remember me checkbox in auth component
      if (rememberMe === false) {
        sessionStorage.setItem("admin", true);
        notificationAfterLoginIn();
      }
      if (rememberMe === true) {
        localStorage.setItem("admin", true);
        notificationAfterLoginIn();
      }
    }
  }

  return (
    <>
      {JSON.parse(localStorage.getItem("admin")) === true ||
      JSON.parse(sessionStorage.getItem("admin")) === true ? (
        <div className="App">
          <Router>
            <ToastContainer />
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Update />} />
                <Route path="/update" element={<Update />} />
                <Route path="/delete" element={<DeleteProduct />} />
                <Route path="/options" element={<Options />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about/user" element={<AboutUser />} />
                <Route path="/about/product" element={<AboutProduct />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </div>
      ) : null}
    </>
  );
}

export default App;
