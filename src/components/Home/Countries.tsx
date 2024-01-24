"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { filterCountriesByContinent, searchCountriesByName } from '@/lib/fns'
import { ICountry, setCountries } from '@/redux/features/countries.slice'
import { AutoComplete, Input, SelectProps } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'
import { Select } from 'antd';
import { Eselector, setSelector } from '@/redux/features/selector.slice'




interface CountriesProps {
    countries: ICountry[]
}
const countriesList = ["Rwanda", "France", "England"]; // Example list of countries


const searchResult = (countries: ICountry[]) =>
    countries
        .map((country, idx) => {
            return {
                value: country.name.common,
                label: (
                    <div
                        className='flex items-center justify-between'
                    >
                        <span>
                            {country.name.common}
                        </span>
                        <Image
                            alt={country.flags.alt}
                            src={country.flags.svg}
                            width={100}
                            height={100}
                            className=' h-5 w-5'
                        />                    </div>
                ),
            };
        });



const Countries: FC<CountriesProps> = ({ countries }) => {
    const dispatch = useAppDispatch()
    
    // SELECT
const onChange = (value: Eselector) => {
    dispatch(setSelector(value))
};

const onSearch = (value: string) => null;

const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

// --------

    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([])
    const stateCountries = useAppSelector(state => state.countries);
    const { selector } = useAppSelector(state => state.selector);
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setFilteredCountries(searchCountriesByName(stateCountries.countries, value));
        setOptions(value ? searchResult(filteredCountries) : []);
    };

    const onSelect = (value: string) => {
        setFilteredCountries(searchCountriesByName(stateCountries.countries, value));
    };
    useEffect(() => {
        console.log(countries)
        dispatch(setCountries(countries));
        const res = filterCountriesByContinent(stateCountries.countries, selector)
        console.log(res)
        setFilteredCountries(res)
    }, [countries, dispatch, selector, stateCountries])

    useEffect(() => { console.log(filteredCountries) }, [filteredCountries])
    return <div className='w-full'>
        <div className="w-full mb-5 flex items-center justify-between">
            <AutoComplete
                popupMatchSelectWidth={252}
                style={{ width: 300 }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                size="large"
            >
                <Input
                    prefix={<SearchOutlined className='h-full' />}
                    size="large" placeholder="Search Country Here" className='!placeholder-black/60 !dark:placeholder-white' />
            </AutoComplete>
            <Select
                showSearch
                popupMatchSelectWidth={150}
                placeholder="Select a continent"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={["Africa", "Americas", "Europe", "Asia", "Oceania", "Antarctic"].map((e) => ({value:e, label: e}))}
            />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {filteredCountries.length === 0 && <h1>no country found</h1>}
            {filteredCountries.map((e: ICountry, i: number) => <Link href={`country/${e.name.common}`} key={i} className='bg-white text-slate-700 dark:bg-slate-900 rounded-lg shadow-md shadow-black/30 overflow-hidden dark:shadow-white/30 dark:text-white'>
                <Image
                    alt={e.flags.alt}
                    src={e.flags.svg}
                    width={100}
                    height={100}
                    className='w-full'
                />
                <div className="p-5 text-sm flex flex-col items-start">
                    <h2 className='font-semibold mb-5 text-lg text-start text-slate-900 dark:text-white'>{e.name.common}</h2>
                    <p> <span className='font-bold'>Population:</span> {e.population.toLocaleString()}</p>
                    <p> <span className='font-bold'>Region:</span> {e.region}</p>
                    <p> <span className='font-bold'>Capital:</span> {e.capital[0]}</p>
                </div>
            </Link>)}
        </div>
    </div>
}

export default Countries