import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton: React.FC<{ onClick: () => void; text: string }> = ({ onClick, text }) => {
   return (
       <Button variant="contained" color="primary" onClick={onClick}>
           {text}
       </Button>
   );
};

export default PrimaryButton;