import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "@images/logo_h_blanco.png";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

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
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    console.log("open: ", newOpen);
    setOpenDrawer(newOpen);
  };

  const [openCollapse, setOpenCollapse] = useState(false);
  const handleCollapseClick = () => {
    setOpenCollapse(!openCollapse);
  };

  const bgColorPaper = useMemo(() => theme.palette.background.paper, []);

  const minimizeImageSize = useMediaQuery("(max-width: 460px)");
  const changeImageSize = useMediaQuery("(max-width: 550px)");
  const reduceNavFontSize = useMediaQuery("(max-width: 1200px)");
  const reduceImageSize = useMediaQuery("(max-width: 1100px)");
  const showMenuButton = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <AppBar
        elevation={10}
        sx={{
          height: "75px",
        }}
      >
        <Toolbar sx={{ height: "100%" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            height={"100%"}
            paddingX={"25px"}
            paddingRight={minimizeImageSize ? "0" : undefined}
            boxSizing={"border-box"}
          >
            <Stack direction={"row"} alignItems={"center"} gap={"25px"}>
              <Box
                width={
                  reduceImageSize
                    ? minimizeImageSize
                      ? "175px"
                      : changeImageSize
                      ? "250px"
                      : showMenuButton
                      ? "350px"
                      : "250px"
                    : "350px"
                }
                height={"50px"}
              >
                <motion.img
                  src={logo}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  whileHover={{ y: -5 }}
                />
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"end"}
              alignItems={"center"}
              gap={"25px"}
              height={"100%"}
            >
              {showMenuButton ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Button variant="text" onClick={toggleDrawer(true)}>
                      <Icon icon="oi:menu" color={bgColorPaper} />
                    </Button>
                  </motion.div>
                  <Drawer
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                    anchor="right"
                  >
                    <Box sx={{ position: "relative", width: "250px" }}>
                      <motion.span
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        }}
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Button
                          variant="text"
                          sx={{
                            minWidth: "0",
                            width: "25px",
                            height: "25px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5px",
                            borderRadius: "50%",
                          }}
                          onClick={toggleDrawer(false)}
                        >
                          <Icon icon="vaadin:close" />
                        </Button>
                      </motion.span>
                      <List sx={{ marginTop: "35px" }}>
                        <ListItem disablePadding>
                          <ListItemButton onClick={handleCollapseClick}>
                            <ListItemText primary="Iniciar sesión" />
                            {openCollapse ? (
                              <Icon icon="lets-icons:expand-top-stop" />
                            ) : (
                              <Icon icon="lets-icons:expand-down-stop" />
                            )}
                          </ListItemButton>
                        </ListItem>
                        <Collapse
                          in={openCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  primary={"CADI Clases"}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  primary={"CADI Polideportivo"}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Collapse>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary={"¿Quienes somos?"}
                              sx={{ display: "flex", justifyContent: "center" }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary={"Clases"}
                              sx={{ display: "flex", justifyContent: "center" }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary={"Polideportivo"}
                              sx={{ display: "flex", justifyContent: "center" }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary={"Contacto"}
                              sx={{ display: "flex", justifyContent: "center" }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  </Drawer>
                </>
              ) : (
                <>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2.5 }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ scale: reduceNavFontSize ? 0.9 : 1 }}
                  >
                    <Link
                      onClick={() => {}}
                      color={theme.palette.background.paper}
                    >
                      <Typography
                        variant="body2"
                        component={"p"}
                        fontSize={reduceNavFontSize ? "0.95rem" : "1.1rem"}
                      >
                        ¿Quienes somos?
                      </Typography>
                    </Link>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      onClick={() => {}}
                      color={theme.palette.background.paper}
                    >
                      <Typography
                        variant="body2"
                        component={"p"}
                        fontSize={reduceNavFontSize ? "0.95rem" : "1.1rem"}
                      >
                        Clases
                      </Typography>
                    </Link>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      onClick={() => {}}
                      color={theme.palette.background.paper}
                    >
                      <Typography
                        variant="body2"
                        component={"p"}
                        fontSize={reduceNavFontSize ? "0.95rem" : "1.1rem"}
                      >
                        Polideportivo
                      </Typography>
                    </Link>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      onClick={() => {}}
                      color={theme.palette.background.paper}
                    >
                      <Typography
                        variant="body2"
                        component={"p"}
                        fontSize={reduceNavFontSize ? "0.95rem" : "1.1rem"}
                      >
                        Contacto
                      </Typography>
                    </Link>
                  </motion.span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Button
                      id="login-btn"
                      color="secondary"
                      onClick={handleClick}
                    >
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
                </>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
