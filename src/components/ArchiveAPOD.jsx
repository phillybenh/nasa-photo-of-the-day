import React from "react";

export default function ArchiveAPOD(props) {
  return (
    <section>
      <h3>Want to see a previous APOD?</h3>

      <label for="APODDate">Please choose a date:</label>
      <input type="date" id="APODDate" name="APODDate" />
      <input type="submit" onClick={() => console.log()}/>
    </section>
  );
}
