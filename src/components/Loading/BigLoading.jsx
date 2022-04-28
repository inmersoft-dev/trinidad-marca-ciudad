/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-undef */
// prop-types
import PropTypes from "prop-types";

// mui components
import { Box } from "@mui/material";

import logo from "assets/images/logo.png";

import "./style.css";

const BigLoading = (props) => {
  const { visible } = props;

  return (
    <Box
      id="contenedor_carga"
      style={{
        backgroundColor: "#d27300",
        opacity: visible ? 1 : 0,
        zIndex: visible ? 99 : -1,
      }}
    >
      <img src={logo} alt="logo" style={{ marginBottom: "60px" }} />
      <div className="progress_bar">
        <div className="bar_h" />
      </div>
    </Box>
  );
};

BigLoading.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default BigLoading;
