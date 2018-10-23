import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    show: "", // thing to show (either nothing or the single post)
    post: {},
    posts: [
      // the data you wish to map over
      { id: 0, content: "tacos" },
      { id: 1, content: "burrito" },
      { id: 2, content: "ceviche" },
      { id: 3, content: "enchilada" },
      { id: 4, content: "asada" },
      { id: 5, content: "guacamole" }
    ]
  };

  showDiv = divToShow => {
    const { show } = this.state;

    // if the div content already shown is the same data passed in, then set divToShow to nothing to show nothing
    if (show === divToShow) {
      divToShow = "";
    }
    this.setState({
      show: divToShow
    });
  };

  divRender = () => {};

  render() {
    const { show } = this.state;
    const postsIdRender = this.state.posts.map(post => (
      <React.Fragment>
        <button
          key={post.id}
          onClick={() => this.showDiv(post.id)}
          className={`one ${show === post.id ? "active" : ""}`}
        >
          {post.id}
        </button>
        {/*{show === post.id && this.state.posts[post.id].content}*/}
      </React.Fragment>
    ));

    const postsContentRender = this.state.posts.map(post => (
      <div className="dark">
        {show === post.id && this.state.posts[post.id].content}
      </div>
    ));

    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="button-wrapper">{postsIdRender}</div>
          <div className="content-wrapper">
            <div className="dark">{postsContentRender}</div>
          </div>
        </div>
      </React.Fragment>
    );

    {
      /*
      return(
      <React.Fragment>
        <div className="wrapper">
          <div className="button-wrapper">
            <button
              onClick={() => this.showDiv("first")}
              className={`one ${show === "first" ? "active" : ""}`}
            >
              1
            </button>
            <button
              onClick={() => this.showDiv("second")}
              className={`one ${show === "second" ? "active" : ""}`}
            >
              2
            </button>
            <button
              onClick={() => this.showDiv("third")}
              className={`one ${show === "third" ? "active" : ""}`}
            >
              3
            </button>
          </div>
          <div className="content-wrapper">
            <div className={`dark ${show}`}>
              {show === "first" && this.state.posts[0].content}
              {show === "second" && this.state.posts[1].content}
              {show === "third" && this.state.posts[2].content}
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="button-wrapper">
            <button
              onClick={() => this.showDiv("fourth")}
              className={`one ${show === "fourth" ? "active" : ""}`}
            >
              4
            </button>
            <button
              onClick={() => this.showDiv("fifth")}
              className={`one ${show === "fifth" ? "active" : ""}`}
            >
              5
            </button>
            <button
              onClick={() => this.showDiv("sixth")}
              className={`one ${show === "sixth" ? "active" : ""}`}
            >
              6
            </button>
    </div>

          <div className="one" className="content-wrapper">
            <div className={`dark ${show}`}>
              {show === "fourth" && this.state.posts[3].content}
              {show === "fifth" && this.state.posts[4].content}
              {show === "sixth" && this.state.posts[5].content}
            </div>
          </div>
        </div>
      </React.Fragment>
    )*/
    }
  }
}

export default App;
