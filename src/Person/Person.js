const person= (props)=>{
    return (<div>
        <p >this <b>{props.name}</b> is a person and he is {props.age} years old</p>
    <p>{props.children}</p>
    </div>)
}

export default person