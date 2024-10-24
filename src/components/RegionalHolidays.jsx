import DateFormatter from "../utils/dateFormatter";

const RegionalHolidays = ({ regionData }) => {
  return (
    <div>
      <h3>Regionale</h3>
      <ul className="region-holiday-list">
        {regionData.regional_holidays.map((holiday, i) => {
          return (
            <li key={i} className="region-holiday-list-item">
              <div>
                <div className="holiday-title">
                  <h4 className="region-holiday-name">
                    {holiday.name.de} ({DateFormatter(holiday.date)})
                  </h4>
                </div>
                <p className="description">{holiday.description.de}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RegionalHolidays;
