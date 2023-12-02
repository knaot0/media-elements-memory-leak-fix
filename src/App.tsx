import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const ref = useRef<Webcam>(null);
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    return () => {
      if (ref.current?.video?.srcObject) {
        ref.current.video.srcObject = null;
      }
    };
  }, []);

  return (
    <div>
      <button onClick={toggle}>{open ? 'Delete' : 'Create'}</button>
      {open && <Webcam />}
    </div>
  );
};

export default App;
