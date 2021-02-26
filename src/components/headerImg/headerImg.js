import img from "../../images/bitmap.jpg"

const HeaderImg=()=>{
 
    const styleImg={
        height:"320px",
        width:"1536px"
    }
    return (
        <img src={img} style={styleImg}  />
    )
}

export default HeaderImg