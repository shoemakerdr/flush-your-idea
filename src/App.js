import React, { Component } from 'react';
import background from './images/flush-background.png'
import goldfish from './images/goldfish.png'
import './App.css';



class App extends Component {
    render() {
        return (
            <div className="App">
                <div class='wrapper'>
                    <input className='ideaInput' />
                    <div>
                        <img className='backgroundImg' src={background} alt='background for bathroom'/>
                    </div>
                    <img className='fish' src={goldfish} alt='goldfish'/>
                </div>
            </div>
        );
    }
}

export default App;
