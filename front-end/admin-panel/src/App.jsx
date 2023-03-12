import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "./components/Authentication";
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

function App() {
  const { user } = useSelector((state) => state.authorization);

  const { isAdmin = null } = user;

  useApi(asyncThunkToGetBrands(BRANDS_URL));
  useApi(asyncThunkToGetCountries(COUNTRIES_URL));
  useApi(asyncThunkToGetRams(RAMS_URL));

  return (
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
          </Routes>
        </div>
        <Footer />
      </Router>

      {/* <Router>
        {isAdmin === null ? (
          <Authentication />
        ) : isAdmin === false ? (
          <p>Only Admin</p>
        ) : (
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/change" element={<ChangeProduct />} />
              <Route path="/delete" element={<DeleteProduct />} />
            </Routes>
            <Footer />
          </div>
        )}
      </Router> */}
    </div>
  );
}

export default App;
