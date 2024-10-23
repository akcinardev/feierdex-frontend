import LandingInfo from "./LandingInfo";
import MainMap from "./MainMap";

const LandingPage = () => {
  return (
    <div className="container--wide">
      <div className="landing-page-grid">
        <div className="landing-info-div">
          <LandingInfo />
        </div>
        <div className="main-map-div">
          <MainMap height="750" width="750" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
