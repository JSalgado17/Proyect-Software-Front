import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter';
import store from './Store/Index';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Footer from './Componentes/layouts/Footer';
import Login from './Components/Views/Login/LoginPage';

function App() {
  return (

    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
    
  );
}



export default App;

