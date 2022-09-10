import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import configuration from '../configuration'
import PropTypes from 'prop-types'
/**
 * Show radar chart
 * @param {object | array} dataPerformance
 * @returns {JSX}
 */
const RadarCharts = ({ dataPerformance }) => {
  const { mockedData } = configuration
  let DataPerformance
  if (mockedData) {
    DataPerformance = dataPerformance
  } else {
    DataPerformance = dataPerformance.data
  }

  const DataPerformanceTitle = DataPerformance.data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: 'Intensité' }
      case 2:
        return { ...data, kind: 'Vitesse' }
      case 3:
        return { ...data, kind: 'Force' }
      case 4:
        return { ...data, kind: 'Endurance' }
      case 5:
        return { ...data, kind: 'Energie' }
      case 6:
        return { ...data, kind: 'Cardio' }
      default:
        return { ...data }
    }
  })

  return (
    <div className="spider-analytics">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={DataPerformanceTitle}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tick={{ fill: '#FFFFFF', fontSize: '0.875em' }}
          />
          <Radar
            dataKey="value"
            fill="red"
            fillOpacity={0.6}
            legendType="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarCharts

RadarCharts.propTypes = {
  dataPerformance: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
