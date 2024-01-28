import Link from "next/link";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const res = await fetch(`${process.env.BASE_URL}/movies`);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
