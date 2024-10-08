import { Button, useTheme } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import useUtils from "@/states/utilsState";
import React, { useRef, useEffect } from "react";

interface ExpandableCardsProps {
  id: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  children: React.ReactNode;
}

export function ExpandableCard({
  id,
  setSelectedId,
  children,
}: ExpandableCardsProps) {
  const { setIsMainScrolleable } = useUtils();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Función para verificar si el usuario ha hecho scroll más allá de la tarjeta
  const checkIfCardIsOutOfView = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      // Si la tarjeta ya no está visible (fuera del viewport), la cerramos
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setSelectedId(null);
      }
    }
  };

  // Añadimos el evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", checkIfCardIsOutOfView);
    return () => {
      window.removeEventListener("scroll", checkIfCardIsOutOfView);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      layoutId={id}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        border: `1px solid #6c63ff`,
        borderRadius: "25px",
        cursor: "pointer",
      }}
      onClick={() => {
        setIsMainScrolleable(true);
        setSelectedId(id);
      }} // Expande la tarjeta al hacer clic
      whileHover={{ y: -5, boxShadow: "0px 5px 10px rgba(0,0,0,0.25)" }}
    >
      {children}
    </motion.div>
  );
}

export function ExpandedCard({
  id,
  setSelectedId,
  children,
}: ExpandableCardsProps) {
  const theme = useTheme();
  const { setIsMainScrolleable } = useUtils();

  return (
    <motion.div
      layoutId={id}
      style={{
        position: "fixed",
        top: "5%",
        left: "5%",
        right: "5%",
        bottom: "5%",
        padding: "20px",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "25px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      {children}
      <motion.span
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.8 }}
      >
        <Button
          sx={{
            minWidth: "0",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            borderRadius: "50%",
          }}
          onClick={() => {
            setIsMainScrolleable(true);
            setSelectedId(null);
          }}
        >
          <Icon icon="vaadin:close" />
        </Button>
      </motion.span>
    </motion.div>
  );
}
