const RegionInfo = ({ regionData }) => {
  return (
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
  );
};

export default RegionInfo;
