import React from 'react'
/**
 * show text
 * @param {object} users
 * @returns {JSX}
 */
const Name = (users) => {
  /**
   * @const {array} Data (id, userInfos, todayScore, keyData)
   * @const {array} Name (firstName, lastName)
   * @const {string} NameInfo
   */
  const Data = users.data.data
  const Name = Data.userInfos
  const NameInfo = Name.firstName

  return (
    <div className="name-congratulations">
      <h2>
        Bonjour
        <span>{NameInfo}</span>
      </h2>
      <div className="text">
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </div>
  )
}

export default Name
