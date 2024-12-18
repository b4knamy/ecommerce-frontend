import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  text: {
    size: {
      xsmall: '10px',
      small: '14px',
      medium: '18px',
      large: '22px',
      xlarge: '26px',
      xxlarge: '30px',
      title: '42px',
    },
    weight: {
      xsmall: 100,
      small: 300,
      medium: 500,
      large: 700,
      xlarge: 900,
    },
  },
  colors: {
    primaryDark: 'rgb(25, 25, 25)',
    secondaryDark: 'rgb(66, 66, 66)',
    primaryGray: 'rgb(92, 92, 92)',
    primaryLight: 'rgba(229, 228, 228, 1)',
    primaryGreen: 'rgb(98, 218, 97)',
    primaryRed: 'rgb(193, 42, 0)',
  },
  spacing: {
    xsmall: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    xlarge: '25px',
    xxlarge: '100px',
  },
};

export default theme;
