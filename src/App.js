import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Stats from "./components/Stats";
import Promo from "./components/Promo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const data = [{
  image:'/product1.png', 
  title:'Best Burger', 
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit porta velit, sit amet pulvinar leo efficitur at. Morbi sagittis, ante et facilisis pharetra, dui nisi elementum lorem, euismod gravida libero leo eget enim.'
},
{
  image:'/product2.png', 
  title:'Big Burger', 
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit porta velit, sit amet pulvinar leo efficitur at. Morbi sagittis, ante et facilisis pharetra, dui nisi elementum lorem, euismod gravida libero leo eget enim.'
}];

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Promo/>
      <Product product={data}/>
      <Stats/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
