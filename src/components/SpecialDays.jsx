import moment from "moment";

function formatDate(dateString) {
  return moment(dateString).format("DD.MM.YYYY");
}

const SpecialDays = ({ regionData, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul className="special-day-list">
        {regionData.map((item, i) => {
          return (
            <li key={i} className="special-day-list-item">
              <div>
                <div className="special-day-title">
                  <h4 className="special-day-name">
                    {item.name.de} ({formatDate(item.date)})
                  </h4>
                </div>
                <p className="description">{item.description.de}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpecialDays;
