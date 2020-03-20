import React from 'react';
import styled from "styled-components";

export default function Facts(props) {

const data = props.data;

return (
<section className="factsContainer">
    <h2>{data.title}</h2>
    <p>{data.explanation}</p>


</section>


)

}