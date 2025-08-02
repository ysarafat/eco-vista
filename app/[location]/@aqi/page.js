import AQI from "@/components/aqi";

export default function AQIPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <AQI lat={latitude} lon={longitude} />;
}
