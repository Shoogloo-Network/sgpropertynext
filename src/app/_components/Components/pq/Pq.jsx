import  { useState } from 'react';
import Counter from './Counter';
import Parent from './context/Parent';
import Counter2 from './Counter2';
import InteractiveGrid from './InteractiveGrid';
import './pq.css'
import App from '../../speechtotext/App';
import ChatComponent from '../../chatbot/ChatComponent';

const DragAndDrop = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3','Item 4','Item 5','Item 6','Item 7', 'Item 8']);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('itemIndex', index);
  };

  const onDrop = (e) => {
    const draggedItemIndex = e.dataTransfer.getData('itemIndex');
    const targetIndex = e.target.dataset.index;
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          data-index={index}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{ padding: '8px', margin: '4px', border: '1px solid black' }}
        >
          {item}
        </div>
      ))}
      <Counter/>
      <Counter2/>
      <Parent/>
      <InteractiveGrid/>
      <App/>
      <ChatComponent/>
    </div>
  );
};

export default DragAndDrop;
