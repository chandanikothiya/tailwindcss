import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useTheme } from "@emotion/react";
import { IconButton, useMediaQuery } from "@mui/material";
import { IoIosPerson } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";

const drawerWidth = 240;

function Layout({ children }) {

    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menulist = [
        { label: "All Doctore", icone: <IoIosPerson style={{ fontSize: '20px' }} /> },
        { label: "Appointment", icone: <CgNotes style={{ fontSize: '20px' }} /> },
        { label: "Patients", icone: <TiUser style={{ fontSize: '20px' }} /> },
        { label: "Schedule", icone: <AiOutlineSchedule style={{ fontSize: '20px' }} /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className="!bg-[#88C250]" open={open}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <img src="../../../public/assets/images/white-logo.svg" alt="logo" className="w-35" />
                    </Typography>

                    <IconButton
                        onClick={() => setOpen(!open)}
                        sx={{ ml: 10 }}
                    >
                        <FaArrowRightArrowLeft className="!text-[22px] text-white" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    '& .css-1lwhjos-MuiPaper-root-MuiDrawer-paper': {
                        backgroundColor: '#eaf0e5'
                    }
                }}
              
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', mt: 3 }}>
                    <List>
                        {menulist.map((v, index) => (
                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    component={NavLink}
                                    to={v.to}
                                    onClick={isMobile ? handleDrawerClose : null} // Auto-close drawer on mobile after clicking a link
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 2.5,

                                        },
                                        !isMobile && (open
                                            ? { justifyContent: 'initial' }
                                            : { justifyContent: 'center' }
                                        ),
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            { minWidth: 0, justifyContent: 'center' },
                                            !isMobile && (open ? { mr: 3 } : { mr: 'auto' }),
                                        ]}
                                    >
                                        {v.icone}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={v.label}
                                        sx={[
                                            !isMobile && (open ? { opacity: 1 } : { opacity: 0 }),
                                        ]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;