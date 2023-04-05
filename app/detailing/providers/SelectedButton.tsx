'use client'

import { useState, createContext } from "react";

export const selectedButtonContext = createContext({
  selected: "",
  setSelected: (value: string) => {},
});

const SelectedButton = (props: any) => {
  const [selected, setSelected] = useState('Maintenance');

  return (
    <selectedButtonContext.Provider
      value={{selected, setSelected}}
    >
      {props.children}
    </selectedButtonContext.Provider>
  )
}

export default SelectedButton;