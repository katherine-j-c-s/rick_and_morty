import React, { useState } from 'react'

export default function Imagenes({img ,key, imagenSelected}) {
  
    function selectImage(event) {
        imagenSelected(event.target.src);
    }

    return (
    <div>
        <div id={key} onClick={selectImage}>
            <img src={img} alt={key}  />
        </div>
    </div>
  )
}
