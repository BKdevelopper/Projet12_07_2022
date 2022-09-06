import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import React from 'react'
/**
 * show day session
 * @param {object} session
 * @returns {JSX}
 */
const DaySessions = (session) => {
  /**
   * @const {object} DaySessionsData (data, kind, userId )
   * @const {array} DaySessionsTime (time)
   */
  const DaySessionsData = session.data.data
  const DaySessionsTime = DaySessionsData.sessions

  /**
   * @description Conversion of number into days over a week
   */
  let data = DaySessionsTime.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: 'L' }
      case 2:
        return { ...data, day: 'M' }
      case 3:
        return { ...data, day: 'M' }
      case 4:
        return { ...data, day: 'J' }
      case 5:
        return { ...data, day: 'V' }
      case 6:
        return { ...data, day: 'S' }
      case 7:
        return { ...data, day: 'D' }
      default:
        return { ...data }
    }
  })

  /**
   * Show custom tooltip
   * @param {boolean} active
   * @param {array} payload
   * @return {JSX || null}
   */
  const CustomTooltip = ({ active, payload }) =>
    active ? (
      <div className="chart-tooltip-2">
        <div>{payload[0].value} min</div>
      </div>
    ) : null
  return (
    <>
      <h2 className="chart-title">Durée moyenne des sessions</h2>
      <div className="Daysession-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tick={{ fill: '#FFFFFF' }}
              tickMargin={10}
              tickSize={0}
              padding={{ left: 5, right: 5 }}
            />
            <YAxis hide domain={['dataMin-10', 'dataMax+1']} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                strokeWidth: 0,
              }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              activeDot={{ r: 8 }}
              dot={{ r: 0 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default DaySessions
