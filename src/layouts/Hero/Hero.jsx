/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

const Hero = (props) => {
  const { children, sx, background } = props;

  return (
    <Box
      id="hero-section"
      sx={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

Hero.defaultProps = {
  children: <div />,
  background: "https://wallpapercave.com/wp/wp3268618.jpg",
  sx: {},
};

Hero.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  sx: PropTypes.object,
};

export default Hero;
