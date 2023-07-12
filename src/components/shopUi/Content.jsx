import React, { useState } from 'react'



export default function Content(props) {
  
  return (
    <>
      <div>

        <div className="card mx-5" style={{width: '18rem', boxShadow:'2px 2px #9a9c9f'}}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.category}</h5>
            <p className="card-text">{props.details}</p>
            <link to={props.item} className="btn btn-primary">{props.btnIns}</link>
          </div>
        </div>

      </div>

    </>
  )
}
