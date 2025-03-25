import { getCountries } from "@/app/_lib/data-service";

// SelectCountry component for selecting a country with its flag
async function SelectCountry({ defaultCountry, name, id, className }) {
  // Fetch the list of countries from the data service
  const countries = await getCountries();

  // Find the country details for the default nationality
  const country = countries.find((c) => c.name === defaultCountry);

  // Determine the flag
  const flagSrc = country?.flag;

  return (
    <div className="flex items-center gap-2">
      <select
        name={name}
        id={id}
        defaultValue={`${defaultCountry}%${country?.flag || ""}`}
        className={`${className} text-sm sm:text-base flex-grow`}
      >
        <option value="">Select country...</option>
        {/* Map through the countries and display them as options with country name */}
        {countries.map((c) => (
          <option key={c.name} value={`${c.name}%${c.flag || ""}`}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCountry;
