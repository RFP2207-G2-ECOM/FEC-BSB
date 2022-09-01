import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage.jsx';


export const LocalStorageContext = createContext({
  outfits: [/* outfits*/[], []]
})

export const LocalStorageProvider = ({children}) => {
  const [ outfitList, setOutfitList ] = useLocalStorage('outfits', []);

  const value = { outfitList, setOutfitList }

  return(<LocalStorageContext.Provider value={value} >{children}</LocalStorageContext.Provider>)
}