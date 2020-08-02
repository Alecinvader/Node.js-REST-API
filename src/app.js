import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar";
import LibraryView from "./components/library-view";
import EditBook from "./components/edit-book";
import DetailedView from "./components/detailed-view";
import CreateBook from "./components/create-book";

function App() {
  return (
    <Router >
      <div  className = "container">
        <Navbar/>
        <br/>
        <Route path = "/" exact component = {LibraryView}/>
        <Route path = "/edit/:id"  component = {EditBook}/>
        <Route path = "/create" component = {CreateBook}/>
        <Route path = "/detailed-book/:id" component = {DetailedView} />
      </div>
    </Router>
  );
}

// d

export default App;
