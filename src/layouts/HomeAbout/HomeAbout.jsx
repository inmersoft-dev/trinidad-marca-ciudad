/* eslint-disable react/function-component-definition */
// images
import illus from "assets/images/illus.svg";

// @mui components
import { Divider, Typography, Box } from "@mui/material";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const HomeAbout = () => {
  const { languageState } = useLanguage();

  return (
    <Container sx={{ height: "700px", padding: { md: "0 10rem", xs: "0 40px" } }}>
      <Container align="center" sx={{ marginRight: "100px" }}>
        <Image img={illus} width="400px" height="400px" />
      </Container>
      <Container direction="column" sx={{ width: "600px", padding: "100px 0 90px 0" }}>
        <Box>
          <Typography variant="h3">{languageState.texts.Home.About.Title}</Typography>
          <Divider sx={{ width: "80px", borderWidth: "2px" }} />
        </Box>

        <Typography sx={{ marginTop: "5rem" }}>
          {languageState.texts.Home.About.Paragraph}
        </Typography>
      </Container>
    </Container>
  );
};

export default HomeAbout;
