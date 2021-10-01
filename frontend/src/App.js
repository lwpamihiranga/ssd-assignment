import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './pages/Post';
import Upload from './pages/Upload';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Post />
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                <Route exact path="/upload">
                    <Upload />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
