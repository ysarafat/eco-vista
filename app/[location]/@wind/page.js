import NoLocationInfo from "@/components/no-location-info";
import Wind from "@/components/wind";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function WindPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolve = await getResolvedLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <Wind lat={resolve?.lat} lon={resolve?.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
