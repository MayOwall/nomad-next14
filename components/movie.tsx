"use client";
import Link from "next/link";
import style from "../styles/movie.module.css";

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: MovieProps) {
  return (
    <Link href={`/movies/${id}`}>
      <div key={id} className={style.movie}>
        <img src={poster_path} alt={title} />
        <div>{title}</div>
      </div>
    </Link>
  );
}
