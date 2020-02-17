import React, { Component } from 'react';
import Header from './Header'
import Home from './Home'
import {DISHES} from '../dummyData/dishes'
import {COMMENTS} from '../dummyData/comment'
import {LEADERS} from '../dummyData/leaders'
import {PROMOTIONS} from '../dummyData/promotion'
import { Switch ,Route, Redirect} from 'react-router';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        }
    }
    render() {
        const HomePage = ()=>{
            return(
            <Home 
            dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
            />
            )
        }
// const DishWithID = (match)=>{
//     return(

//     )
// }
        return (
            <div>
                <Header/>
               <Switch>
                   <Route path="/home" component={HomePage}/>
               </Switch>

            </div>
        );
    }
}

export default Main;