import { Divider, Select } from "antd";
import React, {
  useState
} from "react";
import {
  Form
} from "react-bootstrap";


import { useFetch } from "./useFetch2";
import { useAuth } from "../contexts/AuthContext"
import { useData } from "../contexts/DataContext"



export default function UpdateCrypto() {
  const {userData, setData} = useData()
  const { Option } = Select;
 
  const [selectedC, setSelectedC] = useState(userData.cryptoList);
  const [selectedF, setSelectedF] = useState(userData.fiatList);
  const { currentUser } = useAuth();
  

  const url = "https://api.pro.coinbase.com/currencies";
  const { loading, products } = useFetch(url);


  function handleChangeC(value) {
    setSelectedC(value);
    setData(value, "cryptoList");
    /* ulozeni do State 
    https://www.robinwieruch.de/react-derive-state-props
    */
  }
  function handleChangeF(value) {
  
      setSelectedF(value);
      setData(value,"fiatList");
  
    /* ulozeni do State */
  }



return (
  <div>
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
    </div>
    
  
  );
}
