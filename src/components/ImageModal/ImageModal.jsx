import "./index.css";

const ImageModal = ({ image, imageOpen }) => {
  const closeModalImage = () => {
    imageOpen(null);
  };

  return (
    <div className="ImageModal">
      <div className="quitImageModal" onClick={closeModalImage}></div>
      <img src={image} alt="modal Img" />
    </div>
  );
};

export default ImageModal;
