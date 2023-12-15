"use client"

import styles from './page.module.scss';
import Link from "next/link";
import MovieCard from '../components/MovieCard/MovieCard';
import SearchForm from '../components/SearchForm/SearchForm';
import Loading from '../components/Loading/Loading';
import Button from '../components/Button/Button';
import { useGetMoviesQuery } from "@/redux/services/moviesApi";


export default function HomePage() {
  const { data: movies, isLoading, error, getMovies} = useGetMoviesQuery();

  const resetMovies = ()=>{
    getMovies()
  }

  return (
    <section className={styles.movies}>
      <h2 className={`title ${styles.movies__title}`}>Коллекция фильмов на Новый год</h2>
      <SearchForm />
      <Link href="/add-movie" className={`link ${styles['movies__link']}`}>
        Добавить новый фильм
      </Link>
      {isLoading ? (
        <Loading />
      ) : !!error ? (
        <>
          <p className="error">Ошибка загрузки: {error} </p>
          <Button text="Перезагрузить" func={resetMovies} />
        </>
      ) : (
        <ul className={styles['movies__list']}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </section>
  );
}


