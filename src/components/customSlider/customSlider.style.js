import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 1px;
  }
`;

export default CustomizedSlider