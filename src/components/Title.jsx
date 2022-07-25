import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>
          {headline}
        </h2>
      </div>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
