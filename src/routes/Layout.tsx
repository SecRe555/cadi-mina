import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import useUtils from "@/states/utilsState";
import { Stack, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const theme = useTheme();
  const { isMainScrolleable } = useUtils();

  return (
    <>
      <Stack
        sx={{
          "--primary-color": theme.palette.primary.main,
          "--secondary-color": theme.palette.secondary.main,
          "--bg-color-paper": theme.palette.background.paper,
          overflow: isMainScrolleable ? "auto" : "hidden",
        }}
      >
        <Banner />
        <Outlet />
        <Footer />
      </Stack>
    </>
  );
}
