import { Divider, Select, Typography } from "antd";
import React, {
  useState
} from "react";
import {
  Form
} from "react-bootstrap";
import { useFetch } from "./useFetch2";
const { Option } = Select;

export default function UpdateCrypto(props) {
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
            <Option key={c.id} value={c.id} label={c.name}>
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
    </Form>
    
    
    </div>
  );
}
/* TODO - > Default values of listboxes -> 
fetch from DB <-> passing to DB 
DB connection
*/
