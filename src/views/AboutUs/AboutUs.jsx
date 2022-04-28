/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { useTheme, Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// images
import about from "assets/images/about.png";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const AboutUs = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  useEffect(() => {
    setRouteState({ type: "set", to: 1 });
  }, []);

  return (
    <Box sx={{ background: theme.palette.secondary.main, paddingTop: "40px" }}>
      <Typography
        sx={{
          marginTop: "7rem",
          marginBottom: "40px",
          textAlign: "center",
          padding: { md: "0 10rem", xs: "40px 40px" },
        }}
        variant="h2"
      >
        {languageState.texts.About.Title}
      </Typography>
      <Container
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          paddingBottom: "80px",
        }}
      >
        <Container
          sx={{
            marginTop: { lg: 0, xs: "20px" },
            justifyContent: { lg: "initial", xs: "center" },
            width: "50%",
          }}
        >
          <Image img={about} width="100%" height="100%" />
        </Container>

        <Container
          sx={{ width: "44%", margin: { md: "20px 7rem 80px 60px", xs: "40px 40px 80px 40px" } }}
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
        sx={{
          background: theme.palette.primary.main,
          flexWrap: "wrap",
          padding: { lg: "80px 10rem", xs: "20px 40px 80px 40px" },
        }}
        justify="center"
      >
        {languageState.texts.About.Agenda.map((item, i) => (
          <Container justify="left" key={i} sx={{ width: "500px", margin: "20px 0" }}>
            <Typography sx={{ width: "200px" }}>
              <span style={{ fontWeight: "bold" }}>{item.title} - </span>
            </Typography>
            <Typography sx={{ width: "200px" }}>
              <span>{item.content}</span>
            </Typography>
          </Container>
        ))}
      </Container>
    </Box>
  );
};

export default AboutUs;
