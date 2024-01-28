import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/movies/${id}`);
  return await res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>🌟 {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          👉 Go to HomePage
        </a>
      </div>
    </div>
  );
}
