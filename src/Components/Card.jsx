import React from 'react'

const Card = ({id, name, description,type}) => {
    
    const path = `/assets/${type}-${id}.png`
    
    return (
        <>
        <div className="card m-3 col-12 col-md-4" style={{
            width:200
        }}>
            <img className="card-img-top" src={path} alt={id} />

        </div>

        </>
    )
}

export default Card
