import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/general" element={<News key="general" pagesize={8} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pagesize={8} country="in" category="business" />} />
            <Route path="/health" element={<News key="health" pagesize={8} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pagesize={8} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pagesize={8} country="in" category="sports" />} />
            <Route path="/entertainment" element={<News key="entertainment" pagesize={8} country="in" category="entertainment" />} />
            <Route path="/technology" element={<News key="technology" pagesize={8} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
