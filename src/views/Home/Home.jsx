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
import Carousel from "components/Carousel/Carousel";
import CarouselItemArrows from "components/Carousel/CarouselItemArrows";
import CarouselItemDots from "components/Carousel/CarouselItemDots";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const Home = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const cards = [
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  useEffect(() => {
    setRouteState({ type: "set", to: 0 });
  }, []);

  return (
    <Box sx={{ background: theme.palette.secondary.main, paddingBottom: "40px" }}>
      <Hero>
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
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: { md: "0", xs: "40px" } }}
          >
            {languageState.texts.Home.Title}
          </Typography>
          <Typography sx={{ width: { md: "600px", xs: "100%" } }}>
            {languageState.texts.Home.Paragraph}
          </Typography>
        </Container>
      </Hero>
      <HomeAbout />
      <Marquee gradient={false} style={{ backgroundColor: theme.palette.warning.dark }} speed="100">
        <Typography variant="h1" sx={{ color: theme.palette.carousel.secondary, mx: 2 }}>
          Convocatorias
        </Typography>
      </Marquee>
      <Carousel
        CarouselItem={<CarouselItemDots colorColum={theme.palette.carousel.main} />}
        navigation={false}
        pagination={true}
        backgroundColor={theme.palette.carousel.secondary}
      />
      <Carousel
        CarouselItem={<CarouselItemArrows />}
        navigation={true}
        pagination={false}
        backgroundColor={theme.palette.secondary.carousel}
      />
      <ScrollView
        sx={{
          padding: { md: "40px 0", xs: "40px 20px" },
          paddingLeft: { md: "10rem", xs: "20px" },
        }}
        title={languageState.texts.Home.Subtitles[0]}
        content={cards}
      />
    </Box>
  );
};

export default Home;
