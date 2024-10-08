import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import { useEffect } from "react";
import "normalize.css";

function App() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "No te vayas por favor :c";
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
