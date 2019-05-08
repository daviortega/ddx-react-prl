import { container, title } from "assets/jss/material-kit-react.jsx";

const TermsPageStyle = {
  container: {
    zIndex: "12",
    ...container
  },

  aboutheader: {
    maxHeight: "500px",
  },

  aboutp: {
      fontSize: "18px",
      lineHeight: "1,5",
      marginBottom: "30px",
  },

  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
    color: "#FFFFFF",

  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    padding: "50px 0px 80px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default TermsPageStyle;
