import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Accounts } from '@/pages/Accounts';
import { Overview } from '@/pages/Overview';
import { Transactions } from '@/pages/Transactions';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
