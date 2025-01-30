import {useState} from 'react'
import './FurnishingDetailsPopUp.css'

const FurnishingDetailsPopUp = ({close , items}) => {
    const [selectedItems, setSelectedItems] = useState(
        items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: 1,
          isChecked: false,
        }))
      );
    
      // Handle checkbox toggle
      const handleCheckboxChange = (id) => {
        setSelectedItems((prevState) =>
          prevState.map((item) =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
          )
        );
      };
    
      // Handle quantity change
      const handleQuantityChange = (id, increment) => {
        setSelectedItems((prevState) =>
          prevState.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: Math.max(1, item.quantity + increment),
                }
              : item
          )
        );
      };
    
      return (
        <div className='popupBoxMainDiv'><div className="popupBox">
        <div className="popupClose" onClick={()=>close(false)}>
          <em className="icon-close" >X</em>
        </div>
        <div className="popupHeading">
          <strong>Furnishing Details</strong>
          <p>Please Choose the Items From the List</p>
        </div>
        <div className="popupBody">
          <ul className="furnishingList">
            {selectedItems.map((item) => (
              <li key={item.id} className="furnishingItem">
                <input
                  type="checkbox"
                  id={`furnishing_type_${item.id}`}
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                  hidden
                />
                <label htmlFor={`furnishing_type_${item.id}`} className='labelIconBox'>
                  <div className="iconBox">
                    <img
                      className="img-responsive"
                      src= "../../src/assets/icon/ic_WaterPurifier.png"
                      alt={item.name}
                    />
                  </div>
                  <div className="itemBody">{item.name}</div>
                  {item.isChecked && (
                    <div className="quantityBox">
                      <button
                        className="btn minus"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="quantityInput"
                      />
                      <button
                        className="btn plus"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="popupSaveReset">
          <button onClick={()=>{
              setSelectedItems(items.map((item) => ({
                  id: item.id,
                  name: item.name,
                  quantity: 1,
                  isChecked: false,
                })))
          }} className='reset-all'>Reset All</button>
          <button onClick={()=>{
            
              console.log(selectedItems);
              close(false);
          }} className='save-all'>Save</button>
        </div>

      </div></div>
      );
}

  
export default FurnishingDetailsPopUp
