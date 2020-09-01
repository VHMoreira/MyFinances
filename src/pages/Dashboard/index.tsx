import React from 'react';
import { Container, CardContainer, Card, DetailsContainer, Details, AddDetailButton } from './styles';
import { FiTrash, FiPlus } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <CardContainer>
                <Card>
                    <h1>Ganhos</h1>
                    <span>R$ 2000,00</span>
                </Card>
                <Card isNegative>
                    <h1>Perdas</h1>
                    <span>R$ 1000,00</span>
                </Card>
                <Card>
                    <h1>Total</h1>
                    <span>R$ 1000,00</span>
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