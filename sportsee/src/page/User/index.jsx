import React from 'react'
import { useFetch } from '../../services/PostApi'
import { useParams } from 'react-router-dom'
import Name from '../../components/name'
import Energy from '../../components/statEnergy'
import ObjectifScore from '../../components/objectifs'
import RadarCharts from '../../components/Radar'
import DaySessions from '../../components/DaySession'
const User = () => {
  const { userId } = useParams()
  const { data: user } = useFetch(`http://localhost:3000/user/${userId}`)
  const { data: session } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  )
  const { data: performance } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  )
  const { data: activity } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  )

  return (
    <div className="containerPage">
      {user && <Name data={user} />}
      {user && <Energy data={user} />}
      {performance && <RadarCharts data={performance} />}
      {user && <ObjectifScore data={user} />}
      <section className="DaySession">
        {session && <DaySessions data={session} />}
      </section>
    </div>
  )
}

export default User
