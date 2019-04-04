import React, { Component } from 'react';
import './App.css';
import dummyData from 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(postData => <PostContainer key={postData.username + postData.timestamp} data={postData} />)}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    );
  }
}

export default App;
