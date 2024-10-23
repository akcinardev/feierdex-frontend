const RegionHeading = ({ regionData }) => {
  return (
    <div className="region-heading">
      <h1 className="region-name">{regionData.name.de}</h1>
      <img src={regionData.info.flag_url} className="region-flag"></img>
    </div>
  );
};

export default RegionHeading;
