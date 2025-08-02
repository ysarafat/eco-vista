import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./card";

export default async function Wind({ lat, lon }) {
  const wind = await getWindData(lat, lon);

  return (
    <Card>
      <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div className="card">
          <h6 className="feature-name">Wind</h6>
          <div className="feature-main">
            <Image
              className="max-w-20"
              src="/icon_wind.png"
              alt="rain icon"
              height={80}
              width={80}
            />
            <h3 className="feature-title">{wind?.speed || 0} meter/sec</h3>
            <span className="feature-name">{wind?.deg} degrees</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
