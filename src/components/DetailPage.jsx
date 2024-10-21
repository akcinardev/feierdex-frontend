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
    <div className="container">
      <h1 className="region-name">{regionData.name.de}</h1>
      <div className="region-infos">
        <p className="region-capital">
          <strong>Hauptstadt:</strong> {regionData.info.capital}
        </p>
        <p className="region-population">
          <strong>Bevölkerung:</strong> {regionData.info.population}
        </p>
        <p className="region-area">
          <strong>Fläche:</strong> {regionData.info.area}
        </p>
        <p className="region-major-cities">
          <strong>Größte Städte:</strong>{" "}
          {regionData.info.major_cities.join(", ")}
        </p>
        <p className="region-landmarks">
          <strong>Berühmte Sehenswürdigkeiten:</strong>{" "}
          {regionData.info.famous_landmarks.map((landmark) => {
            return landmark.en + ", ";
          })}
        </p>
      </div>
      <p className="region-description">{regionData.info.description.de}</p>

      <h2>Feiertage</h2>
      <h3>Regionale</h3>
      <ul className="region-holiday-list">
        {regionData.regional_holidays.map((holiday, i) => {
          return (
            <li key={i} className="region-holiday-list-item">
              <div>
                <h4 className="region-holiday-name">
                  {i + 1}. {holiday.name.de}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>

      <h3>Bundesfeiertage</h3>
      <ul className="region-holiday-list">
        {regionData.countrywide_holidays.map((holiday, i) => {
          return (
            <li key={i} className="region-holiday-list-item">
              <div>
                <h4 className="region-holiday-name">
                  {i + 1}. {holiday.name.de}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>

      <h2>Regionale Veranstaltungen</h2>
      <ul className="region-event-list">
        {regionData.events.map((event, i) => {
          return (
            <li key={i} className="region-holiday-list-item">
              <div>
                <h4 className="region-event-name">
                  {i + 1}. {event.name.de}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailPage;
