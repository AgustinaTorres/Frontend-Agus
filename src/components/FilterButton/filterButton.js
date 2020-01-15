import React from 'react';

const FilterButton = (props) => {
    return(
        <div className="ui compact menu mr-5">
        <div role="listbox" aria-expanded="false" className="ui item simple dropdown" tabindex="0">
          <div className="text" role="alert" aria-live="polite" aria-atomic="true">{props.filter.name}</div>
          <i aria-hidden="true" className="dropdown icon"></i>

          <div className="menu transition">
              {props.filter.options.map((item)=> {
                  return(
                        <div
                            //style="pointer-events:all"
                            role="option"
                            aria-checked="false"
                            aria-selected="true"
                            className="selected item">
                            <span className="text">{item}</span>
                        </div>
                    )
              })}
          </div>

        </div>
      </div>
    )};

export default FilterButton;