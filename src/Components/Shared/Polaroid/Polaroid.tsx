import { CSSProperties } from "react";
import styles from "./Polaroid.module.css";

const Polaroid = ({
  imageSrc,
  alt,
  rotate = 0,
  height = "285px",
  maxWidth = "320px",
  width = "90%",
  style = {},
}: {
  rotate?: number;
  imageSrc: string;
  alt: string;
  height?: string;
  maxWidth?: string;
  width?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      style={{ rotate: `${rotate}deg`, height, width, maxWidth, ...style }}
      className={`${styles.polaroid}`}
    >
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default Polaroid;
