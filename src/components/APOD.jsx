import React, { useState, useEffect } from "react";
import Facts from "./Facts";
import ArchiveAPOD from "./ArchiveAPOD";
import axios from "axios";
import "../index.scss";
import styled from "styled-components";

//Styles
const SpacePic = styled.img`
  width: 100%;
  height: auto;
`;
const SpaceVid = styled.iframe`
  width: 100%;
  height: auto;
`;
const APODContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin-bottom: 15px;
  border: 2px solid black;
  background: ${(props) => (props.primary ? "lightblue" : "lightgrey")};
  color: black;
  border-radius: 20px;
`;

//Main Function
export default function APOD() {
  //Set Variable State
  const [POD, setPOD] = useState("");
  const [dateURL, setDateURL] = useState("");

  //Fcn to set up date picker
  const archiveURL = (date) => {
    return setDateURL(`&date=${date}`);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Fxx4K3wvOl3k3rZ7xqXhJk3bCwLtfxbMXnbAbhLA${dateURL}`
      )
      .then((response) => {
        // console.log(response.data);
        setPOD(response.data);
      })
      .catch((error) => console.log("the NASA APOD was not returned", error));
  }, [dateURL]);

  //Loading message for slow-loads
  if (!POD) {
    return <h3>Loading...</h3>;
  } else if (POD.media_type === "image") {
    return (
      <APODContainer>
        <ContentContainer>
          <a href={POD.hdurl} target="_blank" rel="noopener noreferrer">
            <figure>
              <SpacePic
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
        </ContentContainer>
        <ContentContainer primary>
          <Facts data={POD} />
        </ContentContainer>
        <ContentContainer>
          <ArchiveAPOD archiveURL={archiveURL} />
        </ContentContainer>
      </APODContainer>
    );
  } else if (POD.media_type === "video") {
    return (
      <APODContainer>
        <ContentContainer>
          <a href={POD.url} target="_blank" rel="noopener noreferrer">
            <figure>
              <SpaceVid
              src={POD.url}
              alt="the NASA Astronomy Vid of the Day"
              title={POD.title}
              />
              <figcaption>
                {`Copyright: ${POD.copyright} | Date: ${POD.date}`}
              </figcaption>
              <figcaption>(click for external video)</figcaption>
            </figure>
          </a>
        </ContentContainer>
        <ContentContainer primary>
          <Facts data={POD} />
        </ContentContainer>
        <ContentContainer>
          <ArchiveAPOD archiveURL={archiveURL} />
        </ContentContainer>
      </APODContainer>
    );
  } else {
    return <h3>Sorry, today's APOD file type not supported.</h3>;
  }
}
