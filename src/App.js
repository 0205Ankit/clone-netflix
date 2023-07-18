import { Route, Routes,Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect} from 'react';
import Fallback from './pages/fallback';
import useLoggedInUser from './hooks/log-in-user';
import Profile from './pages/profile';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';


const HomePage = lazy(() => import('./pages/homepage'));
const Login = lazy(() => import('./pages/log-in'));
const SignUp = lazy(() => import('./pages/sign-up'));
const Browse = lazy(() => import('./pages/browse'));
const ManageProfilePage = lazy(() => import('./pages/manage-profile'));
const ShowTrailer = lazy(() => import('./pages/showTrailer'));
const NotFound=lazy(()=>import('./pages/notFound'))


function App() {  
  const data=useSelector(state=>state.user.user)
  const authUser=localStorage.getItem('authUser')
  useLoggedInUser();
useEffect(()=>{
},[data])
  return (
    <Suspense fallback={<Fallback />}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={!authUser ?<HomePage />:<Navigate replace to='/profile'/>} /> 
          <Route path="/login" element={!authUser ?<Login />:<Navigate replace to='/profile'/>} />
          <Route path="/sign-up" element={!authUser ?<SignUp />:<Navigate replace to='/profile'/>} />
          <Route path="/profile" element={authUser?<Profile />:<Navigate replace to='/login'/>} />
          <Route path="/browse/*" element={authUser?<Browse />:<Navigate replace to='/login'/>} />
          <Route path="/manage-profile" element={authUser?<ManageProfilePage />:<Navigate replace to='/login'/>} />
          <Route path="/watch" element={authUser?<ShowTrailer />:<Navigate replace to='/login'/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
