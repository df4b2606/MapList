import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyNavbar from "./components/Navbar/Navbar";
{
  /*import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Map from "./components/Map/Map";*/
}

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <GoogleOAuthProvider>
      <BrowserRouter>
        <div className="container-xl">
          <MyNavbar />
          {/*}
          <Routes>
            <Route path="/" exact element={<Navigate replace to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/map/:id" element={<Map />} />
            <Route
              path="/auth"
              exact
              element={!user ? <Auth /> : <Navigate replace to="/posts" />}
            />
          </Routes>
          */}
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
