import React, {Component} from 'react'
import './Coin.css'

class Coin extends Component{
    // Default Props
    static defaultProps = {
        head: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
        tail: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=5ff939b55463f9e621344c04de324323305733de-1579088666-0-AeqLQp48WyQ1UlkYW0JfRMROlc67rpS49mn2RfAAfu0eBmha7CCKOZYDA9R6brw9NsJx2hq93_RE4mHhK0E-jYOcY16GVMabgh7vuoBKdA_FaahMYZweK2QpXXPt1FfW_um3ZeAeNHiFnhE4OqcYyfBRmwDM9mgPBkJs5Va1s0MyroPUP-V_H5Vaxj-ahyJtDgyQQqa__0IlW_INFAV-PWO-WRmWTel46aDPtS7IYjEFFJoQeLSfL6jxmUkOAAG-Bhmf5mlwCZFt9_Gm5Gzlpvo1kyPlLCMgkKmh0_IlP7mY',
        btn_text: 'Flip Coin!'
    }
    // Constructor
    constructor(props){
        super(props);
        //State Definitions
        this.state = {
            side: 0,
            flips: 0,
            heads: 0,
            tails: 0
        }
        // Binding Methods
        this.flipCoin = this.flipCoin.bind(this);
    }
    // Methods
    flipCoin(){

        let nSide = Math.floor(Math.random() * 2);
        let sH = 0; let sT = 0;
        if(nSide == 0){sH = 1}else{sT = 1}
        this.setState({
            side: nSide,
            flips: this.state.flips+1,
            heads: this.state.heads+sH,
            tails: this.state.tails+sT
        });

    }
    // Render Method
    render(){
        return(
            <section className="Coin">
                
                <img 
                src = {this.state.side == 0 ? this.props.head : this.props.tail}
                alt = {this.state.side == 0 ? 'head' : 'tail'}
                />
                <div className="container">
                    <button onClick={this.flipCoin}>{this.props.btn_text}</button>
                    <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
                </div>

            </section>
        )
    }
}

export default Coin