import Wind from "@/components/wind";

export default function WindPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <Wind lat={latitude} lon={longitude} />;
}
