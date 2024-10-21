import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { regionCode } = useParams();
  const [regionData, setRegionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRegionData = async () => {
      try {
        const data = await import(`../regions/${regionCode}.json`);
        setRegionData(data);
      } catch (err) {
        setError(`Error loading data for region ${regionCode}: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadRegionData();
  }, [regionCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{regionData.name.de} Region</h1>
      <h2>Holidays</h2>
      <ul>
        {regionData.holidays.map((holiday, i) => {
          return <li key={i}>{holiday.name.de}</li>;
        })}
      </ul>
      <h2>Events</h2>
      <ul>
        {regionData.events.map((event, i) => {
          return <li key={i}>{event.name.de}</li>;
        })}
      </ul>
    </div>
  );
};

export default DetailPage;
