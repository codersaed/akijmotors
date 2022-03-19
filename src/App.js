import "./App.css";
import Ads from "./components/Ads";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import SelectionOfVehicles from "./components/SelectionOfVehicles";
import Services from "./components/Services";
import WhyChoices from "./components/WhyChoices";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <Banner />
      <Product />
      <WhyChoices />
      <Services />
      <SelectionOfVehicles />
      <Ads />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
