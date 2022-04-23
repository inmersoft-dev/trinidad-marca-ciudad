/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import KnowUs from "components/KnowUs/KnowUs";
import OurValues from "components/OurValues/OurValues";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const AboutUs = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  useEffect(() => {
    setRouteState({ type: "set", to: 1 });
  }, []);

  return (
    <Box>
      <Typography sx={{ marginTop: "7rem", textAlign: "center" }} variant="h2">
        {languageState.texts.About.Title}
      </Typography>
      <KnowUs />
      <OurValues />
    </Box>
  );
};

export default AboutUs;
