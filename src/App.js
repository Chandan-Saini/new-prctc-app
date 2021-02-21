import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Men from './men/men'
import {React,Component} from "react"
import "./Person/Person.css"

class App extends Component {
   state={
     persons:[
     {name:"chan",age:30},
     {name:"akku",age:20},
     {name:"abhi",age:10},
   ],
    toggleName: false,
    visibility:false
  }


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

   toggleVisibility=()=>{
     let visible= this.state.visibility
      this.setState({
        visibility: !visible
      })
   }
   
  render () {

   const style={
      backgroundColor:"green",
      fontSize:"20px",
      padding:"10px"
    } 

    return (
    <div className="App">
      <h1>Hello react</h1>
      <button style={style} onClick={this.toggleVisibility}>
        Switch
      </button>
     
     {this.state.visibility ? <div>
         <Person className="Per" click={this.nameSwitchHandler.bind(this,"kundan")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person className="Per" changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> This is my hobby</Person>
      <Person className="Per" name={this.state.persons[2].name} age={this.state.persons[2].age}/>
     </div> : null}
    </div> 
  );
}
}


// class App extends Component{

//   state={
//     mens:[
//       {name:"chan", age:10 },
//       {name:'abhi', age:12 }
//     ]
//   }

  
//   changeNameHandler= (newname)=>{
//     this.setState({
//        mens:[
//       {name:"chan new ", age:10 },
//       {name:newname, age:12 }
//     ]
//     })
//   }

//   render(){
//     let style={
//        backgroundColor:"red"
//      }
//     return (
//       <div className="App">
//         <button className="person" style={style} onClick={this.changeNameHandler.bind(this,"akk")}  > switch</button>
//         <Men name={this.state.mens[1].name} age={this.state.mens[1].age} />
//       </div>
//     )
//   }
// }

export default App
