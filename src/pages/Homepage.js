import React, { useState } from "react";
import Hero from "../components/Hero";
import { Container, Image } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "antd/dist/antd.css";
import "../index.css";
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Row,
  Col,
  Button,
  Upload,
  Rate,
  Checkbox,
  Input,
  Space,
  Divider,
  DatePicker,
} from "antd";

import {
 
  RightOutlined,
  FileMarkdownFilled,
} from "@ant-design/icons";

function Homepage(props) {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  
const initialFormData = Object.freeze({
  taskid:"",
  object: "",
  details: "",
  duedate:"",
  rate:""
});

  return (
    <div>
      <Jumbotron className="mt-5">TASK PLANNER</Jumbotron>
      <Container className="justify-content mt-5">
        <Row>
          <Form className="ant-form" style={{ width: "100%" }}>
            <Row>
              <Col span={12}>
                {" "}
                <Form.Item>
                  <span className="ant-form-text">Task Number #</span>
                </Form.Item>
              </Col>
              
            </Row>

            <Row>
              <Col span={6}>
                <Form.Item
                  name="subject"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<RightOutlined className="site-form-item-icon" />}
                    placeholder=" Subject"
                  />
                </Form.Item>
              </Col>
              <Col span={6} offset={12}>
                {" "}
                <Form.Item>
                  <DatePicker placeholder="Due date" onChange={onChange} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
              <Form.Item name={['user', 'introduction']} >
        <Input.TextArea placeholder="Put details" />
      </Form.Item>
              </Col>
              <Col span={6} offset={6}>
                <Form.Item name="slider">
                  <Rate defaultValue={2} character={({ index }) => index + 1} />
                </Form.Item>
              </Col>
             
            </Row>
            <Row>
              <Col span={6}>
              <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
              </Col>

              
            </Row>
          </Form>
        </Row>
        <Divider />
        <Row>
          <Col span={8}>TODO</Col>
          <Col span={8}>ONGOING</Col>
          <Col span={8}>FINISHED</Col>
        </Row>

        <Divider />
        <Row>
          <Col span={8}>TASK#1</Col>
          <Col span={8}>TASK#2</Col>
          <Col span={8}>TASK#3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
