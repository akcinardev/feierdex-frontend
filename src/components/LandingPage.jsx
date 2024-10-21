import LandingInfo from "./LandingInfo";
import MainMap from "./MainMap";

const LandingPage = () => {
  return (
    <div className="container--wide">
      <div className="grid">
        <LandingInfo />
        <MainMap height="750" width="750" />
      </div>
    </div>
  );
};

export default LandingPage;
