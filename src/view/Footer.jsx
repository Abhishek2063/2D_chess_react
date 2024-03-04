import React from 'react';
import AlertBox from '../components/Alert';

const Footer = ({alertMessage}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>&copy; {currentYear} Chess Master</div>
      <div>
        <AlertBox 
        variant="primary"
        alertMessage={alertMessage}
        />
      </div>
    </div>
  );
};

export default Footer;
