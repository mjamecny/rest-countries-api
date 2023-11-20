import { Link } from "react-router-dom"

export default function CountryItem({ country }) {
  return (
    <Link
      to={country.name.common}
      className="flex flex-col rounded-md shadow-md bg-white dark:bg-darkBlue overflow-hidden"
    >
      <img
        className="h-[150px] w-full object-cover"
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />

      <div className="flex flex-col gap-1.6 px-2.4 pt-2.4 pb-4.8 dark:text-white">
        <h2 className="font-extrabold">{country.name.common}</h2>
        <div className="flex flex-col">
          <p>
            <b className="font-semibold">Population:</b>{" "}
            <span>{country.population.toLocaleString()}</span>
          </p>
          <p>
            <b className="font-semibold">Region:</b>{" "}
            <span>{country.region}</span>
          </p>
          <p>
            <b className="font-semibold">Capital:</b>{" "}
            <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
