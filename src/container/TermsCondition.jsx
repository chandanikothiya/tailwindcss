import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function TermsCondition() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Terms and Conditions</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="termconditions">
                <div className="containercust text-[#555555] font-Libre  font-[400] ">
                    <p className="text-[15px] leading-7">
                        Before you register and conduct or download <strong className="text-black">MediGrids</strong> downloadable product(s) for your motives, please ensure you have read,
                        acknowledged, and accepted all the terms. By using <strong className="text-black">MediGrids</strong> and/or other items, we believe you have agreed to the following terms and conditions.
                    </p>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black  font-extrabold">Refunds</h3>

                        <p className="text-[15px] leading-7 my-5">
                            We have a patron amicable <span className="font-merriweather">15</span> days <a href="#" className="text-[#9588e8] underline">refund policy</a>. However, you can’t interrogate for a refund claiming a feature that your bought theme or plugin does not comprehend.
                        </p>

                        <ul>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >1.</strong>
                                Complimentary ground shipping within <span className="font-merriweather">1</span> to <span className="font-merriweather">7</span> business days
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >2.</strong>
                                In-store collection available within  <span className="font-merriweather">1</span> to <span className="font-merriweather">7</span> business days
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >3.</strong>
                                Next-day and Express delivery options also available
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >4.</strong>
                                Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >5.</strong>
                                See the delivery FAQs for details on shipping methods, costs and delivery times
                            </li>
                        </ul>
                    </div>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Product Delivery</h3>

                        <p className="text-[15px] leading-7 my-5">
                            All products can be downloadable upon buy. Products will be unrestricted for download after payment is received and verified. To process our payments, we use Stripe & PayPal,
                            which supports most debit and credit cards, i.e., MasterCard, Visa, American Express, Discover, JCB, etc. You must accept their terms and conditions before.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li className="mb-2">
                                Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.
                            </li>
                            <li className="mb-2">
                                <strong className="text-black">MediGrids</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don’t have to re-enter
                                them for future purchases.
                            </li>
                            <li className="leading-7">
                                PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed.
                                To register for a PayPal account, visit the website <a href="#" className="text-[#9588e8] underline">paypal.com.</a>
                            </li>

                        </ul>
                    </div>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Product Updates</h3>

                        <p className="text-[15px] leading-7 my-5">
                            All themes and plugins are designed to be compatible with the latest version of WordPress. <strong className="text-black">MediGrids</strong> themes, templates, and plugins support the latest modern web browsers, including Chrome, Safari,
                            Firefox, Brave, UC, Edge, Opera Mini, etc. Product updates are available to our customers for a lifetime.
                        </p>
                    </div>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Modifications</h3>

                        <p className="text-[15px] leading-7 my-5">
                            You can modify any of our products based on your needs/demands. But please remember that before modifying, check the documentation and tell us in the comment or support section if there is
                            an easier and better way to make what you want.
                        </p>
                    </div>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Unauthorized Usage</h3>

                        <p className="text-[15px] leading-7 my-5">
                            You should not use the <strong className="text-black">MediGrids</strong> products for any unauthorized purpose in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright laws),
                            as well as the laws of the European Union and International law. Using our themes/templates/plugins is forbidden on websites that civilize violence, pornography, incivility content, or piracy links.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            We reserve the right to block your user account instantly if we notice any improper usage.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            If you signed up on the <strong className="text-black">MediGrids.com</strong> website, you are liable for maintaining the safety of that, and you are fully responsible for all activities that happen under your account or
                            any other operations that have taken from that. You must notify us without delay for any disallowed uses of your account.
                        </p>
                    </div>


                    <h3 className="text-[20px] text-black font-extrabold mt-8">Licensing and Usage</h3>
                    <p className="text-[15px] leading-7 mt-5 mb-8">
                        Our items are licensed under the GNU General Public License v2.0.
                    </p>


                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Help/Support</h3>

                        <p className="text-[15px] leading-7 my-5">
                            Once you have downloaded our product, you may contact us for help/support via comment or by sending a message from the item support zone, and we will do our best to review and fix your bug.
                            We will try to provide a solution via comment, support ticket, or email. After that, we will update the core product. Themes, templates, and plugin support is offered to customers via
                            comment, email, or support ticket.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            If your support demands extra product modification, you must hire an expert.
                        </p>
                    </div>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Proprietary</h3>

                        <p className="text-[15px] leading-7 my-5">
                            You may not claim intellectual or monopolistic ownership of any of our products, modified or not. All products are the belongings of <strong className="text-black">MediGrids</strong>. Our products are provided without any warranty,
                            either published or not. In no case shall our legal person be responsible for any damages including, but not restricted to, direct, indirect, particular, incidental damages arising out of
                            the use of our products.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            The above announcement is not authentic for those products which are released under the license of GNU/GPL (GNU GENERAL PUBLIC LICENSE).
                            For more information about this license, please visit the GNU page.
                        </p>
                    </div>

                    <h3 className="text-[20px] text-black font-extrabold mt-8">Anti- juggle</h3>
                    <p className="text-[15px] leading-7 mt-5 mb-8">
                        However, our customer purchases can be pending for a manual anti-cheat checkup to review the payment system. You will receive an elaborate email about your payment.
                        An anti-cheat check happens due to the progressive number of deceptive transactions from individuals who are not genuine cardholders of the credit cards used during purchases.
                        The customer account can be ceased for a manual anti-cheat check for 24 hours. Also, it can be ceased for a longer term for more investigations.
                    </p>


                    <h3 className="text-[20px] text-black font-extrabold mt-8">Price Changes</h3>
                    <p className="text-[15px] leading-7 mt-5 mb-8">
                        <strong className="text-black">MediGrids</strong> reserves the right at any time and from time to time to change or discard, provisionally or permanently, any product with or without prior notice.
                    </p>


                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-extrabold">Warranty</h3>

                        <p className="text-[15px] leading-7 my-5">
                            <strong className="text-black">MediGrids</strong> products are provided “as is” without any warranty, either published or not. Each of the <strong className="text-black">MediGrids</strong> products is guaranteed to function correctly upon appropriate installation,
                            activation, and options configuration of the product in the latest technologies stable versions to which theme/template/plugin was dedicated. <strong className="text-black">MediGrids</strong> cannot give guarantee
                            compatibility with any 3rd party plugin – as there are too many plugins to support. Please ensure that the browsers you use will work with the themes/templates/plugins,
                            as we guarantee that the <strong className="text-black">MediGrids</strong> themes/templates/plugins will work with all browser combinations.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            We are not licensed to provide stock images and particular true-type fonts that might be used on any or all of the provided products.
                            These require you to own or purchase from their respective owners. The images/videos we show in the demo versions of products are for demonstration motives,
                            and you are not allowed to use them on production sites.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            All members have access to the comments. <strong className="text-black">MediGrids</strong> does not commit to monitoring the comments, but we reserve the right to respond and answer the questions.
                        </p>

                        <p className="text-[15px] leading-7 my-5">
                            We reserve the right to change and modify terms and conditions at any time without any prior notice.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default TermsCondition;