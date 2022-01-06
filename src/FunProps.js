import React from "react";
class App extends React.Component {
  constructor()  {
    super();
    this.handleEvent =this.handleEvent.bind(this)
    this.MinusEvent = this.MinusEvent.bind(this)
    console.log(this, "Constructor")
    this.state = {
      count: 0,
      deCount : 10,
      ImageUrl: "https://www.gstatic.com/webp/gallery3/1.png",
      tags: ["tag1", "tag2", "tag3"],
    };
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return (
        <>
          <p>There is No Tags</p> <h1>Please create a new Tag</h1>
        </>
      );

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleEvent(){
    this.setState({count : this.state.count + 1})
    console.log("Function Called", this)
  }

  MinusEvent(){
    this.setState({deCount : this.state.deCount -1})
    console.log("Decrement Function called" , this)
  }
  render() {
    return (
      <>
        <div className="bg-warning">
          {/* <FunProps name={"Halathi"} email={"Lundu"}/> */}
          <img src={this.state.ImageUrl} alt="" />
         
          <h1>{this.state.count}</h1>
          <h1>{this.state.deCount}</h1>
          {this.renderTags()}
          <button onClick={this.handleEvent}>Increase Number</button>
          <button onClick={this.MinusEvent}>Decrease Number</button>
        </div>
      </>
    );
  }
}

export default App;
