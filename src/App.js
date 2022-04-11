import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <ItemListContainer greeting={'Bienvenidos'} />
            </header>
        </div>
    );
}

export default App;
