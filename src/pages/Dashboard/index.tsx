import React from 'react';
import { Container, CardContainer, Card, DetailsContainer, Details, AddDetailButton, Header } from './styles';
import logo from '../../assets/logo.svg';
import { FiTrash, FiPlus } from 'react-icons/fi';
import { useFinances } from '../../context/FinancesContext';

const Dashboard: React.FC = () => {
    const { total, gastos, ganhos, create } = useFinances();
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
                <Details isNegative>
                    <div>
                        <span>GoStack</span>
                        <span>Curso Online</span>
                        <span>05/09/2020</span>
                        <span>R$ 1900,00</span>
                    </div>
                    <button>
                        <FiTrash size={20} />
                    </button>
                </Details>
                <Details>
                    <div>
                        <span>Trabalho</span>
                        <span>Salario</span>
                        <span>05/09/2020</span>
                        <span>R$ 400,00</span>
                    </div>
                    <button>
                        <FiTrash size={20} />
                    </button>
                </Details>
                <Details>
                    <div>
                        <span>Auxilio</span>
                        <span>Auxilio Emergencial</span>
                        <span>05/09/2020</span>
                        <span>R$ 100,00</span>
                    </div>
                    <button>
                        <FiTrash size={20} />
                    </button>
                </Details>
            </DetailsContainer>
            <AddDetailButton>
                <FiPlus size={30} />
                <span>Adicionar novo</span>
            </AddDetailButton>
        </Container>
    );
}

export default Dashboard;