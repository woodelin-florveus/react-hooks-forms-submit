import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submitData, setSubmitData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
      const formData = {
        firstName: firstName,
        lastName: lastName
      };
      const dataArray = [...submitData, formData];
      setSubmitData(dataArray)      
      setFirstName("")
      setLastName("")
    // console.log(event.target.value)
  }

  const listOfSubmit = submitData.map((userData, index) => {
    console.log(userData)
      return(
        <div key={index}>
          {userData.firstName} {userData.lastName}
        </div>
      );
  });

  return (
      <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
      {listOfSubmit}
      </div>
  );
}

export default Form;
