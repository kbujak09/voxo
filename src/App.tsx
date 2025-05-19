import { HashRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, RegisterPage } from './pages/Auth/index';
import ProtectedRoute from './components/ProtectedRoute/index';
import { AuthProvider } from './context/AuthProvider';
import MainPage from './pages/Main/index';
import ChatPage from './pages/Chat';

import './index.scss';

const App = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/chat/:chatId' element={<ChatPage/>}/>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </HashRouter>
  )
};

export default App;