import React from 'react'
import { useApi } from '../services/DashboardAPI'
import Loader from './Loader'
import configuration from '../configuration'
/**
 * show text
 * @param {object} users
 * @returns {JSX}
 */
const Name = (userId) => {
  /**
   * @const {array} Data (id, userInfos, todayScore, keyData)
   * @const {array} Name (firstName, lastName)
   * @const {string} NameInfo
   */
  // const Data = users.data.data
  // const Name = Data.userInfos
  // const NameInfo = Name.firstName
  const { mockedData } = configuration
  // console.log(userId.userId.userInfos.firstName)
  //console.log(userId.userId.data.userInfos.firstName)

  if (userId) {
    return (
      <div className="name-congratulations">
        <h2>
          Bonjour
          <span>
            {!mockedData
              ? userId.userId.data.userInfos.firstName
              : userId.userId.userInfos.firstName}
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
