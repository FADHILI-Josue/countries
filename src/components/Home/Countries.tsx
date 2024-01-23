"use client"
import { Icountry, setCountries } from '@/redux/features/countries.slice'
import Image from 'next/image'
import { FC, useEffect } from 'react'

interface CountriesProps {
    countries: (Icountry & { alt: string })[]
}

const Countries: FC<CountriesProps> = ({ countries }) => {
    return <div className='w-full'>
     {/* <div className="w-full flex items-center justify-between">
        <Input className='w-fit' placeholder='Search for country' prefix={<SearchIcon />} />
     </div> */}
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {countries.map((e:any, i:number) => <div key={i} className='bg-white text-slate-700 dark:bg-slate-900 rounded-lg shadow-md shadow-black/30 overflow-hidden dark:shadow-white/30 dark:text-white'>
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
        </div>)}
    </div>
    </div>
}

export default Countries