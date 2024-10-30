import HeroSection from "@/components/hero-pages";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { motion, useInView } from "framer-motion";
import { eventServices } from "@/data/data";

const Ad: React.FC = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState<string | null>(null);
    const form = useRef<HTMLFormElement>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm(
                    "service_6jh3ses",
                    "template_hmkmn1u",
                    form.current,
                    "tyd3ZtB0OE8aPSBSo"
                )
                .then(
                    () => {
                        setMessage("تم تسجيل ردكم بنجاح");
                        form.current;
                    },
                    (error) => {
                        setMessage(`FAILED... ${error.text}`);
                    }
                );
        }
    };
    return (
        <div className="overflow-hidden  bg-gray-50">
            <div className="overflow-hidden">
                <div className="w-full">
                    <HeroSection
                        image="/images/bann2.jpeg"
                        mainText=''
                        subText=''
                    />
                </div>
                <div className="flex items-center justify-center">
                    <div className="md:w-1/2 p-6 bg-[#F8F9FA]">
                        <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="mb-1 text-[#835782]">
                                    {t("First name")}
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="first_name"
                                    className="p-2 border border-gray-300 rounded"
                                    placeholder={t("First name")}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="lastName" className="mb-1 text-[#835782] ">
                                    {t("Phone")}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="p-2 border border-gray-300 rounded placeholder:rtl:text-right"
                                    placeholder={t("Phone")}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-1 text-[#835782]">
                                    {t("Email")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="p-2 border border-gray-300 rounded"
                                    placeholder={t("Email")}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="mb-1 text-[#835782]">
                                    {t("Message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="p-2 border border-gray-300 rounded"
                                    placeholder={t("Message")}
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-2 gap-y-4 mt-3  ">
                                <div className="flex gap-2 justify-center items-center">
                                    <input
                                        id="bordered-checkbox-1"
                                        type="checkbox"
                                        value={t("Weddings")}
                                        name="select"
                                        className="w-4 h-4 text-blue-600 bg-gray-100  "
                                    />
                                    <label className="w-full  text-sm font-medium text-[#835782] ">
                                        {t("Weddings")}
                                    </label>
                                </div>

                                <div className="flex gap-2 justify-center items-center">
                                    <input
                                        id="bordered-checkbox-1"
                                        type="checkbox"
                                        value={t("Special occasions")}
                                        name="select"
                                        className="w-4 h-4 text-blue-600 bg-gray-100  "
                                    />
                                    <label className="w-full  text-sm font-medium text-[#835782] ">
                                        {t("Special occasions")}
                                    </label>
                                </div>

                                <div className="flex gap-2 justify-center items-center">
                                    <input
                                        id="bordered-checkbox-1"
                                        type="checkbox"
                                        value={t("Talk to Customer Service")}
                                        name="select"
                                        className="w-4 h-4 text-blue-600 bg-gray-100  "
                                    />
                                    <label className="w-full text-sm font-medium text-[#835782] ">
                                        {t("Talk to Customer Service")}
                                    </label>
                                </div>

                                <div className="flex gap-2 justify-center items-center">
                                    <input
                                        id="bordered-checkbox-1"
                                        type="checkbox"
                                        value={t("Baby welcome celebration")}
                                        name="select"
                                        className="w-4 h-4 text-blue-600 bg-gray-100  "
                                    />
                                    <label className="w-full  text-sm font-medium text-[#835782] ">
                                        {t("Baby welcome celebration")}
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-[#835782] font-semibold rounded "
                            >
                                {t("Send Email")}
                            </button>
                        </form>
                        {message && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="relative bg-gradient-to-br from-[#764095] via-purple-500 to-pink-500 bg-black bg-opacity-50 text-white p-6 rounded-2xl shadow-2xl w-96 h-40 flex flex-col items-center justify-center transform transition-transform duration-300">

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setMessage(null)}
                                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                                        aria-label="Close"
                                    >
                                        <IoCloseSharp size={24} />
                                    </button>

                                    {/* Message Text */}
                                    <p className="text-xl font-bold mb-4">{message}</p>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setMessage(null)}
                                        className="bg-white text-[#764095] px-6 py-2 rounded-full font-semibold hover:bg-[#764095] hover:text-white transition-colors duration-200 ease-in-out shadow-md"
                                    >
                                        {t("Close")}
                                    </button>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>

            <>
                <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center p-3 rtl:text-right text-[#835782] my-4 " id="about">
                    <div className="md:w-1/2 w-full">
                        <img
                            src="/images/about.jpeg"
                            alt="People planning a wedding event"
                            className="rounded-3xl w-full md:h-[55vh] h-64 object-fill "
                        />
                    </div>
                    <motion.div
                        ref={ref}
                        className="md:w-1/2 w-full md:ml-2 p-3 "
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"} // Animate based on inView
                        transition={{ duration: 1, delay: 0.2 }}
                        variants={textVariants}
                    >
                        <h6 className="mb-1 font-monotype"> {t("About us")}</h6>
                        <hr className="w-5 ml-5 rtl:hidden border-2 border-[#835782] pb-3" />
                        <h2 className="text-4xl font-bold mb-2">
                            {t("A Passion for Creating Exceptional Events")}
                        </h2>

                        <p className="text-[#835782]">{t("about disc")}</p>

                    </motion.div>
                </div>
                <>
                    <div
                        className="rtl:text-right"
                        id="services"
                    >
                        <div className="flex flex-col items-center justify-center ">
                            <div className="flex p-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-lg text-[#835782] font-monotype px-4 md:w-auto w-64 text-center ">
                                        {t("Services")}
                                    </h3>
                                    <hr className="w-5 mx-auto border-2 border-[#835782] rtl:hidden " />
                                    <div className="flex md:flex-row flex-col w-full ">
                                        <h1 className="md:text-4xl text-3xl mx-2 font-bold  text-[#835782] ">
                                            {t("From Vision to Reality")}
                                        </h1>
                                        
                                    </div>

                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-col-reverse z-50 mb-10"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                                {eventServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className=" rounded-lg flex flex-col-reverse items-center justify-center "
                                        variants={itemVariants}
                                    >
                                        <div className="rounded-2xl hover:bg-[#835782] group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] group bg-white z-50 shadow-md shadow-[#835782]">
                                            <div className=" group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] p-3 bg-white rounded-2xl">
                                                <h2 className="text-xl font-semibold group-hover:text-white text-[#835782]">
                                                    {t(service.title)}
                                                </h2>
                                                <p className="text-[#835782] group-hover:text-white w-full tracking-wider mt-2 text-base md:text-sm lg:text-sm transition-all duration-300 ease-in-out">
                                                    {t(service.description)}
                                                </p>
                                            </div>
                                        </div>

                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </>
            </>
            <WhatsAppIcon />
        </div>
    );
};

export default Ad;
