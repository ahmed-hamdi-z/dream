import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative  pt-8 pb-6 bg-[#835782]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <img className="w-24" src="/images/logo-dd.png" />
            <h5 className="tracking-wide  my-4 text-white">
              With a passion for creativity and a commitment to excellence, we
              specialize in crafting bespoke events that leave lasting
              impressions. Whether you're planning an intimate gathering, a
              grand celebration, or a corporate event, our team of expert
              planners is dedicated to delivering flawless execution and
              unparalleled service.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-cente mt-2">
              <div className="w-full flex flex-col items-center text-center lg:w-4/12 px-4 ">
                <span className="block capitalize text-white text-sm font-semibold mb-2">
                  Information
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-white  block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white  block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white  block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Projects
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block capitalize text-white text-sm font-semibold mb-2">
                  Contact
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-white  block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      Phone
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white  block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white  block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Office address
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-white">Copyright © 2024Dream Wedding</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
