import NoLocationInfo from "@/components/no-location-info";
import Weather from "@/components/weather";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolve = await getResolvedLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <Weather lat={resolve?.lat} lon={resolve?.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
