// // setup data layer
// // We need this to track the basket
// import React, {createContext, useContext, useReducer } from 'react';

// //DATA LAYER
// export const StateContext = createContext();


// //BUILDING A PROVIDER
// export const StateProvider =({ reducer, initialState, children}) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
// </StateContext.Provider>
// );

// //Using it inside of a component
// export const useStateValue = () => useContext(StateContext);

// export default StateProvider;

