import { ICountry } from "@/redux/features/countries.slice";
import { Eselector } from "@/redux/features/selector.slice";

export const filterCountriesByContinent = (countries: ICountry[], continent: Eselector): ICountry[] => {
    console.log(countries)
    if(continent === null) return countries
    return countries.filter((country) => country.region === 'america');
};

export const searchCountriesByName = (countries: ICountry[], searchText: string): ICountry[] => {
    const searchTerm = searchText.toLowerCase();
    return countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm) ||
        country.name.official.toLowerCase().includes(searchTerm)
    );
};