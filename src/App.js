import React, { useState } from 'react';
import './App.css';

/*//create state
//read the state
//Update the state


class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      age: 23,
      name: "Kofi"
    }
  }

  handleClick = () => {
    this.setState({age:this.state.age+1,number:this.state.number+4})
  };

 


  render() {
    return (
    <div className='App'>
      <h1 >{this.state.number}</h1>
      <h1 >{this.state.age}</h1>
      <button onClick={this.handleClick}>Add one</button>
    </div>
    )
    
  }
}*/


//functions

/*const App = () => {
  const [number, setNumber] = useState (0);
  const [name, setName] = useState ("Kofi");
  const [age, setAge] = useState (23);

  const handleClick = () => {
    setAge(age+2);
    setName(name);
    setNumber(number+1);
  }
  return(
  <div className='App'> 
  <h1>{age}</h1>
  <h1>{name}</h1>
  <h1>{number}</h1>
  <button onClick={handleClick}>Add One</button>
  

  </div>)
}
*/


//forms using component
/*class App extends Component {
  constructor() {
    super();    this.state = {
      name: "",
      email: "",
    }
  }

  handleNameChange = (event) => {
   this.setState({name:event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email:event.target.value});
   }


  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.state.name)
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        onChange={this.handleNameChange}
        value={this.state.name} type='text' placeholder='Enter your name '/>
        <input
         onChange={this.handleEmailChange}
        value={this.state.email} type='email' placeholder='Enter your email'/>
        <input type='submit'/>
      </form>
    )
  }
  

  }

  */


  const App = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");



    const handleNameChange = (event) => {
      setName(event.target.value)
    }

    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }

    const handleSubmit = (event) =>{
      event.preventDefault()
    }
    return (
      <form onSubmit={handleSubmit}> 

        <input
        onChange={handleNameChange} 
        value={name} placeholder='Enter your name' type='text'/>
        <input 
        onChange={handleEmailChange}
        value={email} placeholder='Enter email' type='email'/>
        <input type='submit'/>
      </form>
    )
  }

export default App;


