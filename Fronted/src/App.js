<<<<<<< HEAD
import { Provider } from 'react-redux';
=======
>>>>>>> 6474c9b60b2ea44f58c790400e3015b2598fdfe3
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from  './routers/AppRouter';

import store from './Store/Index';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/SigninPage';

function App() {
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Signin></Signin>
    </Provider>
=======
  <></>
>>>>>>> 6474c9b60b2ea44f58c790400e3015b2598fdfe3
  );
}

export default App;

