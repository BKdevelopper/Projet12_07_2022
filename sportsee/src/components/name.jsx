import React from 'react'
import Loader from './Loader'
import configuration from '../configuration'
import PropTypes from 'prop-types'
/**
 * show text
 * @param {object | array} userId
 * @returns {JSX}
 */
const Name = ({ userId }) => {
  const { mockedData } = configuration

  if (userId) {
    return (
      <div className="name-congratulations">
        <h2>
          Bonjour
          <span>
            {!mockedData
              ? userId.data.userInfos.firstName
              : userId.userInfos.firstName}
          </span>
        </h2>
        <div className="text">
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default Name

Name.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
