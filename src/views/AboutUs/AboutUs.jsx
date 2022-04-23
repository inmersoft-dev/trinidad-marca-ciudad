/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";
import Image from "components/Image/Image";

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
      <Container>
        <Image img />
        {languageState.texts.About.Paragraph.map((item, i) => (
          <Typography key={i}>{item}</Typography>
        ))}
      </Container>
    </Box>
  );
};

export default AboutUs;
