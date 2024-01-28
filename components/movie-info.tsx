async function getMovie(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/movies/${id}`);
  return await res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{movie.title}</h6>;
}
