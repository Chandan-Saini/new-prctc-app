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
  render () {return (
    <div className="App">
      <h1>Hello react</h1>
      <Person className="Per" name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person className="Per" name={this.state.persons[1].name} age={this.state.persons[1].age}> This is my hobby</Person>
      <Person className="Per" name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
}
}

export default App
