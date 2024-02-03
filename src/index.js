import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const Alert = ({ alertMessage, alertProps }) => {

  const { background = '#ffffff', padding = '20px', borderRadius = '8px', textAlign = 'center' } = alertProps || {};

  return (
    <div className="yed-alert-overlay">
      <div className="yed-alert-view" style={{
        background: `${background}`,
        padding: `${padding}`,
        borderRadius: `${borderRadius}`,
        textAlign: `${textAlign}`
      }}>
        {alertMessage}
      </div>
    </div>
  )
}

Alert.propTypes = {
  alertProps: PropTypes.shape({
    background: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    textAlign: PropTypes.string,
  }),
};


export default Alert;