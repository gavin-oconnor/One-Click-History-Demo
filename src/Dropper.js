import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropper = ({ setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        width: Math.min(500, window.innerWidth - 20),
        height: 300,
        border: "2px #ffffcf solid",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "default",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>Drop the picture here ...</p>
      ) : (
        <p style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
          Drag and drop a picture of a landmark here, or click to select an image
        </p>
      )}
    </div>
  );
};

export default Dropper;
