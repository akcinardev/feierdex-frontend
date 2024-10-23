const RegionDetail = ({ regionData }) => {
  return (
    <div className="region-detail-info">
      <p className="region-description">{regionData.info.description.de}</p>
      <br />
      <p className="region-economic">
        {regionData.info.economic_highlights.de}
      </p>
      <br />
      <p className="region-cultural">{regionData.info.cultural_aspects.de}</p>
    </div>
  );
};

export default RegionDetail;
