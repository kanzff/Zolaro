import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (data => {
          let newData = [...data]
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