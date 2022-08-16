import React from 'react'

const Energy = (user) => {
  const datas = user.data.data
  const energy = datas.keyData

  return (
    <div className="container-energy">
      <div className="calories">
        <img
          src={'../../../public/img/calories.png'}
          className="img-energy"
          alt="calories"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">
            {energy.calorieCount.toLocaleString('en-US')}Cal
          </p>

          <p className="title-energy">Calories</p>
        </div>
      </div>

      <div className="proteines">
        <img
          src={'../../../public/img/protein-icon.svg'}
          className="img-energy"
          alt="proteines"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.proteinCount}g</p>
          <p className="title-energy">Proteines</p>
        </div>
      </div>

      <div className="glucides">
        <img
          src={'../../../public/img/carbs-icon.svg'}
          className="img-energy"
          alt="glucides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.carbohydrateCount}g</p>
          <p className="title-energy">Glucides</p>
        </div>
      </div>

      <div className="lipides">
        <img
          src={'../../../public/img/fat-icon.svg'}
          className="img-energy"
          alt="lipides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.lipidCount}g</p>
          <p className="title-energy">Lipides</p>
        </div>
      </div>
    </div>
  )
}

export default Energy
