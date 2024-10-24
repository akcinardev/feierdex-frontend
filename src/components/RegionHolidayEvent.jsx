import RegionalHolidays from "./RegionalHolidays";
import CountrywideHolidays from "./CountrywideHolidays";
import RegionalEvent from "./RegionalEvent";

const RegionHolidayEvent = ({ regionData }) => {
  return (
    <div className="region-holiday-event-info">
      <h2>Feiertage</h2>

      {regionData.regional_holidays.length > 0 && (
        <RegionalHolidays regionData={regionData} />
      )}

      {regionData.countrywide_holidays.length > 0 && (
        <CountrywideHolidays regionData={regionData} />
      )}

      {regionData.events.length > 0 && (
        <RegionalEvent regionData={regionData} />
      )}
    </div>
  );
};

export default RegionHolidayEvent;
