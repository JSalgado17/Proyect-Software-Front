import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages';
import Gastronomia from '../pages/Gastronomia';
import Mision from '../pages/Mision';
import Contacto from '../pages/Contacto';
import Quienes_Somos from '../pages/Quienes-Somos';
import Reuniones from '../pages/Reuniones';
import Balneario from '../pages/Balneario_y_spa';
import Habitaciones from '../pages/Habitaciones';
import Layout from '../Componentes/layouts/Layout';
import SigninPage from '../Components/Views/Signin/SigninPage';
import LoginPage from '../Components/Views/Login/LoginPage';
import Clientes from '../pages/Clientes';
import search from '../pages/search';

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/'  component={Home} />
                    <Route exact path='/Gastronomia' component={Gastronomia} />
                    <Route exact path='/Mision' component={Mision} />
                    <Route exact path='/Contacto' component={Contacto} />
                    <Route exact path='/Quienes-Somos' component={Quienes_Somos} />
                    <Route exact path='/Balneario-y-Spa' component={Balneario} />
                    <Route exact path='/Habitaciones-y-Suit' component={Habitaciones} />
                    <Route exact path='/Reuniones-y-Eventos' component={Reuniones} />
                    <Route exact path='/SigninPage' component={SigninPage}/>
                    <Route exact path='/Login' component={LoginPage}/>
                    <Route exact path='/Clientes' component={Clientes}/>
                    <Route exact path='/search' component={search}/>
                </Switch>
            </Layout>
        </Router>

    )
}