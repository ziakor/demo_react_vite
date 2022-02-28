import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import CustomizedSlider from './CustomSlider.style';

function CustomSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
    </Box>
  );
}

export default CustomSlider;
