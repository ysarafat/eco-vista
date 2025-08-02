import NoLocationInfo from "@/components/no-location-info";
import Temperature from "@/components/temperature";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolve = await getResolvedLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <Temperature lat={resolve?.lat} lon={resolve?.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
