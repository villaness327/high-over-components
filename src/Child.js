import React from 'react';
//import {withRouter} from 'react-router-dom'; 


function withRouter(Wrappedcomponent){//Componente

      return function Nuevocomponente(props){ //Se crea nuevo componente, y se reciben las props

        return(

            <Wrappedcomponent   
            {...props}
            />
            //   propiedad={{valor:1}}
            //   saludo={props.saludo}
            //   nombre={props.nombre}
            //   apellido={props.apellido} 
            // />
        );
      }
}


function Child(props) {
  return (
  <div><h1>Este es el contenido de componente Child:<br/>
  {props.saludo} {props.nombre} {props.apellido}</h1></div>);
}

export default withRouter(Child);//Se envuelve el componente Child en su HOC