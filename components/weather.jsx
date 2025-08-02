import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./card";

export default async function Weather({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      {" "}
      <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div class="card">
          <h6 class="feature-name">Current Weather</h6>
          <div class="feature-main">
            <Image
              class="max-w-20"
              src="/icon_rain.png"
              alt="rain icon"
              width={80}
              height={80}
            />
            <h3 class="feature-title">{main}</h3>
            <span class="feature-name ">{description}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
