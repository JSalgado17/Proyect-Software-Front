import React from 'react'
import Slider from './inc/Slider';
//import Footer from '../Componentes/layouts/Footer'
import Footer from '../Componentes/layouts/Footer'

const Gastronomia = () => {
    return (
        <div className='Cuerpo'>
            <div className='ContainerS'>
                <Slider />
                <p>La casa del verdadero placer</p>
            </div>

            <h1 class='titleG'> Acerca de nuestra comida</h1>

            <div class='ContenedorG'>
                <div class='card'>
                    <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <h4>Comidas</h4>
                    <p>Lorem ipsum dolor sut amet, consectetur adisping elit, vel, excepture unde</p>
                    <a href='#Comidas'>Leer mas</a>
                </div>
                <div class='card'>
                    <img src="https://images.pexels.com/photos/667986/pexels-photo-667986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <h4>Bebidas</h4>
                    <p>Lorem ipsum dolor sut amet, consectetur adisping elit, vel, excepture unde</p>
                    <a href='#Bebidas'>Leer mas</a>
                </div>
                <div class='card'>
                    <img src="https://images.pexels.com/photos/709841/pexels-photo-709841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <h4>Postres</h4>
                    <p>Lorem ipsum dolor sut amet, consectetur adisping elit, vel, excepture unde</p>
                    <a href='#Postres'>Leer mas</a>
                </div>
            </div>
            <div class='ContenidoG'>
                <div style={{ display: 'flex', flexDirection: "column", height: '60%' }}>

                    <div class='TituloC'>
                        <div style={{ height: "40%", width: "100%" }}>
                            <h1 id='Comidas' style={{ textAlign: "center" }}>Comidas</h1>
                        </div>
                    </div>

                    <div  style={{ display: 'flex', flexWrap: "wrap", height: "50%", width: "100%" }}>
                        <div  style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                            <h5 style={{ textAlign: "center" }}>Aperitivos</h5>
                            <text style={{ textAlign: "center" }}>Anafre_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.100</text><br />
                            <text style={{ textAlign: "center" }}>Nachos de Pollo _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.150</text><br />
                            <text style={{ textAlign: "center" }}>Crema de Brocoli_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.80</text><br />
                            <text style={{ textAlign: "center" }}>Crema de Esparrago_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.80</text><br />
                        </div>
                        <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                            <h5 style={{ textAlign: "center" }}>Ensaladas</h5>
                            <text style={{ textAlign: "center" }}> Ensalada de Camarones _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.220</text><br />
                            <text style={{ textAlign: "center" }}>Ensalada de Pollo_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.140</text><br />
                            <text style={{ textAlign: "center" }}>Ensalada Mixta(Res y Pollo)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.160</text><br />
                            <text style={{ textAlign: "center" }}>Ensalada Cesar de Pollo_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.140</text><br />
                        </div>

                        <div style={{ display: 'flex', flexWrap: "wrap", height: "50%", width: "100%" }}>
                            <div  style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                <h5 style={{ textAlign: "center" }}>Cocteles</h5>
                                <text style={{ textAlign: "center" }}>Coctel de Camarones _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.255</text><br />
                                <text style={{ textAlign: "center" }}>Coctel de Camaron en Salsa Rosada _ _ _ _ _ _ _ _ _ _ _ L.245</text><br />
                                <text style={{ textAlign: "center" }}>Ceviche de Camaron_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.210</text><br />
                                <text style={{ textAlign: "center" }}>Crema de Esparrago_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.250</text><br />
                            </div>
                            <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                    <h5 style={{ textAlign: "center" }}>Carnes</h5>
                                    <text style={{ textAlign: "center" }}>Filete Tornado (Res y Camaron)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.370</text><br />
                                    <text style={{ textAlign: "center" }}>Filete Mignon_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.325</text><br />
                                    <text style={{ textAlign: "center" }}>Puyaso _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.320</text><br />
                                    <text style={{ textAlign: "center" }}>Filete a la pimienta _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.140</text><br />
                                </div>

                            <div style={{ display: 'flex', flexWrap: "wrap", height: "50%", width: "100%" }}>
                                <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                    <h5 style={{ textAlign: "center" }}>Platos Mixtos</h5>
                                    <text style={{ textAlign: "center" }}>Parrillada Paraiso (6 personas) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.1,480</text><br />
                                    <text style={{ textAlign: "center" }}>Parrillada Especial (6 personas) _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.950</text><br />
                                    <text style={{ textAlign: "center" }}>Parrillada (3 personas) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.700</text><br />
                                    <text style={{ textAlign: "center" }}>Plato Tipico_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.185</text><br />
                                </div>
                                <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                    <h5 style={{ textAlign: "center" }}>Carnes</h5>
                                    <text style={{ textAlign: "center" }}>Filete Tornado (Res y Camaron)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.370</text><br />
                                    <text style={{ textAlign: "center" }}>Filete Mignon_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.325</text><br />
                                    <text style={{ textAlign: "center" }}>Puyaso _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.320</text><br />
                                    <text style={{ textAlign: "center" }}>Filete a la pimienta _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.140</text><br />
                                </div>

                                <div class='TituloB'>
                                    <div style={{ height: "40%", width: "100%" }}>
                                        <h1 id='Bebidas' style={{ textAlign: "center" }}>Bebidas</h1>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexWrap: "wrap", height: "50%", width: "100%" }}>
                                    <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                        <h5 style={{ textAlign: "center" }}>Cocteles</h5>
                                        <text style={{ textAlign: "center" }}>Piña Colada_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.80</text><br />
                                        <text style={{ textAlign: "center" }}>Mojito _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.95</text><br />
                                        <text style={{ textAlign: "center" }}>Daiquiri_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.70</text><br />
                                        <text style={{ textAlign: "center" }}>Bloody Mary_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.85</text><br />
                                    </div>
                                    <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                        <h5 style={{ textAlign: "center" }}>Sin Alcohol</h5>
                                        <text style={{ textAlign: "center" }}>Gaseosas _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.45</text><br />
                                        <text style={{ textAlign: "center" }}>Agua _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.25</text><br />
                                        <text style={{ textAlign: "center" }}>Jugos Naturales_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.65</text><br />
                                        <text style={{ textAlign: "center" }}>Energizantes_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.80</text><br />
                                    </div>
                                </div>
                                <div class='TituloB'>
                                    <div style={{ height: "40%", width: "100%" }}>
                                        <h1 id='Postres' style={{ textAlign: "center" }}>Postres</h1>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: "wrap", height: "50%", width: "100%" }}>
                                    <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                        <h5 style={{ textAlign: "center" }}>Cocteles</h5>
                                        <text style={{ textAlign: "center" }}>Piña Colada_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.80</text><br />
                                        <text style={{ textAlign: "center" }}>Mojito _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.95</text><br />
                                        <text style={{ textAlign: "center" }}>Daiquiri_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.70</text><br />
                                        <text style={{ textAlign: "center" }}>Bloody Mary_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.85</text><br />
                                    </div>
                                    <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                        <h5 style={{ textAlign: "center" }}>Sin Alcohol</h5>
                                        <text style={{ textAlign: "center" }}>Gaseosas _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.45</text><br />
                                        <text style={{ textAlign: "center" }}>Agua _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.25</text><br />
                                        <text style={{ textAlign: "center" }}>Jugos Naturales_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.65</text><br />
                                        <text style={{ textAlign: "center" }}>Energizantes_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.80</text><br />
                                    </div>
                                    <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                        <h5 style={{ textAlign: "center" }}>Sin Alcohol</h5>
                                        <text style={{ textAlign: "center" }}>Gaseosas _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.45</text><br />
                                        <text style={{ textAlign: "center" }}>Agua _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.25</text><br />
                                        <text style={{ textAlign: "center" }}>Jugos Naturales_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.65</text><br />
                                        <text style={{ textAlign: "center" }}>Energizantes_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.80</text><br />
                                    </div>
                                    <div style={{ width: "45%", flexDirection: "column", margin: "1%" }}>
                                        <h5 style={{ textAlign: "center" }}>Sin Alcohol</h5>
                                        <text style={{ textAlign: "center" }}>Gaseosas _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.45</text><br />
                                        <text style={{ textAlign: "center" }}>Agua _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ L.25</text><br />
                                        <text style={{ textAlign: "center" }}>Jugos Naturales_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.65</text><br />
                                        <text style={{ textAlign: "center" }}>Energizantes_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _L.80</text><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Gastronomia