import React, { Component } from 'react';
import {Row,Col,Container, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const MenuItems = ({dish})=>{
    return(
<Card>
    <Link to={`/menu/${dish.id}`}>
    <CardImg style={{height:'400px'}} src={dish.image} alt={dish.name}/>
    <CardImgOverlay>
        <CardTitle>
            {dish.name}
        </CardTitle>
    </CardImgOverlay>
    </Link>
</Card>
    )
}

const Menu = (props)=>{
    const menu = props.dishes.map((dish)=>{
        return(

           <Col xs="12" sm="12" md="6" lg="6" xl="6">
<MenuItems dish={dish}/>
               </Col>

            
        )
    })
    return(
        <Container> 
            <Row>
                <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link active>Menu</Link></BreadcrumbItem>
                </Breadcrumb>
                <Col>
                <h3>Menu</h3>
                </Col>
            </Row>

<Row>
    {menu}
</Row>
</Container>
    )
}

export default Menu;