import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import MLListContainer from './components/MLListContainer/MLListContainer' */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <ItemListContainer greeting={'Bienvenidos'} />
                {/* <MLListContainer /> */}
                <ItemDetailContainer />
            </header>
        </div>
    );
}

export default App;
