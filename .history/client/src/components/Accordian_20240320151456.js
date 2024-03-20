//Yes sir, Answer to this problem is Recursion.
import React from 'react';

const Accordion = ({ data }) => {
  const renderAccordion = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <h3>{item.name}</h3>
              {item.child.length > 0 && (
                <Accordion data={item.child} />
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return renderAccordion(data);
};

export default Accordion;
