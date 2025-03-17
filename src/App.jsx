import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Grid2,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  WbSunny as SunIcon,
  LocalOffer as TagIcon,
  LocalShipping as ShippingIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";

import Nakydka from "./assets/nakydka.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5A76",
    },
    secondary: {
      main: "#FFB800",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 23,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 500, mx: "auto", boxShadow: 3 }}>
        {/* Top features section */}
        <Grid2
          container
          sx={{
            bgcolor: "#f8f8f8",
            p: 1,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid2
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              textAlign: "center",
              gap: 1,
              px: 1,
            }}
          >
            <SunIcon sx={{ color: "#FFB800", fontSize: 28, mb: 0.5 }} />
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              >
                Новинка
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                2025 року
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              textAlign: "center",
              gap: 1,

              px: 1,
            }}
          >
            <TagIcon sx={{ color: "#FFB800", fontSize: 28, mb: 0.5 }} />
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              >
                Оплата
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                після перевірки
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              textAlign: "center",
              px: 1,
              gap: 1,
            }}
          >
            <ShippingIcon sx={{ color: "#FFB800", fontSize: 28, mb: 0.5 }} />
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                }}
              >
                Швидка
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                доставка
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Product title */}
        <Box sx={{ bgcolor: "#FFB8C7", py: 1.5, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "medium" }}
          >
            Мереживна накидка
          </Typography>
        </Box>

        {/* Product image */}
        <Box sx={{ position: "relative", height: 450, bgcolor: "white" }}>
          <img
            src={Nakydka}
            alt="Мережевна накидка"
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Product features */}
        <List sx={{ py: 4 }}>
          <ListItem sx={{ borderBottom: "1px solid #eee", py: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <CheckIcon
                sx={{ color: "#FFB800", bgcolor: "white", borderRadius: "50%" }}
              />
            </ListItemIcon>
            <ListItemText primary="Якісний гіпоалергенний матеріал" />
          </ListItem>
          <ListItem sx={{ borderBottom: "1px solid #eee", py: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <CheckIcon
                sx={{ color: "#FFB800", bgcolor: "white", borderRadius: "50%" }}
              />
            </ListItemIcon>
            <ListItemText primary="Вирівнювання, приховування недоліків" />
          </ListItem>
          <ListItem sx={{ py: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <CheckIcon
                sx={{
                  color: "#FFB800",
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Акція: -50 грн на другу покупку" />
          </ListItem>
        </List>

        {/* Countdown timer */}
        <Box sx={{ bgcolor: "#F0F3EE", p: 2 }}>
          <Box>
            <Grid2 container spacing={2} justifyContent="center">
              <Grid2 item>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FF5A76",
                    color: "white",
                    p: 0.5,
                    width: 60,
                    textAlign: "center",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h4">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </Typography>
                  <Typography variant="caption">годин</Typography>
                </Paper>
              </Grid2>
              <Grid2>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FF5A76",
                    color: "white",
                    p: 0.5,
                    width: 60,
                    textAlign: "center",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h4">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </Typography>
                  <Typography variant="caption">хвилин</Typography>
                </Paper>
              </Grid2>
              <Grid2>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FF5A76",
                    color: "white",
                    p: 0.5,
                    width: 60,
                    textAlign: "center",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h4">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </Typography>
                  <Typography variant="caption">секунд</Typography>
                </Paper>
              </Grid2>
            </Grid2>
          </Box>

          {/* Price section */}
          <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#666", textTransform: "uppercase" }}
              >
                Звичайна ціна:
              </Typography>
              <Typography
                variant="h6"
                sx={{ textDecoration: "line-through", color: "#999" }}
              >
                275 грн
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Ціна за акцією:
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#F99507", fontWeight: "bold" }}
              >
                249 грн
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFBC19",
              color: "white",
              textTransform: "uppercase",
              paddingBlock: "10px",
              paddingInline: "40px",
              fontSize: "1.2rem",
              borderRadius: "5px",
              borderBottomColor: "#F99507",
              borderBottomWidth: "3px",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
            }}
          >
            Замовити зараз
          </Button>
        </Box>
      </Card>
    </ThemeProvider>
  );
}

export default App;
