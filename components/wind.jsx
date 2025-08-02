import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./card";

export default async function Wind({ lat, lon }) {
  const { speed, deg } = await getWindData(lat, lon);

  return (
    <Card>
      <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div class="card">
          <h6 class="feature-name">Wind</h6>
          <div class="feature-main">
            <Image
              class="max-w-20"
              src="/icon_wind.png"
              alt="rain icon"
              height={80}
              width={80}
            />
            <h3 class="feature-title">{speed} meter/sec</h3>
            <span class="feature-name">{deg} degrees</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
