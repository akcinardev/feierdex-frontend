import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="region-name">{regionData.name.de}</h1>

        <img src={regionData.info.flag_url} className="region-flag"></img>

        <div className="region-info">
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

        <div className="region-detail-info">
          <p className="region-description">{regionData.info.description.de}</p>
          <br />
          <p className="region-economic">
            {regionData.info.economic_highlights.de}
          </p>
          <br />
          <p className="region-cultural">
            {regionData.info.cultural_aspects.de}
          </p>
        </div>

        <div className="region-holiday-event-info">
          <h2>Feiertage</h2>
          <h3>Regionale</h3>
          <ul className="region-holiday-list">
            {regionData.regional_holidays.map((holiday, i) => {
              return (
                <li key={i} className="region-holiday-list-item">
                  <div>
                    <div className="holiday-title">
                      <h4 className="region-holiday-name">
                        {holiday.name.de} ({holiday.date})
                      </h4>
                    </div>
                    <p className="description">{holiday.description.de}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <h3>Bundesfeiertage</h3>
          <ul className="countrywide-holiday-list">
            {regionData.countrywide_holidays.map((holiday, i) => {
              return (
                <li key={i} className="region-holiday-list-item">
                  <div>
                    <div className="holiday-title">
                      <h4 className="region-holiday-name">
                        {holiday.name.de} ({holiday.date})
                      </h4>
                    </div>
                    <p>{holiday.description.de}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <h2>Regionale Veranstaltungen</h2>
          <ul className="region-event-list">
            {regionData.events.map((event, i) => {
              return (
                <li key={i} className="region-event-list-item">
                  <div>
                    <div className="event-title">
                      <h4 className="region-event-name">
                        {event.name.de} ({event.date})
                      </h4>
                    </div>
                    <p>{event.description.de}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
