import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface PropTypes {
    children: JSX.Element
}

interface ParamType {
    params: {
        qtdePortas: number,
        temPresente: number,
    }
    setParams?: Dispatch<SetStateAction<{
        qtdePortas: number;
        temPresente: number;
    }>>
}

const padrao = {
    qtdePortas: 3,
    temPresente: 1
}

const Context = createContext<ParamType>({params: padrao});

export function AppWrapper({children}: PropTypes) {
    const [params, setParams] = useState(padrao)

    return (
        <Context.Provider value={{params, setParams}}>
            {children}
        </Context.Provider>
    );
}

export function useAppContext() {
    return useContext(Context);
}
