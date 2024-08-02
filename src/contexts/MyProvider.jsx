// src/contexts/MyProvider.js

import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [value, setValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
