import React, { Component, Fragment } from 'react';


  // const onSearchChange = (event) => {
  //     console.log(event.target.value);
  // }

  const SeachBox = ({searchfield, searchChange }) => {

    return (
      <div className='pa2'>
          <input className="pa3 ba b--green bg-lightest-blue" 
                  type="search" 
                  placeholder="search robots"
                  onChange={searchChange}/>
      </div>
    );
  
}

export default SeachBox;