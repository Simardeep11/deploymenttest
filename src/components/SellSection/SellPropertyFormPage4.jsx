import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./SellPropertyFormPage4.css";
import logo from '/logo2.png'; // Adjust the path to your logo file

const SellPropertyFormPage4 = ({ nextStep, prevStep, form, handleChange, handleSubmit }) => {
  const [previewImages, setPreviewImages] = useState({
    imageUrl1: form.imageUrl1 || '',
    imageUrl2: form.imageUrl2 || '',
    imageUrl3: form.imageUrl3 || ''
  });

  const handleDrop = (acceptedFiles, field) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const event = {
        target: {
          name: field,
          value: reader.result
        }
      };
      handleChange(event);
      setPreviewImages((prevImages) => ({
        ...prevImages,
        [field]: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const createDropzone = (field, label) => {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, field)
    });

    return (
      <div className="page4-image-upload-section">
        <div className="page4-image-url">
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`${label} URL`}
            className="page4-sell-property-input"
          />
        </div>
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image file here, or click to select one for {label}</p>
        </div>
        {previewImages[field] && (
          <div className="page4-image-preview">
            <img src={previewImages[field]} alt={`Preview ${label}`} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page4-container">
      <div className="page4-left-column">
        <img src={logo} alt="Elite Estate Logo" className="page4-logo" />
        <h1>Hi! We want to buy your home.</h1>
        <div className="page4-contact-box">
          <p>Have questions? Please call us. 1-877-850-4448</p>
        </div>
      </div>
      <div className="page4-right-column">
        <div className="page4-form-container">
          <h1>Sell Your Property - Upload Images</h1>
          <form onSubmit={handleSubmit} className="page4-sell-property-form">
            <div className="page4-horizontal-structure">
              {createDropzone('imageUrl1', 'Image 1')}
              {createDropzone('imageUrl2', 'Image 2')}
              {createDropzone('imageUrl3', 'Image 3')}
            </div>
            <div className="page4-button-container">
              <button type="button" className="page4-back-button" onClick={prevStep}>Back</button>
              <button type="submit" className="page4-submit-button">Submit Property</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellPropertyFormPage4;
