/* eslint-disable react/no-array-index-key */
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
        {languageState.texts.Home.About.Paragraph.map((item, i) => (
          <Typography key={i} sx={{ marginTop: i === 0 ? "5rem" : "20px" }}>
            {item}
          </Typography>
        ))}
      </Container>
    </Container>
  );
};

export default HomeAbout;
