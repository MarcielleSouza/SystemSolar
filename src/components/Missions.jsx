import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {' '}
        {headline}
      </div>
    );
  }
}
export default Missions;

Missions.propTypes = {
  headline: PropTypes.string.isRequired,
};
