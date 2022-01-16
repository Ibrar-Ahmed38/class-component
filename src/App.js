import React from "react";
import FunProps from './FunProps'
class App extends React.Component{
    constructor(){
      super()
      this.state={
        Counter : [
          {id : 0 , value: 0},
          {id : 1 , value: 0},
          {id : 2 , value: 0},
          {id : 3 , value: 0},
          {id : 4 , value: 0}
        ]
      }
    }
  render(){
    return(
      <>

      {this.state.counter.map(counter => <FunProps key={counter.id} />)}
      <FunProps/>

      <FunProps/>

      <FunProps/>

      <FunProps/>
      </>
    )
  }
}
export default App