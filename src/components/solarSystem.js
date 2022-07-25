import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './solarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas">Planetas</Title>
        <section className="solarSystem">
          {
            planets.map(({ name, image }) => (<PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
            ))
          }
          ;

        </section>
      </div>);
  }
}

export default SolarSystem;
