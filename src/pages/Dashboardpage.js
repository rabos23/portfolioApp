import React, { Component } from 'react'
import Hero from "../components/Hero";
export default function Dashboard(props){
    return <div><Hero
    title={props.title}
    subTitle={props.subTitle}
    text={props.text}
  /> </div>
}