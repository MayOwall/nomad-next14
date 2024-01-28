async function getVideos(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/movies/${id}/videos`);
  return await res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos).slice(0, 50)}</h6>;
}
