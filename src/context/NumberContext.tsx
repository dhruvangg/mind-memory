import React, { useState, useEffect, useContext, FC } from 'react';

type NumberContextValue = {
    number: number,
    updateNumber: (newValue: number) => void,
    level: number,
    levelUp: () => void,
    resetLevel: () => void
};

interface Props {
    children: React.ReactNode;
}

const NumberContext = React.createContext<NumberContextValue | undefined>(undefined)
const getLevel:number = parseInt(localStorage.getItem('level') as string)

const NumberProvider: FC<Props> = ({ children }) => {
    const [number, setNumber] = useState(0)
    const [level, setLevel] = useState(getLevel || 1)

    const updateNumber = (newValue: number) => {
        setNumber(newValue);
    }

    const levelUp = () => setLevel(level+1)
    const resetLevel = () => setLevel(1)

    useEffect(() => {
        localStorage.setItem('level', JSON.stringify(level))
    }, [level])
    
    return (
        <NumberContext.Provider value={{ number, updateNumber, level, levelUp, resetLevel }}>
            {children}
        </NumberContext.Provider>
    );
};

const useNumber = () => {
    const context = useContext(NumberContext);
    if (!context) {
        throw new Error('useMyContext must be used within a NumberContext');
    }
    return context;
};

export { NumberProvider, useNumber };