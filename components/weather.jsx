import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./card";

export default async function Weather({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      {" "}
      <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div className="card">
          <h6 className="feature-name">Current Weather</h6>
          <div className="feature-main">
            <Image
              className="max-w-20"
              src="/icon_rain.png"
              alt="rain icon"
              width={80}
              height={80}
            />
            <h3 className="feature-title">{main}</h3>
            <span className="feature-name ">{description}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
