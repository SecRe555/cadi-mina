import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Activity from "./Activity";
import { motion } from "framer-motion";

export function IdiomasCard() {
  const theme = useTheme();
  return (
    <>
      <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
        <Icon
          icon="icon-park-solid:flag"
          color={theme.palette.secondary.main}
        />
        Idiomas
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      <Stack gap={"15px"}>
        <Activity icon="circle-flags:us-um" text="Inglés" />
        <Activity icon="circle-flags:fr" text="Francés" />
      </Stack>
    </>
  );
}
export function IdiomasExpandedCard() {
  const theme = useTheme();
  const adjustExpandedCards = useMediaQuery("(max-width: 800px)");
  return (
    <>
      <Box height={"50px"}>
        <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
          <Icon
            icon="icon-park-solid:flag"
            color={theme.palette.secondary.main}
          />
          Idiomas
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "25px" }} />
      <Stack
        width={"100%"}
        height={"calc(100% - 75px)"}
        direction={adjustExpandedCards ? "column" : "row"}
        gap="25px"
      >
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Inglés
            </Typography>
            <Typography fontWeight={"bold"}>
              Habilidades a desarrollar:
            </Typography>
            <Typography>Speaking, Reading, Listening, Writing</Typography>
            <Box height={"25px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios de aprender inglés:
            </Typography>
            <Typography>
              Aprender inglés aumenta la confianza, estimula el cerebro, fomenta
              la autodisciplina, facilita el aprendizaje de otros idiomas,
              mejora las habilidades de comunicación, incrementa la capacidad de
              resolución de problemas, estimula la creatividad y aumenta la
              adaptabilidad.
            </Typography>
          </Stack>
        </motion.div>
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Francés
            </Typography>
            <Typography fontWeight={"bold"}>
              Habilidades a desarrollar:
            </Typography>
            <Typography>Parler, Écrire, Écouter, Lire</Typography>
            <Box height={"25px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios de aprender francés:
            </Typography>
            <Typography>
              Aprender francés incrementa la autoestima, estimula el cerebro,
              desarrolla la autodisciplina, facilita el aprendizaje de idiomas
              relacionados, aumenta la empatía cultural, mejora las habilidades
              de comunicación, potencia el pensamiento crítico, fomenta la
              creatividad y aumenta la adaptabilidad.
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </>
  );
}

/*
<motion.div
          style={{ width: adjustExpandedCards ? "100%" : "50%", height: "100%", borderRadius: "25px" }}
          whileHover={{
            y: -5,
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
        ></motion.div>
*/
export function RefuerzoAcademicoCard() {
  const theme = useTheme();

  return (
    <>
      <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
        <Icon
          icon="icon-park-solid:backpack"
          color={theme.palette.secondary.main}
        />
        Refuerzo académico
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      <Stack gap={"15px"}>
        <Activity icon="icon-park-solid:notebook" text="Club de tareas" />
        <Activity
          icon="icon-park-solid:arithmetic-buttons"
          text="Área de exactas"
        />
      </Stack>
    </>
  );
}
export function RefuerzoAcademicoExpandedCard() {
  const theme = useTheme();
  const adjustExpandedCards = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Box height={"50px"}>
        <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
          <Icon
            icon="icon-park-solid:backpack"
            color={theme.palette.secondary.main}
          />
          Refuerzo académico
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "25px" }} />
      <Stack
        width={"100%"}
        height={"calc(100% - 75px)"}
        direction={adjustExpandedCards ? "column" : "row"}
        gap="25px"
      >
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Club de tareas
            </Typography>
            <Typography fontWeight={"bold"}>Nivel educativo:</Typography>
            <Typography>Primaria</Typography>
            <Box height={"25px"}></Box>
            <Typography fontWeight={"bold"}>Beneficios:</Typography>
            <Stack gap="2px">
              <Typography>
                {"\u2022"} Apoyo escolar en las materias segun su grado escolar
              </Typography>
              <Typography>{"\u2022"} Lecto-escritura</Typography>
              <Typography>{"\u2022"} Grafomotricidad</Typography>
              <Typography>
                {"\u2022"} Habilidades matematicas, razonamiento y pensamiento
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Área de exactas
            </Typography>
            <Typography fontWeight={"bold"}>Materias de apoyo:</Typography>
            <Typography>Matemáticas, física y química</Typography>
            <Box height={"25px"}></Box>
            <Stack gap={"2px"}>
              <Typography>
                {"\u2022"} Enfocado a estudiantes de nivel secundaria,
                preparatoria y universidad
              </Typography>
              <Typography>
                {"\u2022"} Apoyo, repaso y enseñanza de áreas exactas
              </Typography>
              <Typography>{"\u2022"} Preparación para exámenes</Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Stack>
    </>
  );
}

export function ArtesCard() {
  const theme = useTheme();

  return (
    <>
      <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
        <Icon
          icon="icon-park-solid:graphic-design"
          color={theme.palette.secondary.main}
        />
        Artes
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      <Stack gap={"15px"}>
        <Activity icon="icon-park-solid:pencil" text="Dibujo y pintura" />
        <Activity icon="icon-park-solid:music" text="Música" />
      </Stack>
    </>
  );
}
export function ArtesExpandedCard() {
  const theme = useTheme();
  const adjustExpandedCards = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Box height={"50px"}>
        <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
          <Icon
            icon="icon-park-solid:graphic-design"
            color={theme.palette.secondary.main}
          />
          Artes
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "25px" }} />
      <Stack
        width={"100%"}
        height={"calc(100% - 75px)"}
        direction={adjustExpandedCards ? "column" : "row"}
        gap="25px"
      >
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Dibujo y pintura
            </Typography>
            <Typography>
              Eleva tu creatividad y dale vida a todas tus ideas
            </Typography>
            <Box height={"25px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios del dibujo y la pintura:
            </Typography>
            <Stack gap="2px">
              <Typography>{"\u2022"} Concentración</Typography>
              <Typography>{"\u2022"} Disciplina</Typography>
              <Typography>{"\u2022"} Paciencia</Typography>
              <Typography>{"\u2022"} Enfoque y tranquilidad</Typography>
            </Stack>
          </Stack>
        </motion.div>
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Musica
            </Typography>
            <Typography fontWeight={"bold"}>
              Instrumentos a aprender:
            </Typography>
            <Typography>
              Piano, canto, guitarra, guitarra eléctrica, bajo, contrabajo,
              ukelele, violín
            </Typography>
            <Box height={"25px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios de aprender a tocar un instrumento:
            </Typography>
            <Stack gap={"2px"}>
              <Typography>
                {"\u2022"} Ayuda a mejorar la capacidad intelectual
              </Typography>
              <Typography>
                {"\u2022"} Desarrolla habilidades sociales
              </Typography>
              <Typography>{"\u2022"} Desarrolla confianza</Typography>
              <Typography>{"\u2022"} Inspira creatividad</Typography>
              <Typography>{"\u2022"} Enseña paciencia</Typography>
              <Typography>{"\u2022"} Es una forma de expresión</Typography>
              <Typography>{"\u2022"} Enseña disciplina</Typography>
              <Typography>
                {"\u2022"} Desarrolla la motricidad y coordinación
              </Typography>
              <Typography>
                {"\u2022"} Incrementa la capacidad matemática
              </Typography>
              <Typography>
                {"\u2022"} Induce estados de animo positivos
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Stack>
    </>
  );
}

export function DanzasCard() {
  const theme = useTheme();

  return (
    <>
      <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
        <Icon icon="mdi:dance-ballroom" color={theme.palette.secondary.main} />
        Danzas
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      <Stack gap={"15px"}>
        <Activity icon="guidance:discotheque" text="Bellydance" />
        <Activity icon="mdi:human-female-dance" text="Danzas polinesias" />
      </Stack>
    </>
  );
}
export function DanzasExpandedCard() {
  const theme = useTheme();
  const adjustExpandedCards = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Box height={"50px"}>
        <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
          <Icon
            icon="mdi:dance-ballroom"
            color={theme.palette.secondary.main}
          />
          Danzas
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "25px" }} />
      <Stack
        width={"100%"}
        height={"calc(100% - 75px)"}
        direction={adjustExpandedCards ? "column" : "row"}
        gap="25px"
      >
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Belly dance
            </Typography>
            <Typography>
              Tambien conocida como "danza árabe", es una danza milenaria que
              tiene su origen en Egipto. Donde se bailaba en los templos como
              parte del culto de los dioses, naturaleza y fertilidad.
            </Typography>
            <Box height={"10px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios de practicar belly dance:
            </Typography>
            <Stack gap="2px">
              <Typography>{"\u2022"} Disciplina</Typography>
              <Typography>{"\u2022"} Respeto</Typography>
              <Typography>{"\u2022"} Aprendizaje de otra cultura</Typography>
              <Typography>{"\u2022"} Motricidad y coordinación</Typography>
              <Typography>
                {"\u2022"} Ejercita y aumenta fuerza en brazos y piernas
              </Typography>
              <Typography>
                {"\u2022"} Atención, concentración, equilibrio y relajación
              </Typography>
              <Typography>
                {"\u2022"} Se trabaja toda la zona de abdominales
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
        <motion.div
          style={{
            width: adjustExpandedCards ? "100%" : "50%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Danzas polinesias
            </Typography>
            <Typography>
              Son aquellas danzas que tienen sus orígenes en las Islas del
              Pacífico Sur, que representan la cultura y habitos de los pueblos
              polinesios, que incluye cuentos y cantos sobre la naturaleza,
              mitología y sucesos de la vida diaria
            </Typography>
            <Box height={"10px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios de practicar danzas polinesias:
            </Typography>
            <Stack gap={"2px"}>
              <Typography>{"\u2022"} Disciplina</Typography>
              <Typography>{"\u2022"} Respeto</Typography>
              <Typography>{"\u2022"} Aprendizaje de otra cultura</Typography>
              <Typography>{"\u2022"} Motricidad y coordinación</Typography>
              <Typography>
                {"\u2022"} Ejercita y aumenta fuerza en brazos y piernas
              </Typography>
              <Typography>
                {"\u2022"} Atención, concentración, equilibrio y relajación
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Stack>
    </>
  );
}

export function DeporteCard() {
  const theme = useTheme();
  return (
    <>
      <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
        <Icon
          icon="icon-park-solid:sport"
          color={theme.palette.secondary.main}
        />
        Actividades físicas
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      <Stack gap={"15px"}>
        <Activity icon="icon-park-solid:kungfu" text="Kung fu" />
      </Stack>
    </>
  );
}
export function DeportesExpandedCard() {
  const theme = useTheme();
  const breakTitleRow = useMediaQuery("(max-width: 350px)");
  const adjustExpandedCards = useMediaQuery("(max-width: 800px)");
  return (
    <>
      <Box height={"50px"}>
        <Typography display={"flex"} alignItems={"center"} gap={"25px"}>
          <Icon
            icon="icon-park-solid:sport"
            color={theme.palette.secondary.main}
          />
          Actividades{breakTitleRow && <br />} físicas
        </Typography>
      </Box>
      <Divider
        sx={{ marginTop: breakTitleRow ? "25px" : "0", marginBottom: "25px" }}
      />
      <Stack
        width={"100%"}
        height={"calc(100% - 75px)"}
        direction={"row"}
        justifyContent={"center"}
        paddingBottom={"25px"}
      >
        <motion.div
          style={{
            width: adjustExpandedCards ? "90%" : "65%",
            height: "100%",
            borderRadius: "25px",
            padding: "15px",
            overflowY: "auto",
          }}
          whileInView={{
            y: -5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            y: 0,
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack gap={"5px"}>
            <Typography variant="h6" component={"p"}>
              Kung fu
            </Typography>
            <Typography>
              Arte marcial como forma de defensa personal basada en golpes de
              pies y manos que requiere gran concentración mental, disciplina y
              constancia basada en principios filosóficos chinos.
            </Typography>
            <Box height={"5px"}></Box>
            <Typography fontWeight={"bold"}>
              Beneficios de practicar kung fu:
            </Typography>
            <Stack gap="2px">
              <Typography>{"\u2022"} Disciplina</Typography>
              <Typography>{"\u2022"} Respeto</Typography>
              <Typography>{"\u2022"} Tolerancia</Typography>
              <Typography>{"\u2022"} Motricidad y coordinación</Typography>
              <Typography>{"\u2022"} Ejercita y aumenta la fuerza</Typography>
              <Typography>
                {"\u2022"} Ejercicio de atención y concentración
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Stack>
    </>
  );
}
