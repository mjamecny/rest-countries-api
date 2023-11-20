import { useState } from "react"
import { GoSearch } from "react-icons/go"
import { useNavigate } from "react-router-dom"

import CountryList from "../features/countries/CountryList"

export default function Countries() {
  const [selectedRegion, setSelectedRegion] = useState("europe")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/countries/${query}`)
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4.8 lg:gap-[0px] lg:justify-between max-w-[1200px] mx-auto">
        <form
          className="relative text-DarkGray lg:w-[40%]"
          onSubmit={handleSubmit}
        >
          <GoSearch className="absolute top-[50%] translate-y-[-50%] left-[18px] dark:text-white " />
          <input
            className="bg-white dark:bg-darkBlue rounded-lg outline-none shadow-md text-[14px] dark:text-white dark:placeholder:text-white py-1.6 pl-4.8 w-full"
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
        <select
          className="p-1.6 rounded-lg outline-none shadow-md text-[14px] w-[60%] lg:w-[auto] dark:bg-darkBlue dark:text-white"
          name="region"
          id="region"
          onChange={(e) => setSelectedRegion(e.target.value)}
          value={selectedRegion}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <CountryList region={selectedRegion} />
    </>
  )
}
