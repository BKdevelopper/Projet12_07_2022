import React from 'react'
import configuration from '../configuration'
import PropTypes from 'prop-types'
/**
 * Show Energy stats
 * @param {array | object} dataEnergy
 * @returns {JSX}
 */

const Energy = ({ dataEnergy }) => {
  const { mockedData } = configuration
  let DataUser
  if (mockedData) {
    DataUser = dataEnergy.keyData
  } else {
    DataUser = dataEnergy.data.keyData
  }

  return (
    <div className="container-energy">
      <div className="container-energy-calories">
        <img
          src={'../img/calories-icon.svg'}
          className="container-energy-calories-img"
          alt="calories"
        />
        <div className="container-energy-calories-infos">
          <p className="container-energy-calories-infos-number">
            {DataUser.calorieCount.toLocaleString('en-US')} kCal
          </p>
          <p className="container-energy-calories-infos-title">Calories</p>
        </div>
      </div>

      <div className="container-energy-proteines">
        <img
          src={'../img/protein-icon.svg'}
          className="container-energy-proteines-img"
          alt="proteines"
        />
        <div className="container-energy-proteines-infos">
          <p className="container-energy-proteines-infos-number">
            {DataUser.proteinCount} g
          </p>
          <p className="container-energy-proteines-infos-title">Proteines</p>
        </div>
      </div>

      <div className="container-energy-glucides">
        <img
          src={'../img/carbs-icon.svg'}
          className="container-energy-glucides-img"
          alt="glucides"
        />
        <div className="container-energy-glucides-infos">
          <p className="container-energy-glucides-infos-number">
            {DataUser.carbohydrateCount} g
          </p>
          <p className="container-energy-glucides-infos-title">Glucides</p>
        </div>
      </div>

      <div className="container-energy-lipides">
        <img
          src={'../img/fat-icon.svg'}
          className="container-energy-lipides-img"
          alt="lipides"
        />
        <div className="container-energy-lipides-infos">
          <p className="container-energy-lipides-infos-number">
            {DataUser.lipidCount} g
          </p>
          <p className="container-energy-lipides-infos-title">Lipides</p>
        </div>
      </div>
    </div>
  )
}

export default Energy

Energy.propTypes = {
  dataEnergy: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
