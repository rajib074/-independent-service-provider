import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Signup from "./Pages/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div>
      <Header></Header>
    

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>.
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
