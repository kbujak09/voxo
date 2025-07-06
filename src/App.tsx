import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthProvider } from '@/context/AuthProvider';
import ProtectedRoute from '@/components/ProtectedRoute';
import Loading from '@/components/Loading';

const LoginPage = lazy(() => import('@/pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/Auth/RegisterPage'));
const MainPage = lazy(() => import('@/pages/Main/MainPage'));
const ChatPage = lazy(() => import('@/pages/Chat/ChatPage'));

import './index.scss';

const App = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Suspense fallback={<Loading/>}>
          <Routes>
            {/* public */}
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>

            {/* protected */}
            <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<Navigate to="/chats" replace />} />
              <Route path='/chats' element={<MainPage page="Chats" />} />
              <Route path='/people' element={<MainPage page="People" />} />
              <Route path='/menu' element={<MainPage page="Menu" />} />
              <Route path='/chat/:chatId' element={<ChatPage/>}/>
            </Route>

            {/* catch-all */}
            <Route path='*' element={<Navigate to={'/login'} replace/>}/>

          </Routes>
        </Suspense>
      </AuthProvider>
    </HashRouter>
  )
};

export default App;