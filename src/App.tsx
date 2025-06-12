import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

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
              <Route path='/' element={<Navigate to="/chats" replace />} />
              <Route path='/chats' element={<MainPage page="Chats" />} />
              <Route path='/people' element={<MainPage page="People" />} />
              <Route path='/menu' element={<MainPage page="Menu" />} />
              <Route path='/chat/:chatId' element={<ChatPage/>}/>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </HashRouter>
  )
};

export default App;