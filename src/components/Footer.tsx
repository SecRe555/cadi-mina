import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import "./footer.css";

const navMotionHover = { y: -5, scale: 1.05 };

export default function Footer() {
  const theme = useTheme();
  const bgColorPaper = useMemo(() => theme.palette.background.paper, [theme]);

  const invertFooterDirections = useMediaQuery("(max-width: 800px");
  const convertClasesToColumn = useMediaQuery("(max-width: 490px");

  return (
    <>
      <Box
        height={invertFooterDirections ? "auto" : "225px"}
        bgcolor={theme.palette.secondary.main}
      >
        <Stack
          direction={invertFooterDirections ? "column" : "row"}
          gap={invertFooterDirections ? "50px" : "0"}
          width={"100%"}
          height={"100%"}
          padding={invertFooterDirections ? "10px 25px" : "10px 50px"}
          boxSizing={"border-box"}
        >
          <Box width={invertFooterDirections ? "100%" : "50%"} height={"100%"}>
            <Typography color={bgColorPaper} textAlign={"center"}>
              Centro de aprendizaje
            </Typography>
            <Box height={invertFooterDirections ? "10px" : "0px"} />
            <Stack
              direction={"row"}
              width={invertFooterDirections ? "auto" : "100%"}
              height={"80%"}
              justifyContent={"center"}
              gap={"50px"}
            >
              {!invertFooterDirections && (
                <Stack height={"100%"} justifyContent={"space-around"}>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
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
                        width: "30px",
                        height: "30px",
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
                        width: "30px",
                        height: "30px",
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
              )}
              <Box
                position={"relative"}
                height={"100%"}
                display={"flex"}
                flexDirection={invertFooterDirections ? "row" : "column"}
                justifyContent={invertFooterDirections ? "center" : "end"}
                gap={convertClasesToColumn ? "45px" : "25px"}
              >
                <Stack
                  direction={
                    invertFooterDirections
                      ? convertClasesToColumn
                        ? "column"
                        : "row"
                      : "column"
                  }
                  flexWrap={"wrap"}
                  width={invertFooterDirections ? "80%" : "auto"}
                  height={invertFooterDirections ? "auto" : "80%"}
                  columnGap={invertFooterDirections ? "25px" : "15px"}
                  rowGap={invertFooterDirections ? "10px" : "auto"}
                >
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
                {invertFooterDirections && (
                  <Stack
                    height={"100%"}
                    justifyContent={
                      convertClasesToColumn ? "space-evenly" : "start"
                    }
                    gap={convertClasesToColumn ? "25px" : "10px"}
                  >
                    <motion.a
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Box
                        sx={{
                          width: "30px",
                          height: "30px",
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
                          width: "30px",
                          height: "30px",
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
                          width: "30px",
                          height: "30px",
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
                )}
              </Box>
            </Stack>
          </Box>
          <Box width={invertFooterDirections ? "100%" : "50%"} height={"100%"}>
            <Typography color={bgColorPaper} textAlign={"center"}>
              Deporte integral
            </Typography>
            <Box height={invertFooterDirections ? "10px" : "0px"} />
            <Stack
              direction={"row"}
              width={invertFooterDirections ? "auto" : "100%"}
              height={"80%"}
              justifyContent={"center"}
              gap={"50px"}
            >
              {!invertFooterDirections && (
                <Stack height={"100%"} justifyContent={"space-around"}>
                  <motion.a
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
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
                        width: "30px",
                        height: "30px",
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
                        width: "30px",
                        height: "30px",
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
              )}
              <Box
                position={"relative"}
                height={"100%"}
                display={"flex"}
                flexDirection={invertFooterDirections ? "row" : "column"}
                justifyContent={invertFooterDirections ? "center" : "end"}
                gap={convertClasesToColumn ? "45px" : "25px"}
              >
                <Stack
                  direction={
                    invertFooterDirections
                      ? convertClasesToColumn
                        ? "column"
                        : "row"
                      : "column"
                  }
                  flexWrap={"wrap"}
                  width={invertFooterDirections ? "80%" : "auto"}
                  height={invertFooterDirections ? "auto" : "80%"}
                  columnGap={invertFooterDirections ? "25px" : "15px"}
                  rowGap={invertFooterDirections ? "10px" : "auto"}
                >
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
                {invertFooterDirections && (
                  <Stack
                    height={"100%"}
                    justifyContent={
                      convertClasesToColumn ? "space-evenly" : "start"
                    }
                    gap={convertClasesToColumn ? "25px" : "10px"}
                  >
                    <motion.a
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Box
                        sx={{
                          width: "30px",
                          height: "30px",
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
                          width: "30px",
                          height: "30px",
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
                          width: "30px",
                          height: "30px",
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
                )}
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

/**
 * <Stack
              direction={"row"}
              width={"100%"}
              height={"100%"}
              paddingRight={"125px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"35px"}
            >
              <Stack
                width={"250px"}
                height={"100%"}
                direction={"row"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                <Stack gap={"20px"}>
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
              </Stack>
              <Stack height={"100%"}>
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
 */

/**
 * <Stack
              direction={"row"}
              width={"100%"}
              height={"100%"}
              paddingLeft={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
              <Stack
                width={"250px"}
                height={"100%"}
                justifyContent={"start"}
                alignItems={"start"}
                gap={"10px"}
              >
                <Stack gap={"20px"}>
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
              </Stack>
            </Stack>
 */
