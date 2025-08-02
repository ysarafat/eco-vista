import Link from "next/link";
import Card from "./card";

export default function NoLocationInfo() {
  return (
    <Card>
      <div>Location not found</div>
      <Link href={"/"}>Back To Home</Link>
    </Card>
  );
}
