import React, { useEffect, useState } from "react";
import Dropper from "./Dropper";
import Page from "./Page";

const Main = () => {
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState(null);
  const [index, setIndex] = useState(-1);
  const reset = () => {
    setFile(null);
  };
  useEffect(() => {
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSrc(e.target.result);
        };
        reader.readAsDataURL(file);
      }
      setIndex(index + 1);
    }
  }, [file]);
  return (
    <div className="main-container">
      {!file && <Dropper setFile={setFile} />}
      {file && src && <Page index={index} src={src} reset={reset} />}
    </div>
  );
};

export default Main;
