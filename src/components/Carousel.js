import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../components/Card";
class Carousel extends Component {
  state = {
    items: [
      {
        id: 0,
        title: "Pic 1",
        subTitle: "subPic1",
        imgSrc: "https://dummyimage.com/1920x1080/000000/ffffff.jpg",
        link: "https://google.com",
        selected: false,
      },
      {
        id: 1,
        title: "Pic 2",
        subTitle: "subPic2",
        imgSrc: "https://dummyimage.com/1920x1080/000000/ffffff.jpg",
        link: "https://google.com",
        selected: false,
      },
      {
        id: 2,
        title: "Pic 3",
        subTitle: "subPic3",
        imgSrc: "https://dummyimage.com/1920x1080/000000/ffffff.jpg",
        link: "https://google.com",
        selected: false,
      },
    ],
  };
  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
