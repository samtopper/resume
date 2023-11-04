import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FileDownloadButton = () => {
  const handleDownload = () => {
    // Create a URL to the file
    const fileUrl =
      "https://app.enhancv.com/share/ba12fcd7/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic";
    // const fileUrl = "";
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "file.pdf"; // Set the desired file name

    // Simulate a click event to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary link element
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Resume
      <FontAwesomeIcon icon={faFileDownload} />
    </button>
  );
};

export default FileDownloadButton;
