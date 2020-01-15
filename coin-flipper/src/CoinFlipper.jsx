import React, {Component} from 'react'
import './CoinFlipper.css'
import Coin from './Coin'

class CoinFlipper extends Component{
    // Default Props
    static defaultProps = {
        title: 'Coin Flipper'
    }
    //Constructor / States
    constructor(props){
        super(props);
    }
    //Methods
    //Render Method
    render(){
        return(
            <section className="CoinFlipper">
                <h1>{this.props.title}</h1> 
                <Coin></Coin>
            </section>
        )
    }
}

export default CoinFlipper