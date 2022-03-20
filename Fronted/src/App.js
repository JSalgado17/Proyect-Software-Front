import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from  './routers/AppRouter';
import store from './Store/Index';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/SigninPage';
import Footer from './Componentes/layouts/Footer';

function App() {
  return (
    
      <AppRouter />
       
    );
}



export default App;

