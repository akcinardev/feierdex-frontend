import { useEffect, useState } from "react";

const DetailPage = ({ regionCode }) => {
  const [regionData, setRegionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRegionData = async () => {
      try {
        const data = await import(`../regions/${regionCode}.json`);
        setRegionData(data);
      } catch (err) {
        setError(`Error loading data for region ${regionCode}: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadRegionData();
  }, [regionCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{regionData.name.en} Region</h1>
    </div>
  );
};

export default DetailPage;
