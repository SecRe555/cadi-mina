import {
  AppBar,
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import logo from "@images/logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        elevation={10}
        sx={{
          position: "sticky",
          height: "75px",
        }}
      >
        <Toolbar sx={{ height: "100%" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            height={"100%"}
            paddingX={"26px"}
            boxSizing={"border-box"}
          >
            <Stack direction={"row"} alignItems={"center"} gap={"25px"}>
              <Box width={"50px"} height={"50px"}>
                <motion.img
                  src={logo}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  whileHover={{ y: -5 }}
                />
              </Box>
              <motion.span whileHover={{ y: -5 }}>
                <Typography variant="h5" component={"h1"}>
                  CADI
                </Typography>
              </motion.span>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"end"}
              alignItems={"center"}
              gap={"25px"}
              height={"100%"}
            >
              <motion.span
                whileHover={{ scale: 1.05, y: -2.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link onClick={() => {}} color={theme.palette.background.paper}>
                  <Typography variant="caption" component={"p"}>
                    ¿Quienes somos?
                  </Typography>
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, y: -2.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link onClick={() => {}} color={theme.palette.background.paper}>
                  <Typography variant="caption" component={"p"}>
                    Clases
                  </Typography>
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, y: -2.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link onClick={() => {}} color={theme.palette.background.paper}>
                  <Typography variant="caption" component={"p"}>
                    Polideportivo
                  </Typography>
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, y: -2.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link onClick={() => {}} color={theme.palette.background.paper}>
                  <Typography variant="caption" component={"p"}>
                    Contacto
                  </Typography>
                </Link>
              </motion.span>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Button id="login-btn" color="secondary" onClick={handleClick}>
                  Iniciar sesión
                </Button>
                <Menu
                  id="login-btn"
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                >
                  <MenuItem>Clases</MenuItem>
                  <MenuItem>Gimnasio</MenuItem>
                </Menu>
              </motion.div>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
