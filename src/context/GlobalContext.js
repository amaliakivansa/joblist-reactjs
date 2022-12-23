import { React, createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(undefined);
  const [search, setSearch] = useState({
    description: "",
    location: "",
    fulltime: false,
  });
  const [checked, setChecked] = useState(false);
  let state = {
    search,
    setSearch,
    checked,
    setChecked,
    data,
    setData,
    setUser,
    user,
  };
  return (
    <GlobalContext.Provider value={{ state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
