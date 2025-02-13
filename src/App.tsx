import { HashRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/Auth/index';

import './index.scss';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
};

export default App;