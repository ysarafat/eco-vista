export async function getLocationData(lat, lon) {
  try {
    const response = await fetch(
      `https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLocationLatLongList() {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getLocationLatLong(location) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${location}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
