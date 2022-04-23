/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// images
import illus from "assets/images/illus.svg";

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
      <Typography
        sx={{ marginTop: "7rem", textAlign: "center", padding: { md: "0 10rem", xs: "40px 40px" } }}
        variant="h2"
      >
        {languageState.texts.About.Title}
      </Typography>
      <Container sx={{ flexDirection: { lg: "row", xs: "column" } }}>
        <Container
          sx={{
            marginTop: { lg: 0, xs: "20px" },
            justifyContent: { lg: "initial", xs: "center" },
            width: "100%",
          }}
        >
          <Image img={illus} width="400px" height="400px" />
        </Container>

        <Container
          sx={{ margin: { md: "20px 10rem 80px 10rem", xs: "40px 40px 80px 40px" } }}
          direction="column"
        >
          {languageState.texts.About.Paragraph.map((item, i) => (
            <Typography key={i} sx={{ marginTop: "20px" }}>
              {item}
            </Typography>
          ))}
        </Container>
      </Container>
      <Container
        justify="left"
        sx={{ flexWrap: "wrap", padding: { lg: "80px 10rem", xs: "20px 40px 80px 40px" } }}
      >
        {languageState.texts.About.Agenda.map((item, i) => (
          <Container key={i} sx={{ width: "500px", margin: "20px 0" }}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>{item.title}</span> - <span>{item.content}</span>
            </Typography>
          </Container>
        ))}
      </Container>
    </Box>
  );
};

export default AboutUs;
