import React, { createContext, useCallback, useState, useMemo, useContext } from 'react';

interface Item {
    id: string;
    name: string;
    categorie: string;
    date: Date;
    type: 'Gasto' | 'Ganho';
    value: number;
}

interface FinancesContextData {
    total: number;
    gastos: number;
    ganhos: number;
    data: Item[];
    create(item: Item): Promise<void>;
}

interface FinancesState {
    gastos: number;
    ganhos: number;
    data: Item[];
}

const FinancesContext = createContext<FinancesContextData>({} as FinancesContextData);

const FinancesProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<Item[]>(() => {
        const data = localStorage.getItem('@MyFinances:data');

        if (data) {
            return JSON.parse(data);
        }

        return [];
    });

    const create = useCallback(async ({ name, type, date, value }) => {
        console.log({ name, type, date, value });
    }, []);

    const ganhos = useMemo(() => {
        const filterGanhos = data.reduce((accumulator, item) => {
            if (item.type === 'Ganho') {
                return accumulator + item.value;
            }

            return accumulator;
        }, 0);

        return filterGanhos;
    }, [data]);

    const gastos = useMemo(() => {
        const filterGastos = data.reduce((accumulator, item) => {
            if (item.type === 'Gasto') {
                return accumulator + item.value;
            }
            return accumulator;
        }, 0);

        return filterGastos;
    }, [data]);

    const total = useMemo(() => {
        return ganhos - gastos;
    }, [data]);

    return (
        <FinancesContext.Provider value={{ total, ganhos, gastos, data: data, create }}>
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