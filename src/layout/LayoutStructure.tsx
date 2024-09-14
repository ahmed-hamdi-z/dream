// Dependencies
import { FC, lazy, useEffect } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { useLocation } from "react-router-dom";

// Components
const About = lazy(() => import("@/components/about"));
const Cards = lazy(() => import("@/components/cards"));
const CountUpStats = lazy(() => import("@/components/counter"));
const Vision = lazy(() => import("@/components/vision"));
const Services = lazy(() => import("@/components/services"));
const Projects = lazy(() => import("@/components/projects"));
const Mission = lazy(() => import("@/components/mission"));
const TopButton = lazy(() => import("@/components/top-btn"));
const SwipeCarousel = lazy(() => import("@/components/carousel"));
const WhatsAppIcon = lazy(() => import("@/components/whatsapp-icon"));



// Pages
const LayoutStructure: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <main className={`main-layout direction-${direction} lang-${language}`}>
        <Row className="main-content">
          <Col xs="12">
            <div className="relative">
              <SwipeCarousel />
            </div>
            <Col className="w-full card-text ">
              <Cards />
            </Col>
          </Col>
          <Col xs="12">
            <Vision />
          </Col>
          <Col xs="12">
            <Mission />
          </Col>
          <Col className="bg-white" xs="12">
            <About />
          </Col>
          <Col xs="12">
            <Services />
          </Col>
          <Col className="bg-[#835782] mt-5" xs="12">
            <CountUpStats />
          </Col>
          <Col xs="12">
            <Projects />
          </Col>
          <Col xs="12">
            <Outlet />
          </Col>
        </Row>
      </main>
      <WhatsAppIcon />
      <TopButton />
    </>
  );
};

export default LayoutStructure;
