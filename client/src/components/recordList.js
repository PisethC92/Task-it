import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// This component renders a single record in the table.
const Record = (props) => (
  <tr>
    <td>{props.record.title}</td>
    <td>{props.record.description}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database using the GET method.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      // Alert the user if the GET request failed
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      // Set the `records` state with the response data
      const records = await response.json();
      setRecords(records);
    }
    // Call the `getRecords` method on component mount and whenever `records.length` changes
    getRecords();
    return; 
  }, [records.length]);

  // This method deletes a record from the database using the DELETE method.
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    // Update the `records` state with the new array that excludes the deleted record
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  
// This method sorts the records by title using the sorting microservice
async function sortRecords() {
  // Send a POST request to the sorting microservice with the current set of records
  const response = await fetch(`http://localhost:5001/sort`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(records)
  });

  // Update the `records` state with the sorted records
  const sortedRecords = await response.json();
  setRecords(sortedRecords);
}


  // This method maps out each record as a `Record` component in the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This section displays the table with the records
  return (
    <div>
      <h3>Task List</h3>
      <p1>This is the list of all of your tasks <br></br></p1>
      <br></br>
      <button className="btn btn-primary mb-3" onClick={sortRecords}>
        Sort by Title
      </button>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
