import { Box, Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import "./footer.css";

import logo from "@images/logo.png";
import logoGym from "@images/logo_gym.png";

const navMotionHover = { y: -5, scale: 1.05 };

export default function Footer() {
  const theme = useTheme();
  const bgColorPaper = useMemo(() => theme.palette.background.paper, [theme]);

  return (
    <>
      <Box height={"200px"} bgcolor={theme.palette.secondary.main}>
        <Stack
          direction={"row"}
          width={"100%"}
          height={"100%"}
          padding={"25px"}
          boxSizing={"border-box"}
        >
          <Box flex={1}>
            <Stack
              direction={"row"}
              width={"100%"}
              height={"100%"}
              justifyContent={"space-between"}
              paddingRight={"10%"}
            >
              <Stack
                width={"250px"}
                height={"100%"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Box width={"100px"} height={"100px"}>
                  <a>
                    <motion.img
                      src={logo}
                      alt="Logo de cadi de clases"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </a>
                </Box>
                <Stack direction={"row"} gap={"20px"}>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                      }}
                    >
                      <Icon
                        icon="logos:facebook"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="skill-icons:instagram"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="logos:whatsapp-icon"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </motion.a>
                </Stack>
                <Stack></Stack>
              </Stack>
              <Stack>
                <motion.span whileHover={{ y: [0, -5, 0, -5] }}>
                  <Typography
                    variant="h6"
                    component={"p"}
                    color={theme.palette.background.paper}
                    textAlign={"center"}
                    marginRight={"50px"}
                  >
                    Clases
                  </Typography>
                </motion.span>
                <Stack flexWrap={"wrap"} height={"80%"} columnGap={"15px"}>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Ingles
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Frances
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Musica
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Dibujo y pintura
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Club de tareas
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Area de exactas
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Belly dance
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Kung fu
                    </Typography>
                  </motion.a>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Divider orientation="vertical" sx={{ borderColor: bgColorPaper }} />
          <Box flex={1}>
            <Stack
              direction={"row"}
              width={"100%"}
              height={"100%"}
              justifyContent={"end"}
              gap={"100px"}
              paddingRight={"10%"}
            >
              <Stack
                width={"250px"}
                height={"100%"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Box width={"100px"} height={"100px"}>
                  <a>
                    <motion.img
                      src={logoGym}
                      alt="Logo de cadi gimnasio"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </a>
                </Box>
                <Stack direction={"row"} gap={"20px"}>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                      }}
                    >
                      <Icon
                        icon="logos:facebook"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="skill-icons:instagram"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="logos:whatsapp-icon"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </motion.a>
                </Stack>
                <Stack></Stack>
              </Stack>
              <Stack>
                <motion.span whileHover={{ y: [0, -5, 0, -5] }}>
                  <Typography
                    variant="h6"
                    component={"p"}
                    color={theme.palette.background.paper}
                    textAlign={"center"}
                    marginRight={"50px"}
                  >
                    Ejercicios
                  </Typography>
                </motion.span>
                <Stack flexWrap={"wrap"} height={"80%"} columnGap={"15px"}>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Gimnasio mixto
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Boxeo
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Kungfu
                    </Typography>
                  </motion.a>
                  <motion.a className="nav-link" whileHover={navMotionHover}>
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Gimnasia artistica
                    </Typography>
                  </motion.a>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
