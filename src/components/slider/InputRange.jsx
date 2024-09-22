import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function InputRange({ value, setValue }) {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Slider
        min={0}
        max={100000}
        step={100}
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          color: '#DC375F', 
          '& .MuiSlider-thumb': {
            backgroundColor: '#DC375F', 
            width: 12,
            height: 12,
            '&:hover': {
              boxShadow: '0px 0px 0px 8px rgba(220, 55, 95, 0.16)',
            },
          },
          '& .MuiSlider-rail': {
            color: '#DC375F80',
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: '#DC375F',
          },
        }}
      />
    </Box>
  );
}