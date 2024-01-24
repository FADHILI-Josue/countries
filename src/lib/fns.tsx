import { ICountry } from "@/redux/features/countries.slice";
import { selector } from "@/redux/features/selector.slice";

export const filterCountriesByContinent = (countries: ICountry[], continent: selector): ICountry[] => {
    return countries.filter((country) => country.region === continent);
};

export const searchCountriesByName = (countries: ICountry[], searchText: string): ICountry[] => {
    const searchTerm = searchText.toLowerCase();
    return countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm) ||
        country.name.official.toLowerCase().includes(searchTerm)
    );
};