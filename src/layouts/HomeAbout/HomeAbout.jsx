/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
// images
import illus from "assets/images/illus.svg";

// @mui components
import { useTheme, Divider, Typography, Box } from "@mui/material";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const HomeAbout = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();
  return (
    <Container
      sx={{
        background: theme.palette.secondary.main,
        height: { lg: "700px", xs: "auto" },
        padding: { md: "0 10rem", xs: "40px 40px" },
        flexDirection: { lg: "row", xs: "column" },
        alignItems: { lg: "initial", xs: "center" },
      }}
    >
      <Container align="center" sx={{ marginRight: { lg: "100px", xs: 0 } }}>
        <Image img={illus} width="400px" height="400px" />
      </Container>
      <Container
        direction="column"
        sx={{ width: { lg: "600px", xs: "auto" }, padding: { lg: "100px 0 90px 0", xs: "0" } }}
      >
        <Box sx={{ marginTop: { lg: 0, xs: "40px" } }}>
          <Typography sx={{ color: theme.palette.primary.light }} variant="h3">
            {languageState.texts.Home.About.Title}
          </Typography>
          <Divider
            sx={{ width: "80px", borderWidth: "2px", borderColor: theme.palette.primary.main }}
          />
        </Box>
        {languageState.texts.Home.About.Paragraph.map((item, i) => (
          <Typography key={i} sx={{ marginTop: i === 0 ? { lg: "5rem", xs: "20px" } : "20px" }}>
            {item}
          </Typography>
        ))}
      </Container>
    </Container>
  );
};

export default HomeAbout;
