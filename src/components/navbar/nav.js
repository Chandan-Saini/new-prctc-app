import img from  "../../images/logo-horizontal-1.png"
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
        <nav style={styleNav}>
          <img src={img} style={styleImg} />
          <p style={para}> sometext</p>
          <p style={para}> sometext</p>
        </nav>
    )
}

 export default Nav