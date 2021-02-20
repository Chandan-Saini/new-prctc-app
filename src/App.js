import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import {React,Component} from "react"
class App extends Component {
   state={
     persons:[
     {name:"chan",age:30},
     {name:"akku",age:20},
     {name:"abhi",age:10},
   ]}


   nameSwitchHandler = (newName)=>{
     this.setState({
       persons:[
         {name:newName,age:30},
         {name:"akku",age:20},
         {name:"abhi",age:120},
        ]
     })
   }

   nameChangedHandler=(event)=>{
        this.setState({
       persons:[
         {name:"aka",age:30},
         {name: event.target.value, age:20},
         {name:"abhi",age:120},
        ]
     })
   }
   
  render () {return (
    <div className="App">
      <h1>Hello react</h1>
      <button onClick={this.nameSwitchHandler.bind(this,"deepu")}>
        Switch
      </button>
      <Person className="Per" click={this.nameSwitchHandler.bind(this,"kundan")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person className="Per" changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> This is my hobby</Person>
      <Person className="Per" name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
}
}

export default App
