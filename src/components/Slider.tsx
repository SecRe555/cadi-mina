// Slider.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

import gym0 from "@images/gym0.jpeg";
import gym1 from "@images/gym1.jpeg";
import gym2 from "@images/gym2.jpeg";
import gym3 from "@images/gym3.jpeg";
import gym4 from "@images/gym4.jpeg";
import gym5 from "@images/gym5.jpeg";
import gym6 from "@images/gym6.jpeg";
import gym7 from "@images/gym7.jpeg";

const images = [gym0, gym1, gym2, gym3, gym4, gym5, gym6, gym7];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: 800,
        margin: "auto",
        position: "relative",
      }}
    >
      {/* Botón para Slide Anterior */}
      <motion.span
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.8 }}
        style={{
          position: "absolute",
          left: 10,
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
        }}
      >
        <IconButton onClick={prevSlide}>
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            color={theme.palette.primary.main}
          />
        </IconButton>
      </motion.span>

      {/* Contenedor del Slider */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "140px",
          aspectRatio: "16/9",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </AnimatePresence>
      </Box>

      {/* Botón para Siguiente Slide */}
      <motion.span
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.8 }}
        style={{
          position: "absolute",
          right: 10,
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
        }}
      >
        <IconButton onClick={nextSlide}>
          <Icon
            icon="material-symbols:arrow-forward-ios"
            color={theme.palette.primary.main}
          />
        </IconButton>
      </motion.span>

      {/* Indicadores de Puntos */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.75 }}
            whileTap={{ scale: 0.5 }}
            onClick={() => goToSlide(index)}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index
                  ? theme.palette.primary.main
                  : theme.palette.grey[400],
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
