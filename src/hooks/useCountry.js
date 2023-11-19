import { useState, useEffect } from "react"

export function useCountry(country) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        )
        const data = await res.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountry()
  }, [country])

  return { data, isLoading, error }
}
