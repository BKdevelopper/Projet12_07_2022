import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import configuration from '../configuration'
/**
 * Show activity chart
 * @param {object} Data
 * @const {array | number} Data
 * @const {array | number} Sessions
 * @const {array | number} ActivityDay
 * @return {JSX}
 */

const Activity = (dataActivity) => {
  const { mockedData } = configuration
  let Sessions
  if (mockedData) {
    Sessions = dataActivity.dataActivity
  } else {
    Sessions = dataActivity.dataActivity.data.sessions
  }

  const ActivityDay = Sessions.map((data) => {
    switch (new Date(data.day).getDate()) {
      case 1:
        return { ...data, day: '1' }
      case 2:
        return { ...data, day: '2' }
      case 3:
        return { ...data, day: '3' }
      case 4:
        return { ...data, day: '4' }
      case 5:
        return { ...data, day: '5' }
      case 6:
        return { ...data, day: '6' }
      case 7:
        return { ...data, day: '7' }
      default:
        return { ...data }
    }
  })
  /**
   * Show custom tooltip
   * @param {Object} params
   * @param {Boolean} params.active
   * @param {Array} params.payload
   * @return {JSX || null}
   */
  const CustomTooltip = ({ active, payload }) =>
    active ? (
      <div className="chart-tooltip">
        <div>{payload[0].value}kg</div>
        <div>{payload[1].value}kCal</div>
      </div>
    ) : null

  /**
   * @param {color} value
   * @returns {HTML} Returns the desired color
   */
  const ColorLegendText = (value) => {
    return <span style={{ color: '#74798C' }}>{value}</span>
  }
  return (
    <>
      <p className="DailyActivity-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ActivityDay}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis dataKey="day" tickMargin={16} tickSize={0} minTickGap={30} />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={40}
            tickSize={0}
            axisLine={false}
            domain={['dataMin-5', 'dataMax+0']}
            interval={'preserveEnd'}
            tickCount={3}
          />
          <YAxis
            yAxisId="calories"
            hide
            orientation="right"
            domain={['dataMin-100', 'dataMax+0']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={70}
            align="right"
            iconType="circle"
            iconSize={10}
            formatter={ColorLegendText}
          />
          <Bar
            yAxisId="kilogram"
            name="Poids (Kg)"
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />

          <Bar
            yAxisId="calories"
            name="Calories brûlées (KCal)"
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Activity
