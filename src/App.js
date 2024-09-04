import "./App.css";
import React, { Component } from "react"
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode:"light"
    }
  }

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  toggleMode = () => {
    if (this.state.mode==="light") {
      document.body.style.backgroundColor = "#36393F";
      document.body.style.color = "white";
      this.setState({
        mode:"dark"
      });
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      this.setState({
        mode:"light"
      });
     
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />

          <LoadingBar
          color='#f11946' 
          progress={this.state.progress}/>

          <Routes>
          <Route exact path="/" element= {<News setProgress={this.setProgress} key="general" pageSize={12} category={"general"} mode={this.state.mode}/>}/>
          <Route exact path="/business" element= {<News setProgress={this.setProgress} key="business" pageSize={12} category={"business"} mode={this.state.mode}/>}/>
          <Route exact path="/entertainment" element= {<News setProgress={this.setProgress} key="entertainment" pageSize={12} category={"entertainment"} mode={this.state.mode}/>}/>
          <Route exact path="/health" element= {<News setProgress={this.setProgress} key="health" pageSize={12} category={"health"} mode={this.state.mode}/>}/>
          <Route exact path="/science" element= {<News setProgress={this.setProgress} key="science" pageSize={12} category={"science"} mode={this.state.mode}/>}/>
          <Route exact path="/sports" element= {<News setProgress={this.setProgress} key="sports" pageSize={12} category={"sports"} mode={this.state.mode}/>}/>
          <Route exact path="/technology" element= {<News setProgress={this.setProgress} key="technology" pageSize={12} category={"technology"} mode={this.state.mode}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
