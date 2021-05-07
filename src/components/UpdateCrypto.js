import { Divider, Select, Typography } from "antd";
import React, {
  useState, useEffect, useContext
} from "react";
import {
  Form
} from "react-bootstrap";
import { useFetch } from "./useFetch2";
import { useAuth } from "../contexts/AuthContext"
import { useData } from "../contexts/DataContext"
import {firestore} from "../firebase"
export default function UpdateCrypto(props) {
  const {userData} = useData
  const { Option } = Select;
 
  const [selectedC, setSelectedC] = useState();
  const [selectedF, setSelectedF] = useState();
  const { currentUser } = useAuth();

  const url = "https://api.pro.coinbase.com/currencies";
  const { loading, products } = useFetch(url);


  function handleChangeC(value) {
    setSelectedC(value);
    firestore.collection("users").doc(currentUser.uid).update({
      crypto: value  
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  })
  
    /* ulozeni do State 
    https://www.robinwieruch.de/react-derive-state-props
    */
  }
  function handleChangeF(value) {
    if(value.indexOf("USD"))
    {
      value[value.indexOf("USD")] = "USDT"
      
    }else {
      setSelectedF(value);
    } 
    /* ulozeni do State */
    
    firestore.collection("users").doc(currentUser.uid).update({
      fiat: value  
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  })
  }



return (
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
        {products.map((c) =>
          c.details.type == "crypto" ? (
            <Option key={c.id} value={c.id} label={c.id}>
              {c.name}
            </Option>
          ) : null
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
        {products.map((c) =>
          c.details.type == "fiat" ? (
            <Option key={c.id} value={c.id} label={c.id}>
              {c.name}
            </Option>
          ) : null
        )}
      </Select>
    </Form>
    
    
  
  );
}
/* TODO - > Default values of listboxes -> 
fetch from DB <-> passing to DB 
DB connection
*/
