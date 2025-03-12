import { HashRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, RegisterPage } from './pages/Auth/index';
import ProtectedRoute from './components/ProtectedRoute/index';
import { AuthProvider } from './context/AuthProvider';

import './index.scss';

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  )
};

export default App;