import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Product from "./components/Product";
import SelectionOfVehicles from "./components/SelectionOfVehicles";
import Services from "./components/Services";
import WhyChoices from "./components/WhyChoices";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Product />
      <WhyChoices />
      <Services />
      <SelectionOfVehicles />
    </>
  );
}

export default App;
