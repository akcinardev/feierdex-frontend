const RegionHolidayEvent = ({ regionData }) => {
  return (
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
  );
};

export default RegionHolidayEvent;
