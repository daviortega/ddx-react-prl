import { conatinerFluid } from "assets/jss/material-kit-react.jsx";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...conatinerFluid,
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
