import React, { createContext, useCallback, useState, useMemo, useContext } from 'react';

interface newItem {
    name: string;
    type: string;
    date: Date;
    value: number;
}

interface FinancesContextData {
    total: number;
    gastos: number;
    ganhos: number;
    create(item: newItem): Promise<void>;
}

const FinancesContext = createContext<FinancesContextData>({} as FinancesContextData);

const FinancesProvider: React.FC = ({ children }) => {
    const [gastos, setGastos] = useState(1000);
    const [ganhos, setGanhos] = useState(2000);

    const create = useCallback(async ({ name, type, date, value }) => {
        console.log({ name, type, date, value });
    }, []);

    const total = useMemo(() => {
        return ganhos - gastos;
    }, [gastos, ganhos]);

    return (
        <FinancesContext.Provider value={{ total, ganhos, gastos, create }}>
            {children}
        </FinancesContext.Provider>
    );
}

const useFinances = () => {
    const context = useContext(FinancesContext);

    if (!context) {
        throw new Error('useFinances must be used within an FinancesProvider');
    }

    return context;
};


export { FinancesProvider, useFinances };