import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import { Divider, Select, Switch } from "antd";

import { useFetch } from "./useFetch2";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";

export default function Updateprofile(props) {
  const { currentUser } = useAuth();
  const { setData, userData } = useData();

  const [error, setError] = useState("");

  const { Option } = Select;
  const [showMsg,setShowMsg] = useState()
  const [selectedC, setSelectedC] = useState(userData.cryptoList);
  const [selectedF, setSelectedF] = useState(userData.fiatList);
  const [username, setUsername] = useState(userData.username);

  const url = "http://api.coingecko.com/api/v3/coins/";
  const fetch = useFetch(url);

  function handleChangeC(value) {
    setSelectedC(value);
    setData(value, "cryptoList");
    /* ulozeni do State 
    https://www.robinwieruch.de/react-derive-state-props
    */
  }
  function handleChangeF(value) {
    setSelectedF(value);
    setData(value, "fiatList");

    /* ulozeni do State */
  }

  const usernameRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await setData(usernameRef.current.value, "displayName");
    } catch {
      setError("Failed to login");
    }
  }
  async function showMsgHandle(e) {
    console.log(e);
    try {
      setError("");

      await setData(e, "showMsg");
    } catch {
      setError("Failed to login");
    }
  }

  useEffect(() => {
    if (currentUser && userData) {
      setUsername(userData.displayName);
      setShowMsg(userData.showMsg);
    }
  }, [userData.displayName, userData.showMsg]);
  return (
    /* 
    CHANGE NOT WORKING PROPERLY : Emain same not working, while changing credentials automatically logout and login -> redirect to login page
    Data store provider -> if !exists then create default -> also default prices
    */
    <div>
      {error ? error : ""}
      <Form
        onChange={handleSubmit}
        style={{ alignItems: "center", marginTop: "10px" }}
      >
        <Form.Group id="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder={username ? username : "Put username u want"}
            ref={usernameRef}
          />
        </Form.Group>
        <Divider />
        {/*  <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder={props.email}
          ref={emailRef}
        />
      </Form.Group> */}
      </Form>

      <Form style={{ alignItems: "center", marginTop: "10px" }}>
        <Form.Label>Choose crypto currency</Form.Label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          defaultValue={selectedC}
          placeholder="Select currency"
          onChange={handleChangeC}
          optionLabelProp="label"
        >
          {fetch.products.map((c) =>
             (
              <Option key={c.id} value={c.symbol} label={c.symbol.toUpperCase()}>
                {c.id.charAt(0).toUpperCase() + c.id.slice(1)}
              </Option>
            )
          )}
        </Select>

        <Divider />

        <Form.Label>Choose fiat currency</Form.Label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          defaultValue={selectedF}
          placeholder="Select currency"
          onChange={handleChangeF}
          optionLabelProp="label"
        >
          {fetch.products.map((c) =>
            (
              <Option key={c.id} value={c.id} label={c.id}>
                {c.id}
              </Option>
            )
          )}
        </Select>
        <Divider />
        <Form.Label>Show msg´s</Form.Label>
        <br />
        <Switch checked={showMsg} onChange={showMsgHandle} />
      </Form>
    </div>
  );
}
