import React from 'react';
import { Component } from 'react';
import HeroeList from './components/heroe-list/Heroe-list';
import './App.scss';

class App extends Component {
    render() {
        return (
            <main>
                <HeroeList/>
            </main>
        );
    }
}

export default App;