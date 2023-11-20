import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"

export default function Country() {
  const [country, setCountry] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { name } = useParams()

  useEffect(() => {
    async function fetchCountry() {
      setIsLoading(true)
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const data = await res.json()
      setCountry(data[0])
      setIsLoading(false)
    }
    fetchCountry()
  }, [name])

  function handleFetchCountryByCode(code) {
    async function fetchCountry() {
      setIsLoading(true)
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      const data = await res.json()
      setCountry(data[0])
      setIsLoading(false)
    }

    fetchCountry()
  }

  return (
    <div className="flex flex-col gap-4.8 lg:gap-6.4 px-1.6 py-4.8 max-w-[1200px] mx-auto h-screen">
      {!isLoading ? (
        <>
          <Link
            to="/"
            className="flex items-center gap-0.8 self-start bg-white dark:bg-darkBlue dark:text-white px-2.4 py-0.4 rounded-sm shadow-lg"
          >
            <IoIosArrowRoundBack /> Back
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.4 lg:gap-4.8">
            <img
              className="w-full"
              src={country?.flags.png}
              alt={`${country?.name.common} flag`}
            />
            <div className="flex flex-col gap-2.4 dark:text-white">
              <h2 className="font-extrabold text-2.4">
                {country?.name.common}
              </h2>

              <div className="flex flex-col gap-2.4 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-0.8 text">
                  <p>
                    <b className="font-semibold">Native Name:</b>{" "}
                    {country?.name.common}
                  </p>
                  <p>
                    <b className="font-semibold">Population:</b>{" "}
                    {country?.population.toLocaleString()}
                  </p>
                  <p>
                    <b className="font-semibold">Region:</b> {country?.region}
                  </p>
                  <p>
                    <b className="font-semibold">Sub Region:</b>{" "}
                    {country?.subregion}
                  </p>
                  <p>
                    <b className="font-semibold">Capital:</b> {country?.capital}
                  </p>
                </div>

                <div className="flex flex-col gap-0.8">
                  <p>
                    <b className="font-semibold">Top Level Domain:</b>{" "}
                    {country?.tld[0]}
                  </p>
                  <p>
                    <b className="font-semibold">Currencies:</b>{" "}
                    {country?.currencies &&
                      Object.keys(country.currencies).map(
                        (currencyCode) => country.currencies[currencyCode].name
                      )}
                  </p>
                  <p>
                    <b className="font-semibold">Languages:</b>{" "}
                    {country?.languages &&
                      Object.values(country?.languages).join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-1.2">
                <p className="text-1.6 font-semibold">Border countries:</p>
                <div className="flex flex-wrap gap-1.6">
                  {country?.borders?.map((border, i) => (
                    <p
                      className="bg-white dark:bg-darkBlue px-1.6 shadow-sm rounded-sm cursor-pointer"
                      key={i}
                      onClick={() => handleFetchCountryByCode(border)}
                    >
                      {border}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="dark:text-white text-2.4 text-center flex-1">
          Loading...
        </p>
      )}
    </div>
  )
}
