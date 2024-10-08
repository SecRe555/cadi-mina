import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography, useTheme } from "@mui/material";
import React from "react";

interface ActivityProps {
  icon: string;
  text: string;
}
export default function Activity({ icon, text }: ActivityProps) {
  const theme = useTheme();

  return (
    <Typography display={"flex"} alignItems={"center"} gap={"10px"}>
      <Icon icon={icon} color={theme.palette.primary.main} />
      {text}
    </Typography>
  );
}
