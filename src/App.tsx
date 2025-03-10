import { HashRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, RegisterPage } from './pages/Auth/index';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import './index.scss';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/' element={<div>placeholder</div>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
};

export default App;