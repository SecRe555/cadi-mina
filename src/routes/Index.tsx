import {
  ArtesCard,
  ArtesExpandedCard,
  DanzasCard,
  DanzasExpandedCard,
  DeporteCard,
  DeportesExpandedCard,
  IdiomasCard,
  IdiomasExpandedCard,
  RefuerzoAcademicoCard,
  RefuerzoAcademicoExpandedCard,
} from "@/components/CardsContent";
import { ExpandableCard, ExpandedCard } from "@/components/ExpandableCards";
import { HEIGHT_RESTANTE } from "@/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import mainbg from "@images/main-fondo.png";
import cadiImg from "@images/cadi_white.png";
import useUtils from "@/states/utilsState";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";

export type ArtesCardsKeys =
  | "idiomas"
  | "refuerzo-academico"
  | "artes"
  | "danzas"
  | "deporte";
const artesExpandableCards: { [key in ArtesCardsKeys]: React.ReactNode } = {
  idiomas: <IdiomasCard />,
  "refuerzo-academico": <RefuerzoAcademicoCard />,
  artes: <ArtesCard />,
  danzas: <DanzasCard />,
  deporte: <DeporteCard />,
};
const artesExpandadedCards: { [key in ArtesCardsKeys]: React.ReactNode } = {
  idiomas: <IdiomasExpandedCard />,
  "refuerzo-academico": <RefuerzoAcademicoExpandedCard />,
  artes: <ArtesExpandedCard />,
  danzas: <DanzasExpandedCard />,
  deporte: <DeportesExpandedCard />,
};
type ArtesItems = { id: ArtesCardsKeys; title: string; subtitle: string };

export default function Index() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const handleChangeTab = (_: React.SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };
  const clasesRef = useRef<HTMLDivElement | null>(null);

  const { selectedId } = useUtils();
  const [artesSelectedId, setArtesSelectedId] = useState<string | null>(null);
  const artesItems: ArtesItems[] = [
    { id: "idiomas", title: "idiomas-card", subtitle: "Clases de idiomas" },
    {
      id: "refuerzo-academico",
      title: "refuerzo-card",
      subtitle: "Refuerzo academico",
    },
    {
      id: "artes",
      title: "artes-card",
      subtitle: "Refuerzo academico",
    },
    {
      id: "danzas",
      title: "danzas-card",
      subtitle: "Refuerzo academico",
    },
    {
      id: "deporte",
      title: "deporte-card",
      subtitle: "Refuerzo academico",
    },
    // Puedes agregar más elementos aquí
  ];

  useEffect(() => {
    console.log("Sel: ", selectedId);
    setArtesSelectedId(selectedId);
  }, [selectedId]);

  const primaryColor = useMemo(() => theme.palette.primary.main, [theme]);
  const secondaryColor = useMemo(() => theme.palette.secondary.main, [theme]);
  const bgColorPaper = useMemo(() => theme.palette.background.paper, [theme]);

  const changePresentationDivWidth = useMediaQuery("(max-width: 800px)");
  const changePresentationDivFontSize = useMediaQuery("(max-width: 545px)");
  const changeCadiSize = useMediaQuery("(max-width: 650px)");
  const reduceCadiSize = useMediaQuery("(max-width: 495px)");

  const changeWhoweareDirection = useMediaQuery("(max-width: 1200px)");
  const addWhowearePadding = useMediaQuery("(max-width: 1070px)");
  const changeWhoweareFontSize = useMediaQuery("(max-width: 525px)");
  const reduceWhowearePadding = useMediaQuery("(max-width: 380px)");

  const changeClasesh5Variant = useMediaQuery("(max-width: 810px)");
  const changeClasesh6Size = useMediaQuery("(max-width: 345px)");
  const changeClasesJustify = useMediaQuery("(max-width: 650px)");

  const changeDeportesh5Variant = useMediaQuery("(max-width: 590px)");
  const adjustDeportesDescription = useMediaQuery("(max-width: 500px)");
  const reduceDeportesPadding = useMediaQuery("(max-width: 900px)");

  const changeContactoh5Size = useMediaQuery("(max-width: 470px)");
  const changeMapToColumn = useMediaQuery("(max-width: 1075px)");
  const changeDirectionsToColumn = useMediaQuery("(max-width: 700px)");
  const changeMapSize = useMediaQuery("(max-width: 375px)");

  return (
    <>
      <motion.div
        style={{
          height: HEIGHT_RESTANTE,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${mainbg})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <motion.div
          style={{
            width: changePresentationDivWidth ? "85%" : "auto",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            textAlign: "center",
            backdropFilter: "blur(2px)",
            borderRadius: "25px",
          }}
          whileInView={{ y: [0, 0, -10, 5, -10, -1, 0, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatDelay: 1,
            delay: 3,
          }}
        >
          <Box
            width={
              changeCadiSize ? (reduceCadiSize ? "200px" : "300px") : "400px"
            }
            height={
              changeCadiSize ? (reduceCadiSize ? "50px" : "75px") : "100px"
            }
            margin={"auto"}
          >
            <motion.img
              src={cadiImg}
              style={{
                width: "100%",
                height: "100%",
              }}
              whileHover={{ y: -10 }}
            />
          </Box>
          {/* <Typography
            variant={changePresentationDivFontSize ? "body1" : "h4"}
            fontWeight={changePresentationDivFontSize ? "600" : "normal"}
            component={"h2"}
          ></Typography> */}
          <motion.span whileHover={{ y: -5 }}>
            <Typography
              variant={changePresentationDivFontSize ? "body2" : "body1"}
              color={bgColorPaper}
              fontWeight={"600"}
            >
              Accede a un espacio de aprendizaje o un ambiente activo, ¡tú
              decides!
            </Typography>
          </motion.span>
        </motion.div>
      </motion.div>
      {/*Quienes somos*/}
      <motion.div
        id="quienes-somos"
        style={{
          minHeight: HEIGHT_RESTANTE,
          position: "relative",
          display: "flex",
          justifyContent: addWhowearePadding ? "start" : "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Stack
          direction={changeWhoweareDirection ? "column" : "row"}
          width={"100%"}
          minHeight={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"50px"}
          paddingX={changeWhoweareFontSize ? "25px" : "50px"}
          paddingY={addWhowearePadding ? "35px" : "0"}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: 25,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0px 5px 10px rgba(0,0,0,0.25)",
            }}
          >
            <Stack
              gap={"25px"}
              paddingX={reduceWhowearePadding ? "15px" : "30px"}
            >
              <Typography
                variant={reduceWhowearePadding ? "body1" : "h6"}
                component={"p"}
                textAlign={"center"}
                fontWeight={reduceWhowearePadding ? "600" : "400"}
              >
                ¿Quiénes somos?
              </Typography>
              <Typography variant={changeWhoweareFontSize ? "body2" : "body1"}>
                Somos un Centro multidisciplinario de atención personalizada
                donde encontrarás actividades educativas, deportivas y de artes
                buscando el equilibrio físico, intelectual, cultural y artístico
                de cada persona adaptadas a las necesidades actuales de la
                sociedad.
              </Typography>
            </Stack>
          </motion.div>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              borderRadius: 25,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0px 5px 10px rgba(0,0,0,0.25)",
            }}
          >
            <Stack
              gap={"25px"}
              paddingX={reduceWhowearePadding ? "15px" : "30px"}
            >
              <Tabs value={tabIndex} onChange={handleChangeTab}>
                <Tab label={"Misión"}></Tab>
                <Tab label={"Visión"}></Tab>
              </Tabs>
              <motion.div
                layout
                style={{
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <AnimatePresence mode="wait">
                  {tabIndex === 0 && (
                    <motion.div
                      key="tab-0"
                      initial={{ opacity: 0.5, height: 0.1 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0.5, height: 0.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Typography
                        variant={changeWhoweareFontSize ? "body2" : "body1"}
                      >
                        Nuestro objetivo es vincular la educación, la formación,
                        la cultura, el deporte y las artes para brindar
                        excelencia en cada una de nuestras áreas. En el ámbito
                        académico y artístico, aplicamos las mejores técnicas de
                        enseñanza-aprendizaje, adaptándonos al progreso
                        personalizado de cada estudiante. En el área deportiva,
                        ofrecemos un gimnasio familiar con servicio de calidad,
                        profesionalismo y atención personalizada, enfocado en
                        alcanzar metas de salud y bienestar mediante activación
                        física, nutrición y motivación.
                      </Typography>
                    </motion.div>
                  )}

                  {tabIndex === 1 && (
                    <motion.div
                      key="tab-1"
                      initial={{ opacity: 0.5, height: 0.1 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0.5, height: 0.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Typography
                        variant={changeWhoweareFontSize ? "body2" : "body1"}
                      >
                        Nuestro propósito es consolidar y desarrollar el acervo
                        educativo, cultural, personal y profesional de nuestros
                        estudiantes, brindándoles herramientas que les permitan
                        destacar en su vida estudiantil, laboral y artística. En
                        paralelo, aspiramos a ser el gimnasio líder en la ciudad
                        y la región, caracterizándonos por un trato cercano y un
                        enfoque en los objetivos individuales de cada usuario.
                        Fomentamos hábitos saludables a través de un
                        entrenamiento metodológico en un entorno seguro y de
                        confianza.
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Stack>
          </motion.div>
        </Stack>
      </motion.div>
      <Divider />
      {/*Clases*/}
      <motion.div
        id="clases"
        ref={clasesRef}
        style={{
          minHeight: HEIGHT_RESTANTE,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          id={"activities-stack"}
          width={"100%"}
          height={"100%"}
          justifyContent={changeClasesJustify ? "start" : "center"}
          alignItems={"center"}
          paddingX={"25px"}
          paddingY={"50px"}
          gap={"50px"}
          boxSizing={"border-box"}
        >
          <motion.span whileHover={{ y: -10 }}>
            <Typography
              id={"activities-text"}
              variant={
                changeClasesh5Variant
                  ? changeClasesh6Size
                    ? "body1"
                    : "h6"
                  : "h5"
              }
              fontWeight={
                changeClasesh5Variant
                  ? changeClasesh6Size
                    ? "600"
                    : "500"
                  : "400"
              }
              component={"p"}
              textAlign={"center"}
            >
              Aumenta tus conocimientos con nuestras clases.
            </Typography>
          </motion.span>
          <Grid container width={"100%"} height={"100%"} spacing={5}>
            {artesItems.map((item: ArtesItems) => (
              <Grid
                key={item.id}
                id={item.title}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <ExpandableCard id={item.id} setSelectedId={setArtesSelectedId}>
                  {artesExpandableCards[item.id]}
                </ExpandableCard>
              </Grid>
            ))}
          </Grid>
          <AnimatePresence>
            {artesSelectedId && (
              <ExpandedCard
                id={
                  artesItems.find((item) => item.id === artesSelectedId)
                    ?.id as string
                }
                setSelectedId={setArtesSelectedId}
              >
                {artesExpandadedCards[artesSelectedId as ArtesCardsKeys]}
              </ExpandedCard>
            )}
          </AnimatePresence>
        </Stack>
      </motion.div>
      <Divider />
      {/*Polideportivo*/}
      <motion.div
        id="polideportivo"
        style={{
          height: "auto",
          minHeight: HEIGHT_RESTANTE,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          paddingBottom: "50px",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          width={"100%"}
          height={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingX={reduceDeportesPadding ? "25px" : "50px"}
          paddingY={"50px"}
          gap={"50px"}
          boxSizing={"border-box"}
        >
          <motion.span whileHover={{ y: -10 }}>
            <Typography
              id={"activities-text"}
              variant={
                changeDeportesh5Variant
                  ? adjustDeportesDescription
                    ? "body1"
                    : "h6"
                  : "h5"
              }
              fontWeight={adjustDeportesDescription ? "500" : "400"}
              component={"p"}
              textAlign={"center"}
            >
              Entrena tu cuerpo con nuestras actividades.
            </Typography>
          </motion.span>
          <Grid container width={"100%"} height={"100%"} spacing={5}>
            <Grid id="gym-card" size={{ xs: 12, sm: 6 }}>
              <motion.div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "15px",
                  border: `1px solid ${primaryColor}`,
                  borderRadius: "25px",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                }}
              >
                <Typography>Gimnasio mixto</Typography>
                <Icon
                  icon="mdi:weight-lifter"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "25px",
                    color: secondaryColor,
                  }}
                />
                <Box height={"25px"} />
                <Typography>
                  El gimnasio ofrece un espacio integral dedicado al bienestar
                  físico y mental. Con equipos de alta calidad, instalaciones
                  modernas y un enfoque personalizado, promovemos un ambiente de
                  entrenamiento seguro y motivador que fomenta hábitos
                  saludables y mejora tu calidad de vida.
                </Typography>
              </motion.div>
            </Grid>
            <Grid id="gimnasia-card" size={{ xs: 12, sm: 6 }}>
              <motion.div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  border: `1px solid ${primaryColor}`,
                  borderRadius: "25px",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                }}
              >
                <Typography>Gimnasia artistica</Typography>
                <Icon
                  icon="material-symbols:sports-gymnastics"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "25px",
                    color: secondaryColor,
                  }}
                />
                <Box height={"25px"} />
                <Typography>
                  La gimnasia artística es una disciplina que combina fuerza,
                  flexibilidad y coordinación, donde las niñas desarrollan
                  habilidades físicas y mentales a través de movimientos
                  precisos y acrobáticos, fomentando la confianza y el control
                  corporal.
                </Typography>
              </motion.div>
            </Grid>
            <Grid id="boxeo-card" size={{ xs: 12, sm: 6 }}>
              <motion.div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  border: `1px solid ${primaryColor}`,
                  borderRadius: "25px",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                }}
              >
                <Typography>Boxeo</Typography>
                <Icon
                  icon="ri:boxing-fill"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "25px",
                    color: secondaryColor,
                  }}
                />
                <Box height={"25px"} />
                <Typography>
                  Deporte de combate que mejora la resistencia física, agilidad
                  y fuerza a través de movimientos técnicos de defensa y ataque.
                  Ideal para quienes buscan desarrollar habilidades físicas,
                  autocontrol y disciplina.
                </Typography>
              </motion.div>
            </Grid>
            <Grid id="kungfu-card" size={{ xs: 12, sm: 6 }}>
              <motion.div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  border: `1px solid ${primaryColor}`,
                  borderRadius: "25px",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                }}
              >
                <Typography>Kungfu</Typography>
                <Icon
                  icon="mdi:karate"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "25px",
                    color: secondaryColor,
                  }}
                />
                <Box height={"25px"} />
                <Typography>
                  Antiguo arte marcial chino que combina técnicas de defensa
                  personal con un enfoque en el equilibrio mental y físico.
                  Desarrolla concentración, autocontrol y respeto a través de un
                  riguroso entrenamiento.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
          <motion.div
            style={{ marginTop: "50px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Slider />
          </motion.div>
        </Stack>
      </motion.div>
      <Divider />
      <motion.div
        id="contacto"
        style={{
          minHeight: HEIGHT_RESTANTE,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"50px"}
          padding={"50px"}
          boxSizing={"border-box"}
        >
          <motion.span whileHover={{ y: -10 }}>
            <Typography
              variant={changeContactoh5Size ? "h6" : "h5"}
              component={"p"}
              textAlign={"center"}
            >
              Ven y visitanos
            </Typography>
          </motion.span>
          <Stack
            direction={changeMapToColumn ? "column" : "row"}
            width={"100%"}
            gap={changeDirectionsToColumn ? "75px" : "25px"}
          >
            <Stack
              width={changeMapToColumn ? "100%" : "50%"}
              gap={changeDirectionsToColumn ? "15px" : "50px"}
              justifyContent={"center"}
            >
              <motion.span whileHover={{ y: -5 }}>
                <Typography textAlign={"center"}>
                  Instalaciones donde se imparten las clases
                </Typography>
              </motion.span>
              <Stack
                direction={changeDirectionsToColumn ? "column" : "row"}
                width={"100%"}
                gap={"25px"}
                justifyContent={changeMapToColumn ? "space-evenly" : "start"}
                textAlign={changeDirectionsToColumn ? "center" : "start"}
              >
                <Stack justifyContent={"center"} gap={"10px"}>
                  <motion.span whileHover={{ y: -5 }}>
                    <Typography>Coahuila #7</Typography>
                  </motion.span>
                  <motion.span whileHover={{ y: -5 }}>
                    <Typography>Colonia Bohemia</Typography>
                  </motion.span>
                  <motion.span whileHover={{ y: -5 }}>
                    <Typography>Minatitlán, Ver.</Typography>
                  </motion.span>
                </Stack>
                <motion.div
                  style={
                    changeDirectionsToColumn
                      ? {
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }
                      : undefined
                  }
                  whileHover={{
                    y: -5,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1220.6407368862097!2d-94.55785474404895!3d17.990672018379737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ea280484fb8b61%3A0x87611b23ed3a9676!2sCENTRO%20DE%20APRENDIZAJE%20DE%20IDIOMAS%20(CADI)!5e0!3m2!1ses!2smx!4v1728498106515!5m2!1ses!2smx"
                    width={changeMapSize ? "250" : "300"}
                    height={changeMapSize ? "250" : "300"}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </Stack>
            </Stack>
            <Stack
              width={changeMapToColumn ? "100%" : "50%"}
              gap={changeDirectionsToColumn ? "15px" : "50px"}
              justifyContent={"center"}
            >
              <motion.span whileHover={{ y: -5 }}>
                <Typography textAlign={"center"}>
                  Instalaciones del polideportivo
                </Typography>
              </motion.span>
              <Stack
                direction={changeDirectionsToColumn ? "column" : "row"}
                width={"100%"}
                gap={"25px"}
                justifyContent={changeMapToColumn ? "space-evenly" : "start"}
                textAlign={changeDirectionsToColumn ? "center" : "start"}
              >
                <Stack justifyContent={"center"} gap={"10px"}>
                  <motion.span whileHover={{ y: -5 }}>
                    <Typography>Porfirio Díaz #30</Typography>
                  </motion.span>
                  <motion.span whileHover={{ y: -5 }}>
                    <Typography>Colonia 20 de noviembre</Typography>
                  </motion.span>
                  <motion.span whileHover={{ y: -5 }}>
                    <Typography>Minatitlán, Ver.</Typography>
                  </motion.span>
                </Stack>
                <motion.div
                  style={
                    changeDirectionsToColumn
                      ? {
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }
                      : undefined
                  }
                  whileHover={{
                    y: -5,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1173.440479225842!2d-94.54842430020746!3d17.999942081690627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ea28048488334b%3A0x3a3c02920b9ea5b7!2sCADI%20SPORT%20-%20Polideportivo!5e0!3m2!1ses!2smx!4v1728498230885!5m2!1ses!2smx"
                    width={changeMapSize ? "250" : "300"}
                    height={changeMapSize ? "250" : "300"}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </>
  );
}
