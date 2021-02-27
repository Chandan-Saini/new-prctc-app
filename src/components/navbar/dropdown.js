
import {React, Component} from "react"

class Dropdown extends Component{
    state={
        visibility: false
    }
   

    toggleVisibility=()=>{
        console.log("btn clicked");
        const show= this.state.visibility
        this.setState({
            visibility: !show
        })
    }

    render(){

        var para={
           width:"100px"
        }
        return(
            <div>
                <p onClick={this.toggleVisibility}> dropdown </p>
                { this.state.visibility=== false ? <div>
                    <ul style={para}>
                        <li>thing 1</li>
                        <li>thing 2</li>
                        <li>thing 3</li>
                    </ul>
                </div> : null }
            </div>
        )
    }
}


export default Dropdown