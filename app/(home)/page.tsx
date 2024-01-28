import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

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
    <div className={styles.container}>
      {movies.map(({ id, title, poster_path }) => (
        <Movie key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </div>
  );
}
