import { getAQIData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./card";

export default async function AQI({ lat, lon }) {
  const { main, components } = await getAQIData(lat, lon);
  function getAQIRating(aqi) {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "N/A";
    }
  }
  return (
    <Card>
      <h6 className="feature-name">Air Pollution & Quality</h6>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Air Quality Index
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {getAQIRating(main.aqi)}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Carbon monoxide
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.co} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Nitrogen monoxide
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.no} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Nitrogen dioxide
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.no2} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Ozone
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.o3} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Sulphur dioxide
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.so2} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Fine particles matter
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.pm2_5} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Coarse particulate matter
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.pm10} μg/m3
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
          <Image
            className="max-w-[18px]"
            src="/icon_air_element.png"
            alt="icon"
            width={18}
            height={18}
          />
          Ammonia
        </div>
        <span className="text-right text-sm text-white lg:text-base">
          {components?.nh3} μg/m3
        </span>
      </div>
    </Card>
  );
}
