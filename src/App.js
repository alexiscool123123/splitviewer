import { Allotment } from "allotment";
import { Content } from "./Content";
import "allotment/dist/style.css";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Allotment>
        <Allotment.Pane snap>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1viS0qWedzVsQEEyvzheAalmEyVMrR5I&ehbc=2E312F&noprof=1"
            width="100%"
            height="97%"
          ></iframe>
        </Allotment.Pane>
        <Allotment.Pane snap>
          <iframe
            width="100%"
            height="97%"
            src="https://miro.com/app/live-embed/uXjVLT4NOK8=/?moveToViewport=-1457,-1107,2882,2076&embedId=354766426653&embedAutoplay=true"
          ></iframe>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
