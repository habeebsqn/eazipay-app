import classes from "./LandingPage.module.css";
import LandingPageNav from "../components/utilities/LandingPageNav";
import ScreenOne from "../components/utilities/ScreenOne";
import ScreenTwo from "../components/utilities/ScreenTwo";
import ScreenThree from "../components/utilities/ScreenThree";
import Footer from "../components/utilities/Footer";
import ScreenFour from "../components/utilities/ScreenFour";
import { Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid className={classes["landing-page"]}>
      <div className={classes["landing-page-wrapper"]}>
        <ScreenOne>
          <LandingPageNav />
        </ScreenOne>
        <ScreenTwo />
        <ScreenThree />
        <Footer />
        <ScreenFour />
      </div>
    </Container>
  );
};

export default LandingPage;
