import { useState, createContext } from "react";


 export const LetrasContext = createContext();

const LetrasProvider = ({children}) => {
    const [alerta, setAlerta] = useState('');
    const busquedaLetra = (busqueda) => {
        console.log(busqueda);
    }
    return(
        <LetrasContext.Provider value={{alerta, setAlerta, busquedaLetra}}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}