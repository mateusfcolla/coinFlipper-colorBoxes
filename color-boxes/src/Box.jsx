import React, {Component} from 'react'
import './Box.css'

class Box extends Component{
    //Default Props
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            bg_color: this.genColor()
        }
        this.updateColor = this.updateColor.bind(this);
    }
    //Methods
    // Generate color method
    genColor(){
        let values = [0, 1, 2];
        values.forEach((position) => {
            let color = Math.floor(Math.random() * 255);
            values[position] = color;
        });
        console.log(values);
        return `rgb(${values[0]}, ${values[1]}, ${values[2]})`
    }
    // Update color method
    updateColor(){
        this.setState({
            bg_color: this.genColor()
        })
    }
    //Render Method
    render(){
        return(
            <button className="Box" onClick={this.updateColor} style={{backgroundColor: this.state.bg_color}}></button>
        )
    }
}

export default Box;