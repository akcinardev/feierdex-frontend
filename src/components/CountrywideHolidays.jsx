const CountrywideHolidays = ({ regionData }) => {
  return (
    <div>
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
    </div>
  );
};

export default CountrywideHolidays;
