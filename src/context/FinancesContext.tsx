import React, { createContext, useCallback, useState, useMemo, useContext } from 'react';
import { uuid } from 'uuidv4';

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
    create(item: Item): void;
    deleteItem(itemId: string): void;
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

    const deleteItem = useCallback((itemId: string) => {
        const newData = data.filter((item) => item.id !== itemId);

        localStorage.setItem('@MyFinances:data', JSON.stringify(newData));

        setData(newData);
    }, [data]);


    const create = useCallback(({ name, categorie, type, date, value }: Item) => {
        const newData = [...data, { id: uuid(), name, categorie, type, date, value }];

        localStorage.setItem('@MyFinances:data', JSON.stringify(newData));

        setData(newData);
    }, [data]);

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
    }, [ganhos, gastos]);

    return (
        <FinancesContext.Provider value={{ total, ganhos, gastos, data: data, create, deleteItem }}>
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