"use client"
import { Icountry, setCountries } from '@/redux/features/countries.slice'
import { AutoComplete, Input } from 'antd'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

interface CountriesProps {
    countries: (Icountry & { alt: string })[]
}
const countriesList = ["Rwanda", "France", "England"]; // Example list of countries

const Countries: FC<CountriesProps> = ({ countries }) => {
    const [value, setValue] = useState('');

    const handleSearch = (searchText: string) => {
        // Implement your own search logic here if needed
        console.log('Search:', searchText);
    };

    const onSelect = (selectedValue: string) => {
        console.log('Selected:', selectedValue);
    };
    return <div className='w-full'>
        <div className="w-full flex items-center justify-between">
        <AutoComplete
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onSelect={onSelect}
      onSearch={handleSearch}
      style={{ width: 300 }}
      options={countriesList.map((country) => ({ value: country }))}
    >
      <Input
        // prefix={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
        placeholder="Search for a country"
        style={{ borderRadius: '20px' }}
      />
    </AutoComplete>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {countries.map((e: any, i: number) => <Link href={`country/${e.name.common}`} key={i} className='bg-white text-slate-700 dark:bg-slate-900 rounded-lg shadow-md shadow-black/30 overflow-hidden dark:shadow-white/30 dark:text-white'>
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