import React from 'react';
import { Avatar } from '@mui/material';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom'
import TutorialsList from './components/tutorials-list.component'
import AddTutorial from './components/add-tutorial.component'
import Tutorial from './components/tutorial.component'

const App = () => {
    return (
        <div className="container mt-3">
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/add" component={AddTutorial} />
                <Route path="/tutorials/:id" component={Tutorial} /> */}
                    <Route path="/" component={TutorialsList} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;