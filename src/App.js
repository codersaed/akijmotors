import "./App.css";
import Ads from "./components/Ads";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import SelectionOfVehicles from "./components/SelectionOfVehicles";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhyChoices from "./components/WhyChoices";
import Sidebar from "./common/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Banner />
        <Product />
        <WhyChoices />
        <Services />
        <SelectionOfVehicles />
        <Ads />
        <Blog />
        <Footer />
      </Router>
    </>
  );
}

export default App;
