import GooglePlaces from 'google-places-api';

async function fetchGoogleReviews(placeId: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const places = new GooglePlaces(apiKey);

  try {
    const response = await places.details({ placeid: placeId });
    const reviews = response.result.reviews;
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export default fetchGoogleReviews;
