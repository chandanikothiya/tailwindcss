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
import { PiStethoscopeFill, PiUserFill } from "react-icons/pi";

const drawerWidth = 240;



function ALayout({ children }) {

    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [open, setOpen] = React.useState(true);
    const [sopen, setSopen] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menulist = [
        {
            label: "Doctor",
            icone: <PiStethoscopeFill style={{ fontSize: "20px" }} />,
            submenu: [
                {
                    label: "All Doctor",
                    to: "/admin/aalldoctore",
                },
                {
                    label: "Add Doctore",
                    to: "/admin/adddoctore",
                },
                {
                    label: "Edit Doctore",
                    to: "/doctore/schedule",
                }
            ],
        },
        {
            label: "Patients",
            icone: <IoIosPerson style={{ fontSize: "20px" }} />,
            submenu: [
                {
                    label: "All Patients",
                    to: "/doctore/alldoctore",
                },
                {
                    label: "Add Patients",
                    to: "/doctore/appointment",
                },
                {
                    label: "Edit Patients",
                    to: "/doctore/schedule",
                }
            ],
        },
        {
            label: "Appoinment",
            icone: <CgNotes style={{ fontSize: "20px" }} />,
            submenu: [
                {
                    label: "Doctore Schedule",
                    to: "/doctore/alldoctore",
                },
                {
                    label: "see Appoinment",
                    to: "/doctore/appointment",
                }
            ],
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
                    <List className="!px-3">
                        {menulist.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            if (item.submenu) {
                                                setOpenSubmenu(
                                                    openSubmenu === index ? null : index
                                                );
                                            }
                                        }}
                                    >
                                        <ListItemIcon>
                                            {item.icone}
                                        </ListItemIcon>

                                        {open && (
                                            <>
                                                <ListItemText primary={item.label} />

                                                {item.submenu && (
                                                    <MdKeyboardArrowDown
                                                        className={`transition-all ${openSubmenu === index
                                                            ? "rotate-180"
                                                            : ""
                                                            }`}
                                                    />
                                                )}
                                            </>
                                        )}
                                    </ListItemButton>
                                </ListItem>

                                {/* Submenu */}
                                {item.submenu && openSubmenu === index && (
                                    <List disablePadding>
                                        {item.submenu.map((sub, subIndex) => (
                                            <ListItem
                                                key={subIndex}
                                                disablePadding
                                            >
                                                <ListItemButton
                                                    component={NavLink}
                                                    to={sub.to}
                                                    sx={{
                                                        pl: 7,
                                                        minHeight: 40,
                                                        color:'#555'
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={sub.label}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </React.Fragment>
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

export default ALayout;