import React from 'react';

const MaskedMobileNumber = ({ mobileNumber }) => {
  const maskedNumber = mobileNumber.replace(
    /(\d{3})(\d{4})(\d{3})/,
    '$1****$3'
  );
  return <span>{maskedNumber}</span>;
};

export default MaskedMobileNumber;
