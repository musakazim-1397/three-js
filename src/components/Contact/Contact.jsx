import EarthCanvas from "./EarthCanvas/EarthCanvas";
import StarsCanvasComponent from "./StarCanvas/StarsCanvas";


const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        border: "4px solid red",
        height: "50vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div>Contact</div>
      <EarthCanvas />
      <StarsCanvasComponent />
    </div>
  );
};

export default Contact;
