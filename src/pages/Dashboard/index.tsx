import React from 'react';
import { Container, CardContainer, Card, DetailsContainer, Details, AddDetailButton, Header } from './styles';
import logo from '../../assets/logo.svg';
import { FiTrash, FiPlus } from 'react-icons/fi';
import { useFinances } from '../../context/FinancesContext';

interface Item {
    name: string;
    categorie: string;
    date: Date;
    type: 'Gasto' | 'Ganho';
    value: number;
}

const Dashboard: React.FC = () => {
    const { total, gastos, ganhos, data, create } = useFinances();
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
                <Card>
                    <h1>Total</h1>
                    <span>R$ {total}</span>
                </Card>
            </CardContainer>
            <DetailsContainer>
                {data.map((item) => (
                    <Details key={item.id} isNegative>
                        <div>
                            <span>{item.name}</span>
                            <span>{item.categorie}</span>
                            <span>{item.date}</span>
                            <span>R$ {item.value}</span>
                        </div>
                        <button>
                            <FiTrash size={20} />
                        </button>
                    </Details>
                ))}
            </DetailsContainer>
            <AddDetailButton>
                <FiPlus size={30} />
                <span>Adicionar novo</span>
            </AddDetailButton>
        </Container>
    );
}

export default Dashboard;