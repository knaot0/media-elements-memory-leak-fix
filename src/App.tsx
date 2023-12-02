import React, { useCallback, useEffect, useRef, useState } from "react";
import WebcamBase from "react-webcam";

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div>
      <button id={open ? "delete-button" : "create-button"} onClick={toggle}>
        {open ? "Delete" : "Create"}
      </button>
      {open && <Webcam />}
    </div>
  );
};

const Webcam: React.FC = () => {
  const ref = useRef<WebcamBase>(null);

  useEffect(() => {
    return () => {
      if (!ref.current?.video?.srcObject) return;
      ref.current.video.srcObject = null;
      ref.current.video.load();
    };
  }, []);

  return <WebcamBase ref={ref} />;
};

export default App;
