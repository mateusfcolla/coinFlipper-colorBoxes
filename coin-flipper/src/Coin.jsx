import React, {Component} from 'react'
import './Coin.css'

class Coin extends Component{
    // Default Props
    static defaultProps = {
        head: 'https://tinyurl.com/react-coin-heads-jpg',
        tail: 'https://tinyurl.com/react-coin-tails-jpg',
        btn_text: 'Flip Coin!'
    }
    // Constructor
    constructor(props){
        super(props);
        this.state = {
            side: 0,
            flips: 0,
            heads: 0,
            tails: 0
        }
    }
    // Methods
    flipCoin(){

    }
    // Render Method
    render(){
        return(
            <section className="Coin">
                
                <img 
                src = {this.state.side == 0 ? this.props.head : this.props.tail}
                alt = {this.state.side == 0 ? 'head' : 'tail'}
                />
                
            </section>
        )
    }
}

export default Coin