import { Button, useTheme } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import useUtils from "@/states/utilsState";
import React, { useRef, useEffect, useState } from "react";

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

  return (
    <motion.div
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // El elemento es visible
          } else {
            setIsVisible(false); // El elemento ha salido del viewport
            setSelectedId(null);
          }
        });
      },
      {
        root: null, // Usar el viewport del navegador
        rootMargin: "0px",
        threshold: 0.1, // Disparar cuando el 10% del elemento sea visible
      }
    );

    const currentElement = cardRef.current;
    if (currentElement) {
      observer.observe(currentElement); // Observa el elemento
    }

    // Limpieza cuando el componente se desmonte
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Deja de observar el elemento
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
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
