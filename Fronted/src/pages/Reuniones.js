import React from 'react'
import Footer from '../Componentes/layouts/Footer'
import '../Componentes/css/reunion.css'

const Reuniones = () => {
    return (
        <body>
                <center><h1 className='h1Q'>Reuniones y Eventos</h1></center>
                <div className='grid_vision'>

                    {/* #1 */}
                    <div className='grid_vision_reunion'>
                        <div>
                            <picture>
                                <source srcSet='../Componentes/img/imagen1.png' media='max-width: 1025px' />
                                <source srcSet='../Componentes/img/imagen1.png' media='min-width: 600px' />
                                <img className='image1' src='https://r9x5w2p7.rocketcdn.me/wp-content/uploads/2020/03/des-artistes-1.jpg' alt='image1' />
                            </picture>
                        </div>

                        <div>
                            <center><h3>Entorno multifuncional</h3></center>
                            <p>
                            Elegante, agradable y espacioso y tiene mucho que ofrecer, salones independientes ideales para tus eventos privados. Reuniones de negocios, conferencias, gala, cena, presentaciones, y muchos mas
                            </p>
                        </div>
                    </div>

                        {/* #2 */}
                    <div className='grid_vision_evento'>
                        <div>
                            <center><h3>Servicio a la medida</h3></center>
                            <p>
                            El Salón se puede alquilar por medio día odurante todo el día, y se establecerá de acuerdo a sus solicitudes. Ningún detalle será ser pasado por alto, desde el equipo técnico y papelería para hostelería.
                            </p>
                        </div>

                        <div>
                            <picture>
                                <source srcSet='../Componentes/img/imagen1.png' media='max-width: 1025px' />
                                <source srcSet='../Componentes/img/imagen1.png' media='min-width: 600px' />
                                <img className='image2' src='https://r9x5w2p7.rocketcdn.me/wp-content/uploads/2020/03/des-artistes-2.jpg' alt='image1' />
                            </picture>
                        </div>
                    </div>

                    {/* #3 */}
                    <div className='grid_vision_reunion'>
                        <div>
                            <picture>
                                <source srcSet='../Componentes/img/imagen1.png' media='max-width: 1025px' />
                                <source srcSet='../Componentes/img/imagen1.png' media='min-width: 600px' />
                                <img className='image1' src='https://r9x5w2p7.rocketcdn.me/wp-content/uploads/2020/03/des-artistes-3.jpg' alt='image1' />
                            </picture>
                        </div>

                        <div>
                            <center><h3>Evento Exitoso</h3></center>
                            <p>
                            Todos sus invitados pueden utilizar un aparcamiento privado, y será acogido de la mejor manera posible manera. Tenga la seguridad de que recordarán un evento tan exitoso durante mucho tiempo.
                            </p>
                        </div>
                    </div>

                       {/* #4 */}
                       <div className='grid_vision_evento'>
                        <div>
                            <center><h3>Material técnico estándar incluido</h3></center>
                            <ul>
                                <li>Material de papeleria(bloques y lápices)</li>
                                <li>Wifi</li>
                                <li>Pantalla(Pantalla de proyección)</li>
                                <li>Proyector</li>
                                <li>Portafolio</li>
                            </ul>
                        </div>

                        <div>
                            <center><h3>Material técnico extra</h3></center>
                                <ul>
                                    <li>Iluminar desde el fondo</li>
                                    <li>Sistema de audio y micrófonos</li>
                                    <li>Pantalla(Pantalla de proyección)</li>
                                    <li>reproductor de CD o DVD</li>
                                    <li>Ordenador portátil</li>
                                </ul>
                        </div>
                    </div>
                </div>
        </body>
    )
}
export default Reuniones