"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
    return () => {};
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col justify-center item-center h-screen bg-slate-700 text-white">
      {loading && <span className="text-center">Detecting Your Location</span>}
    </div>
  );
}
