import React, { useState } from "react";
import styled from "styled-components";

const initState = { userDate: "" };

export default function ArchiveAPOD(props) {
  const [date, setDate] = useState({ ...initState });
  // console.log(props.archiveURL);
  // console.log(date);

  const changeHandler = event => {
    event.preventDefault();
    let value = event.target.value;
    setDate(value);
    console.log(date);
  };

  return (
    <section>
      <h3>Want to see a previous APOD?</h3>

      <label>Please choose a date: </label>
      <input
        type="date"
        id="APODDate"
        name="userDate"
        onChange={
          changeHandler
          // () => setDate("2006-10-09")
          // console.log("can I do something like setDate(this.value)??")
        }
      />
      <input type="submit" onClick={() => props.archiveURL(date)} />
    </section>
  );
}
