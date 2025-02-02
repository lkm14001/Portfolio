import { Box, SxProps, Theme } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
    style: SxProps<Theme>;
    children: React.ReactElement,
    id?: string,
}

const MainLayout = () => {
  return (
    <>
      <Box
        component="div"
        className="main-layout"
        sx={{
          backgroundColor: 'homePage.background',
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
