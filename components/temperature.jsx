import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./card";

export default async function Temperature({ lat, lon }) {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <Card>
      <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div class="card">
          <h6 class="feature-name">Current Temperature</h6>
          <div class="feature-main">
            <Image
              class="max-w-20"
              src="/icon_tempareture.png"
              alt="rain icon"
              width={80}
              height={80}
            />
            <h3 class="feature-title">{temp}°C</h3>

            <span class="feature-name">Feels Like {feels_like}°C</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
