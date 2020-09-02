import React, { useCallback, useMemo, useState } from 'react';
import { Container, CardContainer, Card, DetailsContainer, Details, AddDetailButton, Header, DetailsForm } from './styles';
import logo from '../../assets/logo.svg';
import { FiTrash, FiPlus, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useFinances } from '../../context/FinancesContext';
import formatDate from '../../utils/formatDate';

interface Item {
    id: string;
    name: string;
    categorie: string;
    date: Date;
    type: 'Gasto' | 'Ganho';
    value: number;
}

const Dashboard: React.FC = () => {
    const { total, gastos, ganhos, data, create, deleteItem } = useFinances();
    const [isAddingNewItem, setIsAddingNewItem] = useState(false);
    const [formData, setFormData] = useState({ name: '', categorie: '', date: new Date(), type: 'Ganho', value: 0, id: '' } as Item);

    const handleCreateItem = useCallback(() => {
        console.log(formData.date);
        create({ name: formData.name, categorie: formData.categorie, date: formData.date || new Date(), type: formData.type, value: Number(formData.value), id: '' });
    }, [create, formData]);

    const handleShowAddingForm = useCallback(() => {
        setIsAddingNewItem(true);
    }, []);

    const handleFormData = useCallback((value: any, field: String) => {
        setFormData({ ...formData, [`${field}`]: value });
        console.log(formData);
    }, [formData]);

    const handleCloseAddingForm = useCallback(() => {
        setIsAddingNewItem(false);
    }, []);

    const formatedData = useMemo(() => {
        return data.map((item) => {
            return { ...item, date: formatDate(item.date) }
        });
    }, [data]);

    return (
        <Container>
            <Header>
                <img src={logo} alt="MyFinances" /> <span>MyFinances</span>
            </Header>
            <CardContainer>
                <Card>
                    <h1>Ganhos</h1>
                    <span>R$ {ganhos}</span>
                </Card>
                <Card isNegative>
                    <h1>Gastos</h1>
                    <span>R$ {gastos}</span>
                </Card>
                <Card isNegative={total < 0}>
                    <h1>Total</h1>
                    <span>R$ {total}</span>
                </Card>
            </CardContainer>
            <DetailsContainer>
                {formatedData.map((item) => (
                    <Details key={item.id} isNegative={item.type === 'Gasto'}>
                        <div>
                            <span>{item.name}</span>
                            <span>{item.categorie}</span>
                            <span>{item.date}</span>
                            <span>R$ {item.value}</span>
                        </div>
                        <button onClick={() => deleteItem(item.id)}>
                            <FiTrash size={20} />
                        </button>
                    </Details>
                ))}
                {isAddingNewItem &&
                    <DetailsForm>
                        <div>
                            <select value={formData.type} onChange={(event) => handleFormData(event.target.value, 'type')}>
                                <option value="Ganho">Ganho</option>
                                <option value="Gasto">Gasto</option>
                            </select>
                            <input placeholder='Nome' onChange={(event) => handleFormData(event.target.value, 'name')} />
                            <input placeholder='Categoria' onChange={(event) => handleFormData(event.target.value, 'categorie')} />
                            <input placeholder='Data' onChange={(event) => handleFormData(event.target.value, 'date')} type='date' />
                            <input placeholder='Valor' onChange={(event) => handleFormData(event.target.value, 'value')} />
                        </div>
                        <button onClick={handleCreateItem}>
                            <FiCheckCircle size={20} />
                        </button>
                        <button onClick={handleCloseAddingForm}>
                            <FiXCircle size={20} />
                        </button>
                    </DetailsForm>}
            </DetailsContainer>
            <AddDetailButton onClick={handleShowAddingForm}>
                <FiPlus size={30} />
                <span>Adicionar novo</span>
            </AddDetailButton>
        </Container>
    );
}

export default Dashboard;