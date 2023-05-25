declare module "appconfig" {
  const colors = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    surface: "#F7F8FD",
    head: "#373F68",
    card: "#FFF",
    border: "rgba(58, 67, 116, 0.15)",
    helper: {
      p: "#647196",
      t: "#3A4374",
      hover: "#F2F4FE",
      over: "#CFD7FF",
    },
    primary: {
      DEFAULT: "#AD1FEA",
      l: "#C75AF6",
    },
    secondary: {
      DEFAULT: "#4661E6",
      l: "#7C91F9",
    },
    tertiary: {
      DEFAULT: "#3A4374",
      l: "#656EA3",
    },
    danger: {
      DEFAULT: "#D73737",
      l: "#E98888",
    },
    blue: "#62BCFA",
    orange: "#F49F85",
  };

  const borderRadius = {
    DEFAULT: "10px",
    full: "9999rem",
  };

  const breakPoints = {
    tablet: "768px",
    desktop: "1440px",
  };

  export { borderRadius, breakPoints, colors };
}
