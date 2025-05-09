import React, { createContext, FC, useState } from "react";
import { Data } from "../data/types";
import { dataArray } from '../data/data'
export const MainContext = createContext<any>(null);

interface ProviderProps {
    children: React.ReactNode;
}

export const MainProvider: FC<ProviderProps> = ({children}) => {

    const [activeDate, setActiveDate] = useState<Data>(dataArray[0])
    
    return (
        <MainContext.Provider value={{
            activeDate,
            setActiveDate,
            dataArray
        }}>
        {children}
        </MainContext.Provider>
    )
}