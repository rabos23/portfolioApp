import React, {
  Component,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { Select, Typography, Divider } from "antd";
import { useFetch } from "./useFetch2";
import {
  Form,
  Button,
  Card,
  Container,
  Alert,
  Dropdown,
} from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
const { Option } = Select;

export default function UpdateCrypto() {
  const { Option } = Select;
  const { Title } = Typography;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const url = "https://api.pro.coinbase.com/currencies";
  const { loading, products } = useFetch(url);

  let array = [];
  const data = [];
  if (loading == true) {
    console.log("loading");
  } else {
    products.map((c) => console.log(c.name));
  }

  return (
    <div style={{ height: "200px" }}>
      <Divider />

      <Title level={5}> Choose from {data.length} crypto currencies </Title>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Select currency"
        onChange={handleChange}
        optionLabelProp="label"
      >
        {products.map((c) => (
          <Option value={c.id} label={c.name}>
            {c.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
