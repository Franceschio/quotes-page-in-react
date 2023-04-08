import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import PostsList from "./components/PostsList/PostsList";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Slider from "./components/Slider";
import Modal from "./components/Modal/Modal";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const [useSinglePost, setSinglePost] = useState(null);

  const [singleImage, setSingleImage] = useState(null);

  return (
    <div className={`App ${isDarkMode && "InDark"}`}>
      <Header />
      <button
        className="darkModeSet"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        Dark mode: {isDarkMode ? "on" : "off"}
      </button>
      <Hero />

      <SectionTitle text="Gallery" />
      <Gallery />
      <SectionTitle text="Post" />
      <PostsList singlePost={setSinglePost} />
      <SectionTitle text="Best images from our users" />
      <Slider singleImage={setSingleImage} />
      {useSinglePost ? (
        <Modal dataPost={useSinglePost} modalOpen={setSinglePost} />
      ) : null}

      {singleImage ? (
        <ImageModal image={singleImage} imageOpen={setSingleImage} />
      ) : null}

      <Footer />
    </div>
  );
};

export default App;
