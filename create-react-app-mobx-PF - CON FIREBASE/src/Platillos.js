import React ,{Component} from 'react'
import './platillos.css';
import logo from './logo.svg';
import VarTiendaController from './TiendaController';
import Ordenar from './Ordenar';
class Platillos extends Component{

  render(){

    const platillos = VarTiendaController.platillos.map(
      (value,index)=>
      <div className="list-group-item" key={index}>
        <div className="panel-body">
          <img role="presentation" src={value.imagen} className="ImagenPlatillo"/>
          <h2 className="TitlePlatillo">{value.nombre}</h2>
          <div className="DescripcionPlatillo">{value.descripcion}</div>
          <Ordenar precio={value.precio} indice={index}
           hacerPedido={(indice,evento)=>
            {VarTiendaController.ponerEnLaOrden(indice,evento)}}/>
        </div>
      </div>
    );

    return(
      <div className="container col-md-6">
        <div >
          <div className="panel panel-primary">
                <div className="list-group Platillo-Menu">
                    {platillos}
                </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Platillos;
