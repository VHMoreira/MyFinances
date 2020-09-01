import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/global';

import { FinancesProvider } from './context/FinancesContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <FinancesProvider>
        <Dashboard />
      </FinancesProvider>
    </>
  );
}

export default App;
