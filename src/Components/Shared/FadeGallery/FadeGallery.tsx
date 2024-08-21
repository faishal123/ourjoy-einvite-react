import styles from "./FadeGallery.module.css";

const FadeGallery = ({
  images,
  currentImage,
  width,
  height,
  maxHeight,
  maxWidth,
  transitionDuration = "1s",
  className = "",
  onClick,
  id = "",
  itemClassName = "",
}: {
  images: string[];
  currentImage: number;
  width?: string;
  height: string;
  maxWidth?: string;
  maxHeight?: string;
  transitionDuration?: string;
  className?: string;
  onClick?: () => void;
  id?: string;
  itemClassName?: string;
}) => {
  return (
    <div
      style={{ width, height, maxWidth, maxHeight }}
      onClick={onClick}
      className={`${className} ${styles.container}`}
    >
      {images.map((image, index) => (
        <img
          id={`${id}-${index}`}
          style={{ transitionDuration }}
          key={image}
          className={`${itemClassName} ${
            index === currentImage ? "" : styles.hidden
          }`}
          src={image}
          alt="imageGallery"
        />
      ))}
    </div>
  );
};

export default FadeGallery;
