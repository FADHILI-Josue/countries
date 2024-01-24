"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { ICountry, setCountries } from '@/redux/features/countries.slice'
import { setSelector } from '@/redux/features/selector.slice'
import { RootState } from '@/redux/store'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

interface ClientProps {
  
}
const obj:ICountry[] = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/ad.png',
      svg: 'https://flagcdn.com/ad.svg',
      alt: 
        'The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.'
    },
    name: {
      common: 'Andorra',
      official: 'Principality of Andorra',
      nativeName: {
        cat: {
          official: 'Principat d\'Andorra',
          common: 'Andorra'
        }
      }
    },
    capital: [ 'Andorra la Vella' ],
    region: 'Europe',
    population: 77265
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tf.png',
      svg: 'https://flagcdn.com/tf.svg',
      alt: ''
    },
    name: {
      common: 'French Southern and Antarctic Lands',
      official: 
        'Territory of the French Southern and Antarctic Lands',
      nativeName: {
        fra: {
          official: 
            'Territoire des Terres australes et antarctiques françaises',
          common: 
            'Terres australes et antarctiques françaises'
        }
      }
    },
    capital: [ 'Port-aux-Français' ],
    region: 'Antarctic',
    population: 400
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/la.png',
      svg: 'https://flagcdn.com/la.svg',
      alt: 
        'The flag of Laos is composed of three horizontal bands of red, blue and red. The blue band is twice the height of the red bands and bears a white circle at its center.'
    },
    name: {
      common: 'Laos',
      official: 'Lao People\'s Democratic Republic',
      nativeName: {
        lao: {
          official: 'ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ',
          common: 'ສປປລາວ'
        }
      }
    },
    capital: [ 'Vientiane' ],
    region: 'Asia',
    population: 7275556
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ca.png',
      svg: 'https://flagcdn.com/ca.svg',
      alt: 
        'The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.'
    },
    name: {
      common: 'Canada',
      official: 'Canada',
      nativeName: {
        eng: { official: 'Canada', common: 'Canada' },
        fra: { official: 'Canada', common: 'Canada' }
      }
    },
    capital: [ 'Ottawa' ],
    region: 'Americas',
    population: 38005238
  },]
const Client: FC<ClientProps> = ({}) => {
    const { selector } = useSelector((state:RootState) => state.selector)
    const {countries} = useAppSelector(state => state.countries)
    const dispatch = useAppDispatch()
  return <div>
    <h1>{selector}</h1>
    <button onClick={()=>dispatch( selector? setSelector(null):setSelector('Africa'))}>hell</button>
    <button onClick={()=>dispatch(setCountries(obj))}>awaaa</button>
    {countries.length ? 'yes':'no'}
  </div>
}

export default Client