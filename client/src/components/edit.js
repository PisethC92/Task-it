import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./edit.css"

export default function Edit() {
  // Initialize the form state with default values
  const [form, setForm] = useState({
    title: "",
    description: "",
    records: [],
  });

  // Get the record id from the URL params and initialize the navigation object
  const params = useParams();
  const navigate = useNavigate();

  // Fetch the record data from the server and update the form state when the component mounts
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

      // Handle errors if any occur during the fetch request
      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      // Get the record data and update the form state
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    // Clean up function for the effect hook
    return;
  }, [params.id, navigate]);

  // Update the form state with new values
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Submit the updated record data to the server
  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      title: form.title,
      description: form.description,
    };

    // Send a POST request to update the record data in the database
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    // Navigate back to the record list page
    navigate("/recordList");
  }

  // Render the form for updating the record data
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group buttons">
          <button type="submit" className="btn btn-primary">
            Update Task
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/recordList")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
