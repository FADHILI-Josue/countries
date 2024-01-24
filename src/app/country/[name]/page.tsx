import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BackButton from "@/components/country/BackButton";
import Image from "next/image";

interface pageProps {
  params: { name: string };
}

export async function generateStaticParams() {
  const countries = await fetch('https://restcountries.com/v3.1/all').then((res) => res.json())

  return countries.map((country: any) => ({
    name: country.name.common,
  }))
}

let currencies: string[] = [];
const page = async ({ params: { name } }: pageProps) => {
  const country: Record<string, any> = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,tld,currencies,flags,continents,languages,capital,landlocked,area,unMember,cioc,cca3,ccn3,cca2,population`).then((response) => response.json());

  if (country && country[0].currencies) {
    currencies = Object.values(country[0].currencies).map((value: any) => value.name);
  }

  return <MaxWidthWrapper>
    <div className="py-10">
      <BackButton />
    </div>
      <div className="gap-20 flex flex-col items-center lg:flex-row my-10">
        <Image src={country[0].flags?.svg} height={100} width={100} alt={country[0].flags?.alt} className="w-[80%] md:w-[50%] object-contain" />
        <div className="w-full flex flex-col items-center">
              <h1 className="text-black mx-5 dark:text-white text-4xl mb-10 whitespace-normal">{country[0].name.common}</h1>
          <div className="flex flex-col sm:flex-row gap-5 w-full h-full pl-10 sm:pl-0 sm:items-center justify-around">
            <div className="flex flex-col whitespace-nowrap">
              <p> <span className='font-bold text-black dark:text-white/80'>Landlocked:</span> {country[0].landlocked ? "yes" : "no"}</p>
              <p> <span className="font-bold text-black dark:text-white/80">unMember:</span> {country[0].unMember ? "yes" : "no"}</p>
              <p> <span className="font-bold text-black dark:text-white/80">Area:</span> {country[0].area}</p>
              <p> <span className="font-bold text-black dark:text-white/80">population:</span> {country[0].population}</p>
              <p> <span className="font-bold text-black dark:text-white/80">cioc:</span> {country[0].cioc}</p>
              <p> <span className="font-bold text-black dark:text-white/80">cca3:</span> {country[0].cca3}</p>
              <p> <span className="font-bold text-black dark:text-white/80">ccn3:</span> {country[0].ccn3}</p>
              <p> <span className="font-bold text-black dark:text-white/80">cca2:</span> {country[0].cca2}</p>
            </div>
            <div className="flex flex-col whitespace-nowrap space-y-2 text-black dark:text-white/80">
              <p> <span className='font-bold'>Top level Domains:</span> {country[0].tld[0]}</p>
              <p> <span className='font-bold'>Top level Domains:</span> {country[0].tld[0]}</p>
              <p> <span className='font-bold'>Currencies:</span> {currencies.join(", ")}</p>
              <p> <span className='font-bold'>Languages:</span> {country[0].capital[0]}</p>
            </div>
          </div>
          <div className="mt-auto flex items-center justify-center pt-5 flex-wrap gap-4">
            {["France", "Netherlands", "Germany", "Belgium"].map((e, i) => <span key={i} className="inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 shadow-md bg-slate-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-gray-700/80 h-10 px-4 py-2">{e}</span>)}
          </div>
        </div>
      </div>
  </MaxWidthWrapper>

}

export default page