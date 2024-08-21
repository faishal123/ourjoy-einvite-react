import styles from "./Video.module.css";

const Video = ({
  id,
  height = "250px",
  isSticky = true,
  controls = false,
  maxHeight = "250px",
}: {
  id: string;
  height?: string;
  isSticky?: boolean;
  controls?: boolean;
  maxHeight?: string;
}) => {
  return (
    <div
      style={{
        height,
        maxHeight,
        alignItems: "center",
        position: isSticky ? "sticky" : "unset",
        top: "0",
      }}
    >
      <video
        playsInline
        className={styles.video}
        id={id}
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        controls={controls}
        style={{ objectFit: "cover" }}
      >
        <source
          src="https://utfs.io/f/080c0836-466a-4652-bdd4-572bee7051d4-g3dgcd.webm"
          type="video/webm"
        />
        <source
          src="https://utfs.io/f/9c3a77c5-aa96-4fdc-b65c-3647d6286936-k45cyw.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
