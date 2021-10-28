interface IVars {
  rootSize: number;
  responsiveMin: number;
  responsiveMax: number;
  fontBody: string;
  colors: {
    black: string;
    [key: string]: string;
  };
}

const vars: IVars = {
  rootSize: 20,
  responsiveMin: 320,
  responsiveMax: 1200,
  fontBody: `"Univers Next for HSBC", Arial, sans-serif`,
  colors: {
    black: `#000`,
    green: `#6bc79c`,
    red: `red`,
    darkRed: `crimson`,
  },
};

export default vars;
