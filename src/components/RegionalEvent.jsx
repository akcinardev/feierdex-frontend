const RegionalEvent = ({ regionData }) => {
  return (
    <div>
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

export default RegionalEvent;
