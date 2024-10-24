import SpecialDays from "./SpecialDays";

const RegionHolidayEvent = ({ regionData }) => {
  return (
    <div className="region-holiday-event-info">
      <h2>Feiertage</h2>

      {regionData.regional_holidays.length > 0 && (
        <SpecialDays
          regionData={regionData.regional_holidays}
          title={"Regionale"}
        />
      )}

      {regionData.countrywide_holidays.length > 0 && (
        <SpecialDays
          regionData={regionData.countrywide_holidays}
          title={"Bundesfeiertage"}
        />
      )}

      {regionData.events.length > 0 && (
        <SpecialDays
          regionData={regionData.events}
          title={"Regionale Veranstaltungen"}
        />
      )}
    </div>
  );
};

export default RegionHolidayEvent;
