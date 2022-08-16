import React from 'react'

const Name = (users) => {
  const data = users.data.data
  console.log(data)

  const userInfos = data.userInfos
  const name = userInfos.firstName

  return (
    <div className="name-congratulations">
      <h1 className="hello">
        Bonjour <span className="firstName">{name}</span>
      </h1>

      <p className="congratulation">
        "Félicitation! Hier, vous avez explosé vos objectifs"
      </p>
    </div>
  )
}

export default Name
