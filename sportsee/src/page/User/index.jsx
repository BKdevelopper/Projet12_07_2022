import React from 'react'
import { useFetch } from '../../services/PostApi'
import { useParams } from 'react-router-dom'
import Name from '../../components/name'
import Energy from '../../components/statEnergy'
import ObjectifScore from '../../components/objectifs'
import RadarCharts from '../../components/Radar'
import DaySessions from '../../components/DaySession'
import Activity from '../../components/Activity'
import { useApi } from '../../services/DashboardAPI'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
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
  const { id } = useParams()
  const { data } = useApi('GET_USER_MAIN_DATA', parseInt(id))
  const { data: activity } = useApi('GET_USER_ACTIVITY', parseInt(id))
  const { data: performance } = useApi('GET_USER_PERFORMANCE', parseInt(id))
  const { data: session } = useApi('GET_USER_AVERAGE_SESSIONS', parseInt(id))

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
          {data && <Name userId={data} />}

          <div className="containerstats">
            <div className="containerstats-graph">
              <div className="containerstats-graph-1">
                <div className="containerstats-number">
                  {data && <Energy dataEnergy={data} />}
                </div>
              </div>
              <div className="containerstats-graph-2">
                <div className="containerstats-graph-2-top">
                  <section className="Activity">
                    {activity && <Activity dataActivity={activity} />}
                  </section>
                </div>
                <div className="containerstats-graph-2-bottom">
                  <section className="DaySession">
                    {session && <DaySessions dataSession={session} />}
                  </section>
                  <section className="Performance">
                    {performance && (
                      <RadarCharts dataPerformance={performance} />
                    )}
                  </section>
                  <section className="User">
                    {data && <ObjectifScore dataObjectifScore={data} />}
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
