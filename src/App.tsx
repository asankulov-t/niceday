import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./App.css"
import Title from './components/utilsComponents/Title/Title';
import ItemsRednder from "./components/Items/ItemsRednder";
import InputComponent from "./components/utilsComponents/InputComponent/InputComponent";
function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main_container">
            <Nav/>
            <div className="content">
                <Title title={'Hello'}/>
                <InputComponent/>
                <ItemsRednder/>
            </div>
        </div>
    </div>
  );
}

export default App;
