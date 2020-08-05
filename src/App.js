import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutScreen from "Containers/About/AboutScreen";
import ClassScreen from "Containers/Class/ClassScreen";
import HomeScreen from "Containers/Home/HomeScreen";
import TrainerScreen from "Containers/Trainer/TrainerScreen";
import WorkshopScreen from "Containers/Workshop/WorkshopScreen";
import Navbar from "Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/about' component={AboutScreen}/>
          <Route path='/classes' component={ClassScreen}/>
          <Route path='/trainers' component={TrainerScreen}/>
          <Route path='/workshops' component={WorkshopScreen}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
