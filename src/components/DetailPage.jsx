import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RegionHeading from "./RegionHeading";
import RegionInfo from "./RegionInfo";
import RegionDetail from "./RegionDetail";
import RegionHolidayEvent from "./RegionHolidayEvent";
import Loading from "./Loading";

const DetailPage = () => {
  const { regionCode } = useParams();
  const [regionData, setRegionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRegionData = async () => {
      try {
        setLoading(true);
        const data = await import(`../regions/${regionCode}.json`);
        setRegionData(data);
        setLoading(false);
      } catch (err) {
        setError(`Error loading data for region ${regionCode}: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    loadRegionData();
  }, [regionCode]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <RegionHeading regionData={regionData} />
        <RegionInfo regionData={regionData} />
        <RegionDetail regionData={regionData} />
        <RegionHolidayEvent regionData={regionData} />
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
