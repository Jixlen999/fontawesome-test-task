import { Box } from "@mui/material";

import Main from "../Main";

const App = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Main />
    </Box>
  );
};

export default App;
