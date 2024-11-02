import SpecialDays from "./SpecialDays";

const RegionHolidayEvent = ({ regionData }) => {
  const { regional_holidays, countrywide_holidays, events } = regionData;
  const data = [
    { title: "Regionale", value: regional_holidays },
    { title: "Bundesfeiertage", value: countrywide_holidays },
    { title: "Regionale Veranstaltungen", value: events },
  ];

  return (
    <div className="region-holiday-event-info">
      <h2>Feiertage</h2>

      {data.map((item, i) => {
        return (
          item.value.length > 0 && (
            <SpecialDays key={i} title={item.title} value={item.value} />
          )
        );
      })}
    </div>
  );
};

export default RegionHolidayEvent;
