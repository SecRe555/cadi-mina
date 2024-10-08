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
import {
  Box,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type ArtesCardsKeys =
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
  const { scrollY } = useScroll();
  const clasesRef = useRef<HTMLDivElement | null>(null);

  const [artesSelectedId, setArtesSelectedId] = useState<string | null>(null);
  const artesItems: ArtesItems[] = [
    { id: "idiomas", title: "Idiomas", subtitle: "Clases de idiomas" },
    {
      id: "refuerzo-academico",
      title: "Refuerzo academico",
      subtitle: "Refuerzo academico",
    },
    {
      id: "artes",
      title: "Refuerzo academico",
      subtitle: "Refuerzo academico",
    },
    {
      id: "danzas",
      title: "Refuerzo academico",
      subtitle: "Refuerzo academico",
    },
    {
      id: "deporte",
      title: "Refuerzo academico",
      subtitle: "Refuerzo academico",
    },
    // Puedes agregar más elementos aquí
  ];

  const primaryColor = useMemo(() => theme.palette.primary.main, [theme]);
  const bgColorPaper = useMemo(() => theme.palette.background.paper, [theme]);

  useEffect(() => {
    // Función para cerrar las tarjetas si el scroll supera una cierta cantidad
    const handleScroll = () => {
      if (clasesRef.current && artesSelectedId) {
        const rect = clasesRef.current.getBoundingClientRect();
        if (rect.top > rect.height || rect.bottom < 0) {
          console.log("Se fue por arriba");
          setArtesSelectedId(null);
        }
      }
    };

    // Escucha el scroll
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe(); // Limpieza del evento
  }, [scrollY]);

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
            background: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${"https://picsum.photos/1920/1080"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          style={{
            padding: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            textAlign: "center",
            backdropFilter: "blur(2px)",
            borderRadius: "25px",
          }}
          whileInView={{ y: [0, 0, -10, 5, -10, -1, 0, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatDelay: 2,
            delay: 3,
          }}
        >
          <Typography variant="h4" component={"h2"}>
            CADI Minatitlán
          </Typography>
          <Typography>
            Accede a un espacio de aprendizaje o un ambiente activo, ¡tú
            decides!
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          height: HEIGHT_RESTANTE,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          minHeight={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"50px"}
          paddingX={"50px"}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              borderRadius: 25,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0px 5px 10px rgba(0,0,0,0.25)",
            }}
          >
            <Stack gap={"25px"} paddingX={"30px"}>
              <Typography variant="h6" textAlign={"center"}>
                ¿Quiénes somos?
              </Typography>
              <Typography>
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
            <Stack gap={"25px"} paddingX={"30px"}>
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
                      <Typography>
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
                      <Typography>
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
      <motion.div
        ref={clasesRef}
        style={{
          height: HEIGHT_RESTANTE,
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
          justifyContent={"center"}
          alignItems={"center"}
          padding={"100px 50px 0 50px"}
          gap={"50px"}
          boxSizing={"border-box"}
        >
          <motion.span whileHover={{ y: -10 }}>
            <Typography
              id={"activities-text"}
              variant="h5"
              component={"p"}
              textAlign={"center"}
            >
              Aumenta tus conocimientos con nuestras clases.
            </Typography>
          </motion.span>
          <Grid container width={"100%"} height={"100%"} columnSpacing={5}>
            {artesItems.map((item: ArtesItems) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
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
      <motion.div
        style={{
          height: HEIGHT_RESTANTE,
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
          justifyContent={"center"}
          alignItems={"center"}
          padding={"100px 50px 0 50px"}
          gap={"50px"}
          boxSizing={"border-box"}
        >
          <motion.span whileHover={{ y: -10 }}>
            <Typography
              id={"activities-text"}
              variant="h5"
              component={"p"}
              textAlign={"center"}
            >
              Entrena tu cuerpo con nuestras actividades.
            </Typography>
          </motion.span>
          <Grid container width={"100%"} height={"100%"} columnSpacing={5}>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                style={{
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
                <Typography>Gimnasio mixto</Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                style={{
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
              </motion.div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                style={{
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
              </motion.div>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                style={{
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
              </motion.div>
            </Grid>
          </Grid>
        </Stack>
      </motion.div>
    </>
  );
}
