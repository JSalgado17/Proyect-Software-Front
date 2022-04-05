import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
    { id: 1, Nombre_Cliente: "Jorge Salgado", Estado: "Hospedado" },
    { id: 2, Nombre_Cliente: "Wilmer Velazques", Estado: "Ausente" },
    { id: 3, Nombre_Cliente: "Dina Guerrero", Estado: "Hospedado" },
    { id: 4, Nombre_Cliente: "Andrea Mejia", Estado: "Ausente" },
    { id: 5, Nombre_Cliente: "Maria Aviles", Estado: "Hospedado" },
    { id: 6, Nombre_Cliente: "Gracia Maria", Estado: "Ausente" },
]

class App extends React.Component {
    state = {
        data: data,
        form:{
            id:'',
            Nombre_Cliente:'',
            Estado:''
        },
        modalInsertar: false,
        modalEditar:false,
    };

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        }

        );
    }


mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
}

ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
}

mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
}

ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
}

insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista,modalInsertar: false})
}

editar=(dato)=>{
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
        if(dato.id==registro.id){
            lista[contador].Nombre_Cliente=dato.Nombre_Cliente;
            lista[contador].Estado=dato.Estado;
        }
        contador++;
    });
    this.setState({data:lista, modalEditar: false});
}

eliminar=(dato)=>{
    var opcion=window.confirm("Realmente desea eliminar el registro "+dato.id);
    if(opcion){
        var contador=0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if(registro.id==dato.id){
                lista.splice(contador, 1);
            }
            contador++;
        });
        this.setState({data: lista});
    }
}

    render() {
        return (
            <>
                <Container>

                    <br />
                    <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Cliente</Button>
                    <br /><br />

                    <Table>
                        <thead><tr><th>Id</th>
                            <th>Nombre Cliente</th>
                            <th>Estado</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) =>
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.Nombre_Cliente}</td>
                                    <td>{elemento.Estado}</td>
                                    <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                                        <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>

                                </tr>
                            )}
                        </tbody>
                    </Table>

                </Container>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className='form-control'
                                readOnly
                                type='text' value={this.state.data.length+1}
                            />

                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre Cliente:
                            </label>

                            <input
                                className='form-control'
                                name='Nombre_Cliente'
                                type='text'
                                onChange={this.handleChange}
                            />

                        </FormGroup>

                        <FormGroup>
                            <label>
                                Estado:
                            </label>

                            <input
                                className='form-control'
                                name='Estado'
                                type='text'
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color='primary' onClick={()=>this.insertar()}>
                            Insertar
                        </Button>
                        <Button color='danger' onClick={()=>this.ocultarModalInsertar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>

                </Modal>

                <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Registro</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input className='form-control' readOnly type='text' value={this.state.form.id}/>
                    </FormGroup>
                
                    <FormGroup>
                        <label>Nombre Cliente:</label>
                        <input className='form-control' name='Nombre_Cliente' type='text' onChange={this.handleChange} value={this.state.form.Nombre_Cliente}/>
                    </FormGroup>
                                
                    <FormGroup>
                        <label>Estado:</label>
                        <input className='form-control' name='Estado' type='text' onChange={this.handleChange} value={this.state.form.Estado}/>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                        <Button color='primary' onClick={()=>this.editar(this.state.form)}>
                            Editar
                        </Button>
                        <Button color='danger' onClick={()=>this.ocultarModalEditar()} >
                            Cancelar
                        </Button>
                    </ModalFooter>

                </Modal>

            </>)
    }
}
export default App;