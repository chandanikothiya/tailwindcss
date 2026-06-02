import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { RiArrowUpSLine } from "react-icons/ri";

function FAQ() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Frequently Asked Questions</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="feq">
                <div className="containercust">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <Accordion expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}>
                                <AccordionSummary
                                    expandIcon={<RiArrowUpSLine className={`${expanded === 'panel1' ? '!text-white' : ''}`}/>}
                                    className={`${expanded === 'panel1' ? '!bg-[#006838] !text-white' : ''}`}
                                >
                                    <Typography component="span" className="flex items-center flex-shrink-0 gap-x-2 !text-[13px] md:!text-[15px] font-merriweather !font-[600]">
                                        <span className={`block flex items-center justify-center   border-1 border-gray-200 rounded-full  w-[30px] h-[30px] ${expanded === 'panel1' ? '!bg-white !text-[#006838]' : ''}`}>
                                            01</span> How Do I Contact Customer Services?</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="text-[#838181] ">
                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem,
                                        lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus
                                    </Typography>

                                    <Typography className="!mt-5 !leading-6 !font-poppins !text-[13px] md:!text-[15px]">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch.
                                        Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === "panel2"}
                                onChange={handleChange("panel2")} className="mt-5">
                                <AccordionSummary
                                    expandIcon={<RiArrowUpSLine className={`${expanded === 'panel2' ? '!text-white' : ''}`}/>}
                                    className={`${expanded === 'panel2' ? '!bg-[#006838] !text-white' : ''}`}
                                >
                                    <Typography component="span" className="flex items-center gap-x-2 !text-[13px] md:!text-[15px] font-merriweather !font-[600]">
                                        <span className={`block flex items-center justify-center flex-shrink-0  border-1 border-gray-200 rounded-full  w-[30px] h-[30px] ${expanded === 'panel2' ? '!bg-white !text-[#006838]' : ''}`}>
                                            02</span>  Do Doctor Pay For Good By People?</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="text-[#838181] ">
                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px]">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch.
                                        Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </Typography>

                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px] !mt-5 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem,
                                        lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === "panel3"}
                                onChange={handleChange("panel3")} className="mt-5">
                                <AccordionSummary
                                    expandIcon={<RiArrowUpSLine className={`${expanded === 'panel3' ? '!text-white' : ''}`}/>}
                                    className={`${expanded === 'panel3' ? '!bg-[#006838] !text-white' : ''}`}                                                   >
                                    <Typography component="span" className="flex items-center gap-x-2 !text-[13px] md:!text-[15px] font-merriweather !font-[600]">
                                        <span className={`block flex items-center justify-center flex-shrink-0 border-1 border-gray-200 rounded-full  w-[30px] h-[30px] ${expanded === 'panel3' ? '!bg-white !text-[#006838]' : ''}`}
                                        >03</span>Does has Healthcare Mobile App For People?</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="text-[#838181] ">
                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem,
                                        lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === "panel4"}
                                onChange={handleChange("panel4")} className="mt-5">
                                <AccordionSummary
                                     expandIcon={<RiArrowUpSLine className={`${expanded === 'panel4' ? '!text-white' : ''}`}/>}
                                    className={`${expanded === 'panel4' ? '!bg-[#006838] !text-white' : ''}`}
                                >
                                    <Typography component="span" className="flex items-center gap-x-2 !text-[13px] md:!text-[15px] font-merriweather !font-[600]">
                                        <span className={`block flex items-center justify-center flex-shrink-0  border-1 border-gray-200 rounded-full  w-[30px] h-[30px] ${expanded === 'panel4' ? '!bg-white !text-[#006838]' : ''}`}>
                                            04</span> How Patient Can Consult With online Doctor?</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="text-[#838181] ">
                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px]">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch.
                                        Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </Typography>

                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px] !mt-5 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem,
                                        lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === "panel5"}
                                onChange={handleChange("panel5")} className="mt-5">
                                <AccordionSummary
                                    expandIcon={<RiArrowUpSLine className={`${expanded === 'panel5' ? '!text-white' : ''}`}/>}
                                    className={`${expanded === 'panel5' ? '!bg-[#006838] !text-white' : ''}`}
                                >
                                    <Typography component="span" className="flex items-center gap-x-2 !text-[13px] md:!text-[15px] font-merriweather !font-[600]">
                                        <span className={`block flex items-center justify-center flex-shrink-0 border-1 border-gray-200 rounded-full  w-[30px] h-[30px] ${expanded === 'panel2' ? '!bg-white !text-[#006838]' : ''}`}>
                                            05</span>Can You Contact My Doctor For Me?</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="text-[#838181] ">
                                    <Typography className="!leading-6 !font-poppins !text-[13px] md:!text-[15px]">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch.
                                        Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FAQ;