import React, { useState } from "react";
import FileDownloadButton from "../downloadFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { bio } from "../../data/resume-data";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    console.log("setFormData", setFormData);
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully, provide user feedback
      } else {
        // Handle errors and provide feedback to the user
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Message" />
        <button type="submit">Send Email</button>
      </form>
      <FileDownloadButton />
      <p>
        <FontAwesomeIcon icon={faMobile} />
        <span className="" style={{ marginLeft: "4px" }}>
          {bio.mobile}
        </span>
      </p>
    </>
  );
}

export default ContactForm;
