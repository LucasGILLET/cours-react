import Navigation from "./components/Navigation/Navigation.jsx";
import "./css/style.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx"

export default function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <div id="detail">
          <Outlet />
      </div>
        <Footer />
    </div>
  );
}