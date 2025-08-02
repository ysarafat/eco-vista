import Weather from "@/components/weather";

export default function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <Weather lat={latitude} lon={longitude} />;
}
