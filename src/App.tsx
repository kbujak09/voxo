import { HashRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, RegisterPage } from './pages/Auth/index';

import './index.scss';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<div></div>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
};

export default App;