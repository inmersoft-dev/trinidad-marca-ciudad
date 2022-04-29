/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

import Marquee from "react-fast-marquee";

// @mui components
import { Box, Typography, useTheme } from "@mui/material";

// own components
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";
import HomeAbout from "layouts/HomeAbout/HomeAbout";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";
import hero1 from "assets/images/hero1.jpg";

const Home = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const cards = [
    <Card
      sx={{ padding: "10px", borderRadius: "10px" }}
      contentPosition="down"
      img={bruce}
      imageProps={{ alt: "bruce" }}
    >
      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ padding: "10px", borderRadius: "10px" }}
      contentPosition="down"
      img={bruce}
      imageProps={{ alt: "bruce" }}
    >
      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ padding: "10px", borderRadius: "10px" }}
      contentPosition="down"
      img={bruce}
      imageProps={{ alt: "bruce" }}
    >
      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ padding: "10px", borderRadius: "10px" }}
      contentPosition="down"
      img={bruce}
      imageProps={{ alt: "bruce" }}
    >
      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card
      sx={{ padding: "10px", borderRadius: "10px" }}
      contentPosition="down"
      img={bruce}
      imageProps={{ alt: "bruce" }}
    >
      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card
      sx={{ padding: "10px", borderRadius: "10px" }}
      contentPosition="down"
      img={bruce}
      imageProps={{ alt: "bruce" }}
    >
      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  useEffect(() => {
    setRouteState({ type: "set", to: 0 });
  }, []);

  return (
    <Box sx={{ background: theme.palette.primary.dark, paddingBottom: "40px" }}>
      <Hero background={hero1}>
        <Container
          sx={{
            height: "100%",
            padding: { md: "0 10rem 60px 10rem", xs: "40px" },
            flexDirection: { md: "row", xs: "column" },
            justifyContent: { md: "space-between", xs: "flex-end" },
            alignItems: { md: "end", xs: "start" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "40px", lg: "64px" },
              fontWeight: "bold",
              marginBottom: { md: "0", xs: "40px" },
            }}
          >
            {languageState.texts.Home.Title}
          </Typography>
        </Container>
      </Hero>
      <HomeAbout />
      <Marquee gradient={false} style={{ backgroundColor: theme.palette.warning.dark }} speed="100">
        <Typography variant="h1" sx={{ color: theme.palette.carousel.secondary, mx: 2 }}>
          {languageState.texts.Home.Marquee}
        </Typography>
      </Marquee>
      <ScrollView
        sx={{
          background: theme.palette.primary.dark,
          padding: { md: "40px 0", xs: "40px 20px" },
          paddingLeft: { md: "10rem", xs: "20px" },
        }}
        title={languageState.texts.Home.Subtitles[0]}
        content={cards}
        titleProps={{ variant: "h4", sx: { fontWeight: "bold" } }}
      />
    </Box>
  );
};

export default Home;
