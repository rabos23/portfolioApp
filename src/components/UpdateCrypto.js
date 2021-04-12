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
  const [selectedC, setSelectedC] = useState([]);
  const [selectedF, setSelectedF] = useState([]);

  function handleChangeC(value) {
    setSelectedC(value);
    /* ulozeni do State */
  }
  function handleChangeF(value) {
    setSelectedF(value);
    /* ulozeni do State */
  }

  const url = "https://api.pro.coinbase.com/currencies";
  const { loading, products } = useFetch(url);

  return (
    <div style={{ height: "200px", marginTop: "10px" }}>
      <Title level={5}> Choose crypto currencies </Title>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        defaultValue={selectedC}
        placeholder="Select currency"
        onChange={handleChangeC}
        optionLabelProp="label"
      >
        {products.map((c) =>
          c.details.type == "crypto" ? (
            <Option key={c.id} value={c.id} label={c.name}>
              {c.name}
            </Option>
          ) : null
        )}
      </Select>

      <Divider />

      <Title level={5}> Choose fiat currencies </Title>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Select currency"
        onChange={handleChangeF}
        optionLabelProp="label"
      >
        {products.map((c) =>
          c.details.type == "fiat" ? (
            <Option key={c.id} value={c.id} label={c.name}>
              {c.name}
            </Option>
          ) : null
        )}
      </Select>
    </div>
  );
}
/* TODO - > Default values of listboxes -> 
fetch from DB <-> passing to DB 
DB connection
*/
