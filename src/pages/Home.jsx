import React from "react";
import Announcement from "../component/Announcement";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NewsLetter from "../component/NewsLetter";
import Products from "../component/Products";
import Slider from "../component/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
