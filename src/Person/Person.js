const person= (props)=>{
    return (<div>
        <p onClick={props.click} >this <b>{props.name}</b> is a person and he is {props.age} years old</p>
    <p>{props.children}</p>
    <input onChange={props.changed} value={props.name} ></input>
    </div>)
}

export default person