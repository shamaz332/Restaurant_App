import React from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

      const CardRender=({item})=>{
         return (
         <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
      <CardTitle>{item.name}</CardTitle>
      {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
      <CardText>{item.description}</CardText>
            </CardBody>
         </Card>
         )
   }


   
   const Home = (props)=>{
      return (
         <Container>
           <Row>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
          <CardRender item={props.dish}/>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
          <CardRender item={props.promotion}/>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
          <CardRender item={props.leader}/>
          </Col>
           </Row>
            </Container>
      );
   }


export default Home;