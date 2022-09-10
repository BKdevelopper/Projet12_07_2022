import { useState, useEffect } from 'react'
import {
  USER_ACTIVITY_MOCKED,
  USER_AVERAGE_SESSIONS_MOCKED,
  USER_MAIN_DATA_MOCKED,
  USER_PERFORMANCE_MOCKED,
} from '../dataMocked'
import configuration from '../configuration'
const { API, mockedData, delay } = configuration

const urlAPI = API

function getDifferentsServices(URL, IDUser) {
  switch (URL) {
    case 'GET_USER_ACTIVITY':
      return `user/${IDUser}/activity`

    case 'GET_USER_PERFORMANCE':
      return `user/${IDUser}/performance`

    case 'GET_USER_AVERAGE_SESSIONS':
      return `user/${IDUser}/average-sessions`

    case 'GET_USER_MAIN_DATA':
      return `user/${IDUser}`

    case 'GET_USER_KEYS':
      return `user/${IDUser}`
    default:
      return null
  }
}
function getDifferentsServicesMocked(URL, IDUser) {
  switch (URL) {
    case 'GET_USER_ACTIVITY':
      return USER_ACTIVITY_MOCKED.find((activity) => activity.userId === IDUser)
        .sessions

    case 'GET_USER_PERFORMANCE':
      return USER_PERFORMANCE_MOCKED.find(
        (performance) => performance.userId === IDUser
      )

    case 'GET_USER_AVERAGE_SESSIONS':
      return USER_AVERAGE_SESSIONS_MOCKED.find(
        (averageSessions) => averageSessions.userId === IDUser
      ).sessions

    case 'GET_USER_MAIN_DATA':
      return USER_MAIN_DATA_MOCKED.find((user) => user.id === IDUser)

    case 'GET_USER_KEYS':
      return USER_MAIN_DATA_MOCKED
    default:
      return null
  }
}
export const useApi = (URL, IDUser) => {
  const [status, setStatus] = useState(0)
  const [statusText, setStatusText] = useState('')
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const request = getDifferentsServices(URL, IDUser)
  const requestMocked = getDifferentsServicesMocked(URL, IDUser)

  useEffect(() => {
    if (!request) return

    setLoading(true)
    const getData = async () => {
      setLoading(true)
      try {
        if (!mockedData) {
          const url = `${urlAPI}/${request}`
          const fetchResponse = await fetch(url)
          const json = await fetchResponse.json()
          setStatus(fetchResponse.status)
          setStatusText(fetchResponse.statusText)
          setData(json)
        } else {
          setData(requestMocked)
        }
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    getData()
  }, [request, URL, IDUser])

  return { status, statusText, data, error, loading }
}
