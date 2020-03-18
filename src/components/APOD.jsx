import React, { useState, useEffect } from "react";
import Facts from "./Facts";
import "./APOD.css";
import axios from "axios";

export default function APOD() {
  const [POD, setPOD] = useState("");
  //   const [date, setDate] = useState("today")
  // &date=${date}
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Fxx4K3wvOl3k3rZ7xqXhJk3bCwLtfxbMXnbAbhLA"
      )
      .then(response => {
        console.log(response.data);
        setPOD(response.data);
      })
      .catch(error => console.log("the NASA APOD was not returned", error));
  }, []);

  if (!POD) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <section className="photoContainer">
        <a href={POD.hdurl} target="_blank" rel="noopener noreferrer">
          <figure>
            <img
              src={POD.url}
              alt="the NASA Astronomy Pic of the Day"
              title={POD.title}
            />
            <figcaption>
              {`Copyright: ${POD.copyright} | Date: ${POD.date}`}
            </figcaption>
            <figcaption>(click for hi-res version)</figcaption>
          </figure>
        </a>
        <Facts data={POD} />
      </section>
    </div>
  );
}
