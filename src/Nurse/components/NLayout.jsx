import React, { useEffect, useState } from "react";
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
import { FaArrowRightArrowLeft, FaHireAHelper, FaLock } from "react-icons/fa6";
import { useTheme } from "@emotion/react";
import { IconButton, useMediaQuery } from "@mui/material";
import { IoIosPerson, IoIosSettings } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiUserFill } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

const drawerWidth = 240;



function NLayout({ children }) {

    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [open, setOpen] = React.useState(true);
    const [sopen, setSopen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const nurseMenu = [
        {
            label: "Dashboard",
            icon: <MdDashboard style={{ fontSize: "20px" }} />
        },
        {
            label: "Patients",
            icon: <FaUserInjured style={{ fontSize: "20px" }} />
        },
        {
            label: "Appointments",
            icon: <FaCalendarCheck style={{ fontSize: "20px" }} />
        },
        {
            label: "Vital Signs",
            icon: <FaNotesMedical style={{ fontSize: "20px" }} />
        },
        {
            label: "Medications",
            icon: <FaPills style={{ fontSize: "20px" }} />
        },
        {
            label: "Lab Reports",
            icon: <FaFlask style={{ fontSize: "20px" }} />
        },
        {
            label: "Emergency",
            icon: <FaAmbulance style={{ fontSize: "20px" }} />
        },
        {
            label: "Schedule",
            icon: <AiOutlineSchedule style={{ fontSize: "20px" }} />
        },
        {
            label: "Bed Management",
            icon: <FaBed style={{ fontSize: "20px" }} />
        },
        {
            label: "Reports",
            icon: <HiDocumentReport style={{ fontSize: "20px" }} />
        }
    ];

    useEffect(() => {
        const closeMenu = () => {
            setSopen(false);
        };

        window.addEventListener("click", closeMenu);

        return () => {
            window.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className="!bg-[#88C250]" open={open}>
                <Toolbar className="flex justify-between">
                    <Box className="flex">
                        <Typography variant="h6" noWrap component="div">
                            {
                                open ?
                                    <img src="../../../public/assets/images/white-logo.svg" alt="logo" className="w-35" /> :
                                    <img src="../../../public/assets/images/white.png" alt="logo" className="w-8" />
                            }

                        </Typography>

                        <IconButton
                            onClick={() => setOpen(!open)}
                            sx={{ ml: open ? 10 : 4 }}
                        >
                            <FaArrowRightArrowLeft className="!text-[22px] text-white" />
                        </IconButton>
                    </Box>

                    <Box className="flex items-center gap-x-5">
                        <img src="../../../public/assets/images/comment1.jpg" alt="" className="w-10 rounded-full" />

                        <ul>
                            {/* <span className="absolute top-13  right-40 w-4 h-4 bg-white rotate-45"></span> */}
                            <li className="dnavitem relative  flex items-center cursor-default" onClick={(e) => {
                                e.stopPropagation();
                                setSopen(!sopen);
                            }}>Arnold Ramsy <MdKeyboardArrowDown className="text-xl" />
                                <ul className={`dsubmenu absolute top-[45px] -left-[70px]  bg-white shadow-2xl w-[200px] ${sopen ? 'block' : 'hidden'} rounded-bl-lg rounded-br-lg`}>
                                    <li><IoIosSettings /> Setting</li>
                                    <li><PiUserFill />Profile</li>
                                    <li><FaHireAHelper className="text-[14px]" />Help</li>
                                    <li><FaLock className="text-[14px]" />Logout</li>
                                </ul>
                            </li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: open ? 240 : 70,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? 240 : 70,
                        boxSizing: 'border-box',
                        overflowX: 'hidden !important',
                        overflowY: 'auto',
                        transition: 'width 0.3s ease',
                        backgroundColor: '#eaf0e5',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', mt: 3 }}>
                    <List
                        sx={{
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        {nurseMenu.map((v, index) => (
                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    component={NavLink}
                                    // to={v.to}
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
                                        {v.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={v.label}
                                        sx={{
                                            display: open ? "block" : "none",
                                            whiteSpace: "nowrap",
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default NLayout;