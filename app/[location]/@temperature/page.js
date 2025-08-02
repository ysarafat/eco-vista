import Temperature from "@/components/temperature";

export default function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <Temperature lat={latitude} lon={longitude} />;
}
