import React, { useState } from 'react';

export const MutantsContext = React.createContext({

});

export default props => {
  const [mutantList, setMutantList] = useState([
  ]);


  return (
      <MutantsContext.Provider value={[mutantList, setMutantList]}>
          {props.children}
      </MutantsContext.Provider>
  );
};
