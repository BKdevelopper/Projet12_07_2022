import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import configuration from '../configuration'
import PropTypes from 'prop-types'
/**
 * Show score chart
 * @param {object | array} dataObjectifScore
 * @returns {JSX}
 */
const ObjectifScore = ({ dataObjectifScore }) => {
  const { mockedData } = configuration
  let ScoreData
  if (mockedData) {
    ScoreData = dataObjectifScore
  } else {
    ScoreData = dataObjectifScore.data
  }
  const CalcScore = ScoreData.todayScore * 100 || ScoreData.score * 100
  const TableTodayScore = [
    {
      name: 'A1',
      uv: CalcScore,
      pv: 2400,
      fill: 'red',
    },
    {
      name: '100',
      uv: '100',
      pv: 4567,
      fill: '#FBFBFB',
    },
  ]

  return (
    <div className="objective-score">
      <p className="objective-score-title">Score</p>
      <p className="objective-score-taux">
        <span className="objective-score-taux-text">{CalcScore}%</span> de votre
        objectif
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius={80}
          outerRadius={100}
          data={TableTodayScore}
          startAngle={90}
          endAngle={360}
          fill="white"
        >
          <RadialBar dataKey="uv" cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ObjectifScore

ObjectifScore.propTypes = {
  dataObjectifScore: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
