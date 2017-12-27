import {extendObservable} from 'mobx';
import datos from './firebaseController';
class TiendaController{
  constructor(){
    self = this;

    //Platos
    datos.platillos.once('value').then(function(snapshot){
      console.log(snapshot);
      snapshot.forEach(function(childSnapshot){
        const key = childSnapshot.key;
        const value = childSnapshot.val();
        self.platillos.push(value);// empuja al array de platos del extendObservable
      })
    })

    datos.bebidas.once('value').then(function(snapshot){
      console.log(snapshot);
      snapshot.forEach(function(childSnapshot){
        const key = childSnapshot.key;
        const value = childSnapshot.val();
        self.bebidas.push(value);// empuja al array de bebidas del extendObservable
      })
    })
    extendObservable(this,{platillos:[]
    ,bebidas:[]
    })
  }

  ponerEnLaOrden(indexPlatillo, cantidadPlatillo){
      this.platillos.forEach( (value,index) => {
        if(indexPlatillo === index){
          this.platillos[index].cantidad = cantidadPlatillo;
        }
      }
    );
  }

  bebidasEnLaOrden(indexBebidas, cantidadBebidas){
    this.bebidas.forEach( (value,index) => {
      if(indexBebidas === index){
        this.bebidas[index].cantidad = cantidadBebidas;
      }
    }
  );
}
}

var VarTiendaController = new TiendaController();
export default VarTiendaController;
