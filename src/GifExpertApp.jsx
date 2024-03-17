import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory ) ) return;
     //categories.push( newCategory );
     //const arreglo = categories;
     //const nuevoArreglo = arreglo.push('Valorant');
     //console.log(nuevoArreglo);
     setCategories( [newCategory, ...categories] );
     //console.log( newCategory );
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory          
          onNewCategory = { event => onAddCategory( event ) }          
        />
        {/* Listado de Gif */}        
        {
          categories.map( ( category ) => ( 
            <GifGrid key={ category } category={ category } />                               
          ))
        }            
    </>
  )
}
