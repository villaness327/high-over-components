import React from 'react';
//import {withRouter} from 'react-router-dom'; 


function withRouter(Wrappedcomponent){//Componente

    const hoc=class extends React.Component{

                        constructor(props){
                  
                            super(props)
                            this.state={
                                loading:false,

                             }; 
                        }

                render(){

                      return(

                          <Wrappedcomponent   
                          {...this.props}
                    
                          />
                          //   propiedad={{valor:1}}
                          //   saludo={props.saludo}
                          //   nombre={props.nombre}
                          //   apellido={props.apellido} 
                          // />
                      );             
                } 
        
        
      }  

      return hoc;      
  }  
  


 function Child(props) {

      return (
      <div><h1>Este es el contenido de componente Child:<br/>
      {props.saludo} {props.nombre} {props.apellido}</h1></div>);

  }

export default withRouter(Child);//Se envuelve el componente Child en su HOC