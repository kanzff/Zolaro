import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts, fetchProductDetail } from '../store/actions/productAction'


export default function useFetch(url) {
  // console.log('masuk fetch di hooks')
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result => {
          if (Array.isArray(result)) {
            dispatch(fetchProducts(result))
          } else {
            dispatch(fetchProductDetail(result))
          }
          // setData(result)
        })
        )
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
  }, [url, dispatch])

  return {
    data,
    setData,
    loading
  }
}