import React from 'react'
import PropsExample from './PropsExample'
import { FunProps } from './FunProps'

const App = () => {
  return (
    <div>
      {/* <PropsExample name={"ibrar"}/> */}
      <FunProps name={"ibrar"} email={"ibrarahmedjani@gmail.com"} phone={"03423811975"}/>
    </div>
  )
}

export default App
// import React from 'react'
// import PropsExample from './PropsExample'

// const todos = [
//   {
//     title: 'clean',
//     done: false,
//   },
//   {
//     title: 'do the dishes',
//     done: true,
//   }
// ];

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       show : true
//     }
//   }

//   toggleShow() {
//     this.setState({
//       show: !this.state.show
//     })
//   }

//   render(){
// return(<>
//     <div>
//       <PropsExample  name={"text"} heading={"Halathi lundu"}/>
//     {this.state.show &&
//       <div>show this..</div>
//       }
//       <button onClick={() => this.toggleShow()} >Toggle</button>
  
//     </div>
//     </>)
//   }
// }

// export default App