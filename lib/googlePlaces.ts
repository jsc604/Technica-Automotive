async function fetchGoogleReviews(placeId: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );
    const data = await response.json();
    console.log('=======', data.result.reviews);

    // const 
    return data.result.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export default fetchGoogleReviews;
