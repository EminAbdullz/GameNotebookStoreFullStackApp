import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/Home";
import DeleteProduct from "./pages/DeleteProduct";
import Authentication from "./components/Authentication";
import ProductProperties from "./pages/ProductProperties";

function App() {
  const { user } = useSelector((state) => state.auth);
  ////////////////
  const { isAdmin = null } = user;
  ////////////////
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<ProductProperties />} />
          <Route path="/update" element={<ProductProperties />} />
          <Route path="/delete" element={<DeleteProduct />} />
        </Routes>
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
