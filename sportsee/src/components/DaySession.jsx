import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import React from 'react'

const DaySessions = (session) => {
  // Format day of the week
  const dataSession = session.data.data
  const sessionTime = dataSession.sessions

  /**
   * @description Conversion of number data into days over a week
   */
  let data = sessionTime.map((data) => {
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

  return (
    <>
      <h2 className="chart-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="30%" height="30%">
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
          <Tooltip />
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
    </>
  )
}

export default DaySessions
