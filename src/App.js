import React, { Component } from 'react';
import background from './images/flush-background.png'
import goldfish from './images/goldfish.png'
import toiletWater from './images/toilet-water.png'
import styles from './App.css';



class App extends Component {
    state = {
        title: 'flush your idea'
    }

    inputFocus = () => {
        this.setState({
            title: '',
        })
    }

    render() {
        return (
            <div className={styles.App}>
                <div className={styles.wrapper}>
                    <div>
                        <img className={styles.backgroundImg} src={background} alt='background for bathroom'/>
                    </div>
                    <div className={styles.title}>{this.state.title}</div>
                    <input onClick={this.inputFocus} className={styles.ideaInput} />
                    <div className={styles.subtitle}>it was sh*#t anyway</div>
                    <div className={styles.toiletWaterWrapper}>
                        <img className={styles.toiletWater} src={toiletWater} alt='toilet water'/>
                    </div>
                    <img className={styles.fish} src={goldfish} alt='goldfish'/>
                </div>
            </div>
        );
    }
}

export default App;
