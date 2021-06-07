import React, { useState, useRef } from "react";
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
  
  const [taskNumber, setTaskNumber] = useState();
  const [task, setTask] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const rateColor = {
    color: "#40a9ff"
  };

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
   
    const values = {
      ...fieldsValue,
      'duedate': fieldsValue['duedate'].format('YYYY-MM-DD HH:mm'),
      'status' : "todo" 
    };
    console.log('Received values of form: ', values);
    console.log(values["details"])
    setTask(values)
  };

 function handleSubmit(e) {
    e.preventDefault();
    console.log("ok")

    
   
  }
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
  /*
  https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs 
  
  
  https://ant.design/components/form/
  
  https://www.youtube.com/watch?v=a00NRSFgHsY
  
  https://entry-cz.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/19655714#overview
  */
  return (
    <div>
      <Jumbotron className="mt-5">TASK PLANNER
     
      </Jumbotron>
      <Container className="justify-content mt-5">
        <Row>
          <Form 
      className="ant-form" onFinish={onFinish}   onFinishFailed={onFinishFailed} style={{ width: "100%" }}>
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
                <Form.Item name="duedate">
                  <DatePicker 
                  
                  placeholder="Due date" 
                  format="YYYY-MM-DD HH:mm" />
                </Form.Item>
              </Col>
            </Row> 
            <Row>
              <Col span={12}>
                <Form.Item name="details" >
                  <Input.TextArea  placeholder="Put details" />
                </Form.Item>
              </Col>
              <Col span={6} offset={6}>
                <Form.Item name="slider">
                  <Rate defaultValue={2} style={rateColor} character={({ index }) => index + 1} />
                </Form.Item>
              </Col>

            </Row>
            <Row>
              <Col span={6}>
                <Form.Item >
                  <Button type="primary" htmlType="submit" >
                    Submit
        </Button>
                </Form.Item>
              </Col>


            </Row>
          </Form>
        </Row>
        <Divider />
        <Row>
          <Col span={8}>TODO
          </Col>

          <Col span={7}>
            <Divider type="vertical" style={{ height: "100%" }} />
            ONGOING</Col>
          <Divider type="vertical" style={{ height: "100%" }} />
          <Col span={7}>
            <Divider type="vertical" style={{ height: "100%" }} />FINISHED</Col>
        </Row>

        <Divider />
        <Row>
          <Col span={8}>TASK#1 ></Col>
          <Col span={7}>
            <Divider type="vertical" style={{ height: "100%" }} />
          TASK#2</Col>
          <Divider type="vertical" style={{ height: "100%" }} />
          <Col span={7}>
            <Divider type="vertical" style={{ height: "100%" }} />TASK#3</Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Homepage;
