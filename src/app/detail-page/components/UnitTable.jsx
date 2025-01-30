
import './UnitTable.css';

const UnitTable = ( { data } ) => {
  
  return (
    <div className="unit-table-container">
      <h1>Unit Types and Prices</h1>
      <table className="unit-table">
        <thead>
          <tr>
            <th>Unit Type</th>
            <th>Area</th>
            <th>New Home Price</th>
          </tr>
        </thead> 
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.unitType}</td>
              <td>{item.area}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTable;
