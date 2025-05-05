import About from "../components/main/About";
import Contact from "../components/main/Contact";
import Products from "../components/main/products";
import LineBreak from "../components/UI/LineBreak";

function Home() {
  return (
    <div>
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default Home;
