import React from 'react';
//import {withRouter} from 'react-router-dom'; 


function withRouter(Wrappedcomponent){//Componente

    const hoc=class extends React.Component{//Clase donde se crea un componente

                        constructor(props){ //Se reciben las props
                  
                            super(props)
                            this.state={  //Se crea un estado
                                loading:false,

                             }; 
                        }

                render(){

                      return(

                          <Wrappedcomponent   
                          {...this.props}  //Se transfieren las props y el estado al componente
                          estado= {this.state.loading}                    
                          />
                          //   propiedad={{valor:1}}
                          //   saludo={props.saludo}
                          //   nombre={props.nombre}
                          //   apellido={props.apellido} 
                          // />
                      );             
                } 
        
        
      }  

      return hoc; //Se retorna el componente     
  }  
  


 function Child(props) {

      return (
      <div><h1>Este es el contenido de componente Child:<br/>
      {props.saludo} {props.nombre} {props.apellido} {props.estado}</h1></div>
      );

  }

export default withRouter(Child);//Se envuelve el componente Child en su HOC