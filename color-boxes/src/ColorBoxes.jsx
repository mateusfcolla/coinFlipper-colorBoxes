import React, {Component} from 'react'
import './ColorBoxes.css'
import Box from './Box'

class ColorBoxes extends Component{
    //Default Props
    static defaultProps = {
        maxBoxes: 18
    }
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            boxes: Array.from({length:this.props.maxBoxes})
        }
    }
    //Methods
    //Render Method
    render(){
        return(
            <section className="ColorBoxes">
            {this.state.boxes.map(n => <Box/>)}
            </section>
        )
    }
}

export default ColorBoxes;