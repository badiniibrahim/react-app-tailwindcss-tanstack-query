import { BrowserRouter } from 'react-router-dom';

import './i18n';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
