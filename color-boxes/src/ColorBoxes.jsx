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
    genColor(){
        let values = [0, 1, 2];
        values.forEach((position) => {
            let color = Math.floor(Math.random() * 255);
            values[position] = color;
        });
        return `rgb(${values[0]}, ${values[1]}, ${values[2]})`
    }
    //Render Method
    render(){
        return(
            <section className="ColorBoxes">
            {this.state.boxes.map(num => <Box genColor={this.genColor} key={num}/>)}
            </section>
        )
    }
}

export default ColorBoxes;