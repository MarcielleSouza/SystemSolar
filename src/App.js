import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/solarSystem';
import Missions from './components/Missions';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title />
        <Missions />
      </div>
    );
  }
}

export default App;
