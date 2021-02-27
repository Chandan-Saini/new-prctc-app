import img from  "../../images/logo-horizontal-1.png"

import Dropdown from "./dropdown"

const styleNav={
  height: "60px",
  padding: "0 165px",
  backgroundColor: "#194031"
 }

 const styleImg={
     position:"relative",
     top:"10px",
     marginLeft:"0px",
     float:"left"
 }

 const para={
     display:"inline",
     color:"white",
     marginTop:"100px",
 }

const Nav=()=>{
    
    return(
       <div>
            <nav style={styleNav}>
          <img src={img} style={styleImg} />
          <p style={para}> sometext</p>
          <p style={para}> sometext</p>
           <Dropdown />
          </nav>
       </div>
    )
}

 export default Nav