import React from 'react'

export default function Error(details) {
  return (
    <div className="error">
      <h1 className="error__title">Erreur... 😭</h1>
      <span className="error__description">Error : {details}</span>
    </div>
  )
}
