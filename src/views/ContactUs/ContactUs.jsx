/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// react-hook-form
import { useForm, Controller } from "react-hook-form";

// @mui components
import { Box, Typography, Button, TextField, useTheme } from "@mui/material";

// own components
import Container from "components/Container/Container";
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";

// layouts
import Hero from "layouts/Hero/Hero";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";
import contactI from "assets/images/contact.jpg";

const ContactUs = () => {
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

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contact = (d) => {
    console.log(d);
  };

  useEffect(() => {
    setRouteState({ type: "set", to: 3 });
  }, []);

  return (
    <Box>
      <Hero background={contactI}>
        <Box>
          <Container
            direction="column"
            justify="flex-start"
            sx={{
              background: `${theme.palette.primary.main}Cc`,
              height: "100vh",
              width: { lg: "50vw", md: "60vw", xs: "100vw" },
              marginLeft: { md: "10rem", xs: 0 },
              padding: { md: "9rem 60px 2rem 60px", xs: "10rem 30px 5rem 30px" },
              overflow: "auto",
            }}
          >
            <Typography variant="h3">{languageState.texts.Contact.Title}</Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.primary.light, marginTop: "30px" }}
            >
              {languageState.texts.Contact.Subtitle}
            </Typography>
            <Container
              component="form"
              extraProps={{ onSubmit: handleSubmit(contact) }}
              sx={{ paddingRight: { lg: "40px", md: 0 } }}
              direction="column "
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    inputProps={{ autoComplete: "xyz12asdsad3" }}
                    color="input"
                    id="xyz123"
                    name="xyz123"
                    autoComplete="nope"
                    label={languageState.texts.Contact.Name.Label}
                    placeholder={languageState.texts.Contact.Name.Placeholder}
                    variant="outlined"
                    sx={{
                      marginTop: "40px",
                      fieldset: { border: `1px solid ${theme.palette.primary.light}` },
                    }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    inputProps={{ autoComplete: "xyz12asdsad3" }}
                    color="input"
                    id="xyz123"
                    name="xyz123"
                    autoComplete="nope"
                    type="email"
                    label={languageState.texts.Contact.Email.Label}
                    placeholder={languageState.texts.Contact.Email.Placeholder}
                    variant="outlined"
                    sx={{
                      marginTop: "30px",
                      fieldset: { border: `1px solid ${theme.palette.primary.light}` },
                    }}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    inputProps={{ autoComplete: "xyz12asdsad3" }}
                    color="input"
                    maxRows={4}
                    minRows={4}
                    id="xyz123"
                    name="xyz123"
                    autoComplete="nope"
                    label={languageState.texts.Contact.Message.Label}
                    placeholder={languageState.texts.Contact.Message.Placeholder}
                    variant="outlined"
                    sx={{
                      marginTop: "30px",
                      fieldset: { border: `1px solid ${theme.palette.primary.light}` },
                    }}
                    multiline
                  />
                )}
              />

              <Container sx={{ marginTop: "30px" }}>
                <Button type="submit" color="secondary" size="large" variant="contained">
                  {languageState.texts.Contact.Submit}
                </Button>
              </Container>
            </Container>
          </Container>
        </Box>
      </Hero>
      <ScrollView
        sx={{
          padding: { md: "60px 0 100px 0", xs: "40px 20px 80px 20px" },
          paddingLeft: { md: "10rem", xs: "20px" },
        }}
        title={languageState.texts.Home.Subtitles[0]}
        titleProps={{ variant: "h4", sx: { fontWeight: "bold" } }}
        content={cards}
      />
    </Box>
  );
};

export default ContactUs;
