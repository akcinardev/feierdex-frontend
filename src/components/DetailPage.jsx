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
      <p className="region-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, aliquid
        inventore ipsam fuga consequatur est voluptatibus, cumque totam earum
        officia deleniti quos odio voluptatum quas aperiam consectetur natus
        voluptate in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam illo reiciendis tenetur dolore ipsam eum rem ipsum officia
        saepe doloribus voluptatibus perferendis dolor dolorem ex consequuntur
        quis unde, veritatis animi?
      </p>

      <h2>Holidays</h2>
      <ul className="region-holiday-list">
        {regionData.holidays.map((holiday, i) => {
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

      <h2>Regional Events</h2>
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

{
  /* <h1>{regionData.name.de} Region</h1>
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
      </ul> */
}
