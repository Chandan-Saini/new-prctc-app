import React from "react"
import "../Person/Person.css"

const Men=( props)=>{

   return (<div className="men">
       <h3 > {props.name}This is men component {props.age}</h3>
   </div>)
}

export default Men