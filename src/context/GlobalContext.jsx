import { createContext, useState } from "react";

const GlobalContext = createContext({})

export const GlobalProvider = ({children} ) => {
  const [searchText, setSearchText] = useState('');
    return (
        <GlobalContext.Provider value={{
           searchText, setSearchText
           
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext

