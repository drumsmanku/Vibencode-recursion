import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const renderAccordion = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div onClick={() => toggleAccordion(index)}>
              <h3>{item.name}</h3>
              {item.child.length > 0 && (
                <span>{openIndexes.includes(index) ? '▲' : '▼'}</span>
              )}
            </div>
            {openIndexes.includes(index) && item.child.length > 0 && (
              <Accordion data={item.child} />
            )}
          </li>
        ))}
      </ul>
    );
  };

  return renderAccordion(data);
};

export default Accordion;
