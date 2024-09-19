import HeroSection from "@/components/hero-pages";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";
import WhatsAppIcon from "@/components/whatsapp-icon";


const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

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
    <>
      <div className="overflow-hidden bg-gray-50">
        <div className="w-full">
          <HeroSection
            image="/images/bann2.jpeg"
            mainText={t("Reach out")}
            subText={t("Contact")}
          />
        </div>
        <div className="flex flex-col md:flex-row bg-white  overflow-hidden p-6">
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold mb-2 text-[#835782]">
              {t("Get In Touch")}
            </h2>
            <p className="mb-4 text-[#212529] opacity-60">
              {t("Get in touch with us")}
            </p>

            <div className="mb-4">
              <div className="flex flex-col items-start">
                <p className="text-[#495057] text-lg  ">{t("Phone")}</p>
                <div className="flex flex-row m-3 ">
                  <FiPhone className="w-6 h-6 text-[#6C757D]" />
                  <p className="text-lg mt-[-5px] mx-2 text-[#6C757D]">
                    0509130845
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-[#495057] text-lg  "> {t("Email")} </p>
                <div className="flex flex-row m-3 ">
                  <MdOutlineMailOutline className="w-6 h-6 text-[#6C757D]" />
                  <p className="text-lg mt-[-3px] mx-2 text-[#6C757D] ">
                    info@dream.sa.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-[#495057] text-lg  ">
                  {" "}
                  {t("Office address")}{" "}
                </p>
                <div className="flex flex-row m-3 ">
                  <TbCurrentLocation className="w-6 h-6 text-[#6C757D]" />
                  <p className="text-lg mt-[-5px] mx-2 text-[#6C757D]">
                    {t("Al olaya District - Musaad Al-Anqari")}
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                <label htmlFor="lastName" className="mb-1 text-[#835782]">
                  {t("Phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="p-2 border border-gray-300 rounded"
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
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
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
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
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
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
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
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
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
      <WhatsAppIcon />
    </>
  );
};

export default Contact;
