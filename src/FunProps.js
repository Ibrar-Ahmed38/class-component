import React from "react";
class App extends React.Component {
  constructor()  {
    super();
    this.handleEvent =this.handleEvent.bind(this)
    console.log(this, "Constructor")
    this.state = {
      count: 0,
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
    console.log("Function Called", this)
  }
  render() {
    return (
      <>
        <div className="bg-warning">
          {/* <FunProps name={"Halathi"} email={"Lundu"}/> */}
          <img src={this.state.ImageUrl} alt="" />
          {this.renderTags()}
          <button onClick={this.handleEvent}>onClick</button>
        </div>
      </>
    );
  }
}

export default App;
