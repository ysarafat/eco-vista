import { getLocationByName } from "../location-util";

export async function GET(req, { params }) {
  const location = params?.name;
  const locationData = getLocationByName(location);
  return Response.json(locationData);
}
