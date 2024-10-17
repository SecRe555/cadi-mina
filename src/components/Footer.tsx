import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import "./footer.css";
import useUtils from "@/states/utilsState";

const navMotionHover = { y: -5, scale: 1.05 };

export default function Footer() {
  const theme = useTheme();
  const bgColorPaper = useMemo(() => theme.palette.background.paper, [theme]);
  const { setSelectedId } = useUtils();

  const [scrolling, setScrolling] = useState(false);
  let timerId: NodeJS.Timeout | null = null; // Definimos timerId aquí para usarlo correctamente

  const scrollToElement = (elementId: string, cardId: string) => {
    const offset = 125;
    const element = document.getElementById(cardId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      setScrolling(true); // Inicia el scroll

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Aquí monitoreamos cuando el scroll termina
      const checkIfScrollFinished = () => {
        if (scrolling) {
          setScrolling(false);
          if (timerId) {
            clearTimeout(timerId); // Limpiamos el temporizador anterior si existe
          }

          const currentScrollY = window.scrollY;

          timerId = setTimeout(() => {
            if (window.scrollY === currentScrollY) {
            }
          }, 750);
        } // 150 ms es un tiempo suficiente para verificar que el scroll ha parado
      };

      window.addEventListener("scroll", checkIfScrollFinished);
    }
  };

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
                    href="https://www.facebook.com/CADI.MINATITLAN/"
                    target="_blank"
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
                    href="https://www.instagram.com/cadi_minatitlan/"
                    target="_blank"
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
                    href="https://wa.me/529211413080?text=Quiero%20solicitar%20informes."
                    target="_blank"
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
                  <motion.a
                    onClick={() => scrollToElement("idiomas", "idiomas-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Ingles
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("idiomas", "idiomas-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Frances
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("artes", "artes-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Musica
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("artes", "artes-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Dibujo y pintura
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() =>
                      scrollToElement("refuerzo-academico", "refuerzo-card")
                    }
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Club de tareas
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() =>
                      scrollToElement("refuerzo-academico", "refuerzo-card")
                    }
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Area de exactas
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("danzas", "danzas-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Belly dance
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("danzas", "danzas-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Danzas polinesias
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("deporte", "deporte-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
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
                      href="https://www.facebook.com/CADI.MINATITLAN/"
                      target="_blank"
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
                      href="https://www.instagram.com/cadi_minatitlan/"
                      target="_blank"
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
                      href="https://wa.me/529211413080?text=Quiero%20solicitar%20informes."
                      target="_blank"
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
                    href="https://www.facebook.com/p/CADI-SPORT-Polideportivo-100057382873097/"
                    target="_blank"
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
                    href="https://www.instagram.com/cadi_polideportivo/"
                    target="_blank"
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
                    href="https://wa.me/529221146805?text=Quiero%20solicitar%20informes."
                    target="_blank"
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
                  <motion.a
                    onClick={() => scrollToElement("gym", "gym-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Gimnasio mixto
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("gimnasia", "gimnasia-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Gimnasia artistica
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("boxeo", "boxeo-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      color={bgColorPaper}
                    >
                      Boxeo
                    </Typography>
                  </motion.a>
                  <motion.a
                    onClick={() => scrollToElement("kungfu", "kungfu-card")}
                    className="nav-link"
                    whileHover={navMotionHover}
                  >
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
                      href="https://www.facebook.com/p/CADI-SPORT-Polideportivo-100057382873097/"
                      target="_blank"
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
                      href="https://www.instagram.com/cadi_polideportivo/"
                      target="_blank"
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
                      href="https://wa.me/529221146805?text=Quiero%20solicitar%20informes."
                      target="_blank"
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
