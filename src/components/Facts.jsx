import React from 'react';
import styled from "styled-components";

const FactsPara = styled.p`
  text-align: justify;
`
export default function Facts(props) {

const data = props.data;

return (
  <section className="factsContainer">
    <h2>{data.title}</h2>
    <FactsPara>{data.explanation}</FactsPara>
  </section>
);

}