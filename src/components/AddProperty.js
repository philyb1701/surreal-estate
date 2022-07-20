import React, { useState } from "react";
import axios from "axios";
import "../styles/addproperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  axios.defaults.baseURL = "http://localhost:3000/api/v1";

  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("/PropertyListing", fields)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h1>Add Property Page</h1>
      <form onSubmit={handleAddProperty} className="add-properties-form">
        <label htmlFor="title" className="form-label">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="Property name"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="city" className="form-label">
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type" className="form-label">
          Property Type:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedroom" className="form-label">
          Bedrooms:
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            placeholder="1"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathroom" className="form-label">
          Bathrooms:
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            placeholder="1"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price" className="form-label">
          Price (£):
          <input
            type="number"
            id="price"
            name="price"
            value={fields.price}
            placeholder="50,000"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="email" className="form-label">
          Email:
          <input
            id="email"
            type="email"
            name="email"
            value={fields.email}
            placeholder="Enter email..."
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
