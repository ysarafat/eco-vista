import AQI from "@/components/aqi";
import NoLocationInfo from "@/components/no-location-info";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function AQIPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolve = await getResolvedLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <AQI lat={resolve?.lat} lon={resolve?.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
