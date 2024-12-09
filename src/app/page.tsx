import Topheader from "./components/Topheader";
import Hero from "./components/Hero";
import Editors from "./components/editorspick";
import Classman from "./components/Classman";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Universe from "./components/Unviverse";
import FuturePost from "./components/FuturePost";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">

      <Topheader />
      
      <Navbar />
      
      <Hero />
      
      <Editors />
     
      <ProductCard />
      

      <Classman />
      
      
      
      <Universe />
      
       
       </div>  
  );
}
