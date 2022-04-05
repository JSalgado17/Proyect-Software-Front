import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fileimport {DateRangePicker} from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { makeStyles, Typography, InputBase, Button, colors } from '@material-ui/core';
import Footer from '../Componentes/layouts/Footer'
import { useHistory } from 'react-router-dom';
import { People } from "@material-ui/icons"
import Habitacion from '../assetts/Habitacion.jpeg';
const selectionRange = {
    startDate: new Date(2021, 3, 10),
    endDate: new Date(2021, 3, 10),
    key: "selection"
}

const DatePicker = () => {
    const classes = useStyle()
    const history = useHistory()
    const handleSelect = () => { }
    return (

        <main>
        <body>
                    
            <div className={classes.img} style={{ height: "50%", width: "100%" }}>
                <img src={Habitacion} style={{ height: "125%", width: "100%" }} />
                <p className='TextoCliente'>Tu nuevo hogar te espera</p>
            </div>
            
            <div className={classes.root} >
            <div className='Reservacion'>
                <p>Consulta las fechas y reserva tu Habitacion</p>
                </div>

                <DateRangePicker ranges={[selectionRange]}
                    onChange={handleSelect}
                />
            
            
                
                <div className={classes.inputSection}>
                    <Typography variant="h5">Huespedes</Typography>
                    <div className={classes.people}>
                        <InputBase placeholder="Cantidad..."
                            inputProps={{ className: classes.input }}
                        />
                        <People />
                    </div>
                    <Button onClick={() => history.push("/search")}>Buscar Habitaciones</Button>
                </div>
                <div className={classes.foot}>
               <Typography variant='subtitle1' gutterBottom>
               2021 Copyright by @Hoteleria/Reservacion    
               </Typography>
               <Typography variant='subtitle1' gutterBottom>
               Privacy . Terminos . Sitemap    
               </Typography>
           </div>

            </div>
           

           

        </body>
      
        
        
        
          
</main>
          

    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "65vh",
        left: "30vw",
        [theme.breakpoints.down("sm")]: {
            top: "16vh",
            left: 0,
        }
    },
    foot:{
        borderTop: "1px solid",
        textAlign: "center",
        fontStyle: "italic",
        marginTop: theme.spacing(2),
        background: "whitesmoke"
    },
    inputSection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        "& h5": {
            textAlign: "center"
        },
        "& button:hover": {
            backgroundColor: "rgba(255,103,31,0.4)",
            color: "#fff"
        }
    },
    people: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "6vw",
        border: "1px solid #ccc",
        margin: theme.spacing(0, 2, 2, 0),
        padding: theme.spacing(1),
    }

}))

export default DatePicker