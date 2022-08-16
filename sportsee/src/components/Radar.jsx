import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
  PolarRadiusAxis,
  Text,
} from 'recharts'

const RadarCharts = (performance) => {
  const radarData = performance.data.data

  const DataRadarTitle = radarData.data.map((data) => {
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
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={DataRadarTitle}>
          <PolarGrid
          // fill="#282d30"
          // fillOpacity={0.5}
          //stroke="none"
          // strokeOpacity={1}
          // strokeWidth={1}
          />
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
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
//jeudi 17h 18/02/2020
export default RadarCharts
