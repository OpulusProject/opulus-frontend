import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '@/pages/Dashboard';
import { Transactions } from '@/pages/Transactions';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
