import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage.jsx';


export const LocalStorageContext = createContext({
  outfits: [/* outfits*/[], []],
  q_helpful: [],
  a_helpful: [],
  r_helpful: [],
})

export const LocalStorageProvider = ({children}) => {
  const [ outfitList, setOutfitList ] = useLocalStorage('outfits', []);
  const [ q_helpful, setQ_Helpful] = useLocalStorage('q_helpful', []);
  const [ a_helpful, setA_Helpful] = useLocalStorage('a_helpful', []);
  const [ r_helpful, setR_Helpful] = useLocalStorage('r_helpful', []);

  const value = {
    outfitList,
    setOutfitList,
    q_helpful,
    setQ_Helpful,
    a_helpful,
    setA_Helpful,
    r_helpful,
    setR_Helpful
  }

  return(<LocalStorageContext.Provider value={value} >{children}</LocalStorageContext.Provider>)
}