import { useEffect, useState } from "react"

import { useCountries } from "../../hooks/useCountries"

import CountryItem from "./CountryItem"

export default function CountryList({ region }) {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const { data, isLoading, error } = useCountries("europe")

  useEffect(() => {
    async function fetchCountries() {
      setIsLoading(true)
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const data = await res.json()
      setCountries(data)
      setIsLoading(false)
    }
    fetchCountries()
  }, [region])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.2 px-2.4 lg:px-[0px] mt-2.4 max-w-[1200px] mx-auto">
      {!isLoading ? (
        countries.map((country, i) => <CountryItem key={i} country={country} />)
      ) : (
        <p className="dark:text-white text-2.4 text-center h-screen">
          Loading...
        </p>
      )}
    </div>
  )
}
