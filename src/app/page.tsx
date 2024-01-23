import Countries from "@/components/Home/Countries";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Icountry } from "@/redux/features/countries.slice";
import { Button } from "antd";
import Image from "next/image";

export default async function Home() {
  const results:any[]  = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital").then(res => res.json())
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <Countries countries={results} />
      </MaxWidthWrapper>
    </>
  );
}
