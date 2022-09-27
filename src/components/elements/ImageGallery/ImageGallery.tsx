import "./ImageGallery.scss";

interface IGalleryImage {
  path: string;
  alt: string;
}

interface IImageGalleryProps {
  images: IGalleryImage[];
}

const ImageGallery = ({ images }: IImageGalleryProps) => {
  const renderedImages = images.map((image, index) => {
    return (
      <li key={index} className="image-gallery__image-wrapper">
        <img src={image.path} alt={image.alt} className="image-gallery__image" />
        <h1 className="image-gallery__image-description">{image.alt}</h1>
      </li>
    );
  });

  return (
    <div className="image-gallery">
      <ul className="image-gallery__list">{renderedImages}</ul>
    </div>
  );
};

export default ImageGallery;
