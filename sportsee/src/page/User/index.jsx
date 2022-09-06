import React from 'react'
import { useFetch } from '../../services/PostApi'
import { useParams } from 'react-router-dom'
import Name from '../../components/name'
import Energy from '../../components/statEnergy'
import ObjectifScore from '../../components/objectifs'
import RadarCharts from '../../components/Radar'
import DaySessions from '../../components/DaySession'
import Activity from '../../components/Activity'
/**
 * Show user page
 * @returns {JSX}
 */
const User = () => {
  /**
   * @const {object} userId - Get user id
   * @const {array} user - Get user data
   * @const {array} session - Get user session
   * @const {array} performance - Get user performance
   * @const {array} activity - Get user activity
   */
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
    <div className="container">
      <header>
        <a href="">
          <img src="../img/logo.png" alt="" />
        </a>
        <a href="">Acceuil</a>
        <a href="">Profil</a>
        <a href="">Réglage</a>
        <a href="">Communauté</a>
      </header>
      <aside>
        <nav>
          <img src="../img/nav.svg" alt="" />
          <p>Copyright, SportSee 2020</p>
        </nav>
      </aside>
      <main>
        <div className="containerPage">
          {user && <Name data={user} />}
          <div className="containerstats">
            <div className="containerstats-graph">
              <div className="containerstats-graph-1">
                <div className="containerstats-number">
                  {user && <Energy data={user} />}
                </div>
              </div>
              <div className="containerstats-graph-2">
                <div className="containerstats-graph-2-top">
                  <section className="Activity">
                    {activity && <Activity data={activity} />}
                  </section>
                </div>
                <div className="containerstats-graph-2-bottom">
                  <section className="DaySession">
                    {session && <DaySessions data={session} />}
                  </section>
                  <section className="Performance">
                    {performance && <RadarCharts data={performance} />}
                  </section>
                  <section className="User">
                    {user && <ObjectifScore data={user} />}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default User
