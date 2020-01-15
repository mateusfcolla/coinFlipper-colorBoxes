import React, {Component} from 'react'
import './Box.css'

class Box extends Component{
    //Default Props
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            bg_color: this.props.genColor()
        }
        this.updateColor = this.updateColor.bind(this);
    }
    //Methods
    updateColor(){
        console.log('updating...')
        this.setState({
            bg_color: this.props.genColor()
        })
    }
    newEmoji(){
        let emojis = ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🥱','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃'];
        let random = Math.floor(Math.random() * emojis.length);
        return emojis[random]
    }
    //Render Method
    render(){
        return(
            <button className="Box" onClick={this.updateColor} style={{backgroundColor: this.state.bg_color}}>{this.newEmoji()}</button>
        )
    }
}

export default Box;