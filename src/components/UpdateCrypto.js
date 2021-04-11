import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Select } from "antd";


export default function UpdateCrypto(){
  const { Option } = Select;

handleChange(value) {
  console.log(`selected ${value}`);
}
render(
  <Select
    mode="multiple"
    style={{ width: "100%" }}
    placeholder="select one country"
    defaultValue={["china"]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>
  </Select>
);
}