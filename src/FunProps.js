import React  from "react";
import FunProps from './FunProps'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count: 0,
      ImageUrl : 'https://www.gstatic.com/webp/gallery3/1.png',
      tags: ['tag1', 'tag2', 'tag3']
    }
  }

  renderTags(){
    if(this.state.tags.length === 0) return <p>There is No Tags</p>
    
    return <ul> {this.state.tags.map(tag => <li>{tag}</li>)} </ul>

  }
  render(){
    return(
      <>
      <div className="bg-warning">
      {/* <FunProps name={"Halathi"} email={"Lundu"}/> */}
      <img src={this.state.ImageUrl} alt="" />
     {this.renderTags()}
      </div>
     
      </>
    )
  }
}

export default App
