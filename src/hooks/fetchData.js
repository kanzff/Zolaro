import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (data => {
          // console.log(data)
          let newData
          if (Array.isArray(data)) {
            newData = [...data]
          } else {
            newData = data
          }
          setLoading(false)
          setData(newData)
        })
      )
      .catch(err => {
        console.log(err)
      })
  }, [url])

  return {
    data,
    setData,
    loading
  }
}