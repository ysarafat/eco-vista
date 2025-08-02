import LocationInfo from "@/components/location-info";
import NoLocationInfo from "@/components/no-location-info";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function Page({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolve = await getResolvedLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <LocationInfo lat={resolve?.lat} lon={resolve?.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
