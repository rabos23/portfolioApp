import React, { useState, useRef } from "react";
import Hero from "../components/Hero";
import { Container, Image } from "react-bootstrap";
import { useData } from "../contexts/DataContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import "antd/dist/antd.css";
import "../index.css";
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import { firestore } from "../firebase";
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
  EditTwoTone,
  DeleteTwoTone,
  CheckCircleTwoTone,
  ExclamationOutlined,
  LeftOutlined,
} from "@ant-design/icons";

function Homepage(props) {
  /* DODELAT FIRESTORE DATABAZI */
  const [taskNumber, setTaskNumber] = useState();
  const [todos, setTodos] = useState([
    /*   {
      subject: "Subject",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque arcu. Nullam dapibus fermentum ipsum. Nunc auctor. ",
      duedate: "2021-06-16 07:41",
      id: "1",
      slider: "3",
      status: "todo",
    }, */
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rateColor, setRateColor] = useState("#40a9ff");
  const { userData, setData } = useData();
  const { currentUser } = useAuth();

  function changeRateColor(value) {
    console.log(value);
    if (value == 1) setRateColor("#40a9ff");
    if (value == 3) setRateColor("#610b00");
    if (value == 2) setRateColor("#ffc069");
  }

  async function onFinish(fieldsValue) {
    const values = {
      ...fieldsValue,
    };

    if (fieldsValue["duedate"]) {
      values.duedate = fieldsValue["duedate"].format("DD-MM-YYYY HH:mm");
    }

    if (todos) {
      values.id = todos.length;
    }
    const newTodos = todos.slice();
    newTodos.push(values);
    setTodos(newTodos);
    console.log(todos);

    /*  const cityRef = firestore.collection("users").doc(currentUser.uid);
     await cityRef.update({ todos: values }) */

    setLoading(false);
  }

  const getUserStars = (points) => {
    let i = 0;
    let stars = [];
    let exColor;
    if (points == 1) exColor = "#40a9ff";
    if (points == 3) exColor = "#610b00";
    if (points == 2) exColor = "#ffc069";
    while (i < points) {
      i++;
      stars.push(
        <ExclamationOutlined
          style={{ marginTop: "5%", marginLeft: "-7%", color: exColor }}
        />
      );
    }
    return stars;
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function removeTask(todo) {
   
/*     setTodos((prevState) => ({
      todos: prevState.todos.filter(el => el.id !=) */
    }
  
  const statusUpdate = (status, taskid) => {
    if (status === "todo") {
      let newTodos = [...todos];
      newTodos[taskid] = { ...newTodos[taskid], status: "ongoing" };
      setTodos(newTodos);
      console.log(todos);
    }
    if (status === "ongoing") {
      let newTodos = [...todos];
      newTodos[taskid] = { ...newTodos[taskid], status: "finished" };
      setTodos(newTodos);
      console.log(todos);
    }
    if (status === "finished") {
      let newTodos = [...todos];
      newTodos[taskid] = { ...newTodos[taskid], status: "ongoing" };
      setTodos(newTodos);
      console.log(todos);
    }
  };
  /*
  https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs 
  
  
  https://ant.design/components/form/
  
  https://www.youtube.com/watch?v=a00NRSFgHsY
  
  https://entry-cz.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/19655714#overview
  */
  // Should format date value before submit.
  /* 
    
    https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np
     –––––––––––––––-
    Just to clarify, the solution was simpler than expected.

In

const showTasks = () =>  taskList.map((item, index) => (
        <SingleTask
            taskObj={item}
            removeTask ={removeTask}
            key = {item.id}
        />
        )
    )
I was passing map index as a key, when I changed it to {item.id} everything works as expected.
    ––––
    https://stackoverflow.com/questions/55197957/update-list-of-displayed-components-on-deletion-in-react/55198360
    */

  return (
    <div>
      <Jumbotron className="mt-5">TASK PLANNER</Jumbotron>
      <Container className="justify-content mt-5">
        <Row>
          <Form
            className="ant-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
            initialValues={{
              status: "todo",
              slider: 2,
            }}
          >
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
                    format="YYYY-MM-DD HH:mm"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item name="details">
                  <Input.TextArea placeholder="Put details" />
                </Form.Item>
              </Col>
              <Col span={6} offset={6}>
                <Form.Item name="slider">
                  <Rate
                    defaultValue={2}
                    count={3}
                    style={{ color: rateColor }}
                    onHoverChange={(value) => changeRateColor(value)}
                    character={({ index }) => index + 1}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="status"
                  rules={[
                    {
                      message: "Please pick an item!",
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio.Button value="todo">TODO</Radio.Button>
                    <Radio.Button value="ongoing">ONGOING</Radio.Button>
                    <Radio.Button value="finished">FINISHED</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Form.Item>
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
          <Col span={8}>
            <Row>TODO</Row>
            <Row>
              {todos
                ? todos.map((el) => {
                    if (el.status == "todo")
                      return (
                        <Container
                          key={el.id}
                          style={{ width: "90%" }}
                          className="ant-form m-1"
                        >
                          <Row>
                            <Col span={10}>
                              <Row>
                                { }
                                {el.subject} #{el.id} &nbsp;
                                {el.slider ? getUserStars(el.slider) : ""}{" "}
                              </Row>
                            </Col>
                            <Col span={4} offset={10}>
                              <DeleteTwoTone
                                onClick={() => removeTask(el.id)}
                              />

                              <RightOutlined
                                onClick={() => statusUpdate("todo", el.id)}
                              />
                            </Col>
                          </Row>
                          <Row>{el.details}</Row>

                          <Row style={{ color: "#DDDDDD" }}>
                            {!el.duedate ? "no duedate" : el.duedate}
                          </Row>
                        </Container>
                      );
                  })
                : "THERE IS NO TASK TO SEE. ADD ONE"}
            </Row>
          </Col>

          <Col span={8}>
            <Row>ONGOING</Row>
            <Row>
              {todos
                ? todos.map((el) => {
                    if (el.status == "ongoing")
                      return (
                        <Container
                          key={el.id}
                          style={{ width: "90%" }}
                          className="ant-form m-1"
                        >
                          <Row>
                            <Col span={10}>
                              <Row>{el.status === "ongoing" ? <LeftOutlined style={{marginTop:"5%"}}onClick={() => statusUpdate("ongoing", el.id)}  /> : ""}</Row>
                              <Row>
                              
 {el.subject} #{el.id} &nbsp;
                                {el.slider ? getUserStars(el.slider) : ""}{" "}
                              </Row>
                            </Col>
                            <Col span={4} offset={10}>
                              <DeleteTwoTone
                                onClick={() => removeTask(el.id)}
                              />
                              <CheckCircleTwoTone
                                onClick={() => statusUpdate("ongoing", el.id)}
                                twoToneColor="#52c41a"
                              />
                            </Col>
                          </Row>
                          <Row>{el.details}</Row>

                          <Row style={{ color: "#DDDDDD" }}>
                            {!el.duedate ? "no duedate" : el.duedate}
                          </Row>
                        </Container>
                      );
                  })
                : "THERE IS NO TASK TO SEE. ADD ONE"}
            </Row>
          </Col>

          <Col span={8}>
            <Row>FINISHED</Row>
            <Row>
              {todos
                ? todos.map((el) => {
                    if (el.status == "finished")
                      return (
                        <Container
                          key={el.id}
                          style={{ width: "90%" }}
                          className="ant-form m-1"
                        >
                          <Row>
                            <Col span={10}>
                              <Row>
                                {" "}
                                {el.subject} #{el.id} &nbsp;
                                {el.slider ? getUserStars(el.slider) : ""}{" "}
                              </Row>
                            </Col>
                            <Col span={4} offset={10}>
                              <DeleteTwoTone
                                onClick={() => removeTask(el.id)}
                              />
                              <LeftOutlined
                                onClick={() => statusUpdate("finished", el.id)}
                              />
                            </Col>
                          </Row>
                          <Row>{el.details}</Row>

                          <Row style={{ color: "#DDDDDD" }}>
                            {!el.duedate ? "no duedate" : el.duedate}
                          </Row>
                        </Container>
                      );
                  })
                : "THERE IS NO TASK TO SEE. ADD ONE"}
            </Row>
          </Col>
        </Row>
        <Divider />
      </Container>
    </div>
  );
}

export default Homepage;
