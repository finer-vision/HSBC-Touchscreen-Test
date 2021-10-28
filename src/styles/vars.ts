interface IVars {
  rootSize: number;
  responsiveMin: number;
  responsiveMax: number;
  fontBody: string;
  colors: {
    black: string;
    white: string;
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
    white: `#fff`,
    green: `#6bc79c`,
    red_1: `#620f1d`,
    red_2: `#b63632`,
    red_3: `#e93b36`,
    darkRed: `crimson`,
  },
};

export default vars;
