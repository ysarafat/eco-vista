import LocationInfo from "@/components/location-info";

export default function Page({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <LocationInfo lat={latitude} lon={longitude} />;
}
