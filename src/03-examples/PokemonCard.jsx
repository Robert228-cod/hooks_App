import React from 'react'
import '../index.css'

export const PokemonCard = ( {id, name, sprites = [], types = [], stats = [], abilities = []} ) => {
  
  return (
    <section>
        <h2 className='text-capitalize'> #{id} - {name} </h2>
        
        {
          sprites.map( (url, id) => <img src={ url } key={id}/> ) 
        }
        <div  className='contenedor'>
          <div className='elemento'>
            <h2>Base stats:</h2>
            <div>
              {
                stats.map((contenido, id) => <div key={id}>{
                  contenido.map((stack,index) => <div key={index}>
                    {stack.stat.name} ➤ {stack.base_stat}
                  </div>)
                }</div>)
              }
            </div>
          </div>     

          <div className='elemento'>
            <h2>Type:</h2>
            <div>
              {
                types.map( (contenido,id) => <div key={id}> {
                  contenido.map( (tipo, index) => <div key={index}>
                    ➣ {tipo.type.name}
                  </div>)
                }</div>)
              }  
            </div>
          </div>

          <div>
            <h2>Abilities:</h2>
            <div>
              {
                abilities.map( (contenido,id) => <div key={id}> {
                  contenido.map( (habilidad, index) => <div key={index}>
                    ➣ {habilidad.ability.name}
                  </div>)
                }</div>)
              }  
            </div>
          </div>

        </div>
    </section>
  )
}
