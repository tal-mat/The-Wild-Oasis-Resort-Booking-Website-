import { getCountries } from "@/app/_lib/data-service";

// SelectCountry component for selecting a country with its flag
async function SelectCountry({ defaultCountry, name, id, className }) {
  // Fetch the list of countries from the data service
  const countries = await getCountries();

  // Find the flag of the default country, or use an empty string if not found
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      // Encode both the country name and its flag as the select option value
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {/* Map through the countries and display them as options with name and flag */}
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
