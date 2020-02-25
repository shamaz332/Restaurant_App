import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';

const  RenderDish = ({dish})=>{
    return(
       <Row>
           <Col xs="12" sm="12" md="6" lg="6" xl="6">
           <Card>
               <CardImg top src={dish.image} alt={dish.name}/>
   <CardBody>
    <CardTitle>{dish.name}</CardTitle>
    <CardText>{dish.description}</CardText>
   </CardBody>
    </Card>
           </Col>
       </Row>
    )
}

const RenderComments = ({comments}) =>{
    if(comments != null)
    {
        return(
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
return(
    <li key={comment.id}>
        <p>{comment.comment}</p>
<p>-- {comment.author},{new Intl.DateTimeFormat('en-us',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
    </li>
)
                        })}
                    </ul>
                </Col>
            </Row>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const Dishdetail = (props)=>{
    if(props.dish != null){
        return(
            <Container>
                <Row>
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
        <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <Col >
        <h3>{props.dish.name}</h3>
        <hr/>

                    </Col>
                </Row>
                <Row>
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}></RenderComments>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
export default Dishdetail;