import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import Navbar from "./components/Navbar";
import News from "./components/news/News";

export default class App extends Component {
  page = 12;

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  news_api = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
        <LoadingBar color='#f11946' progress={this.state.progress} height={4} />
          <Navbar />
          <Routes>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={this.news_api} pageSize={this.page} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.news_api} pageSize={this.page} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={this.news_api} pageSize={this.page} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={this.news_api} pageSize={this.page} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.news_api} pageSize={this.page} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.news_api} pageSize={this.page} country="us" category="technology" />} />
            <Route exact path="/home" element={<News setProgress={this.setProgress} key="general" apiKey={this.news_api} pageSize={this.page} country="us" category="general" />} />
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" apiKey={this.news_api} pageSize={this.page} country="us" category="general" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
