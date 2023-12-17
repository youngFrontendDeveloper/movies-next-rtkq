"use client"

import styles from './page.module.scss';
import Link from "next/link";
import MovieCard from '../components/MovieCard/MovieCard';
import SearchForm from '../components/SearchForm/SearchForm';
import Loading from '../components/Loading/Loading';
import Button from '../components/Button/Button';
import { useGetMoviesQuery } from "@/redux/services/api/moviesApi";
import Image from "next/image";
import Title from "@/components/Title/Title";


export default function HomePage() {
  const { data: movies, isLoading, error, getMovies} = useGetMoviesQuery();

  const resetMovies = async ()=>{
    await getMovies()
  }

  return (
    <section className={styles.movies}>
      <Title titleClass={styles.movies__title} title="Коллекция фильмов на Новый год"/>
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
      )
      }
    </section>
  );
}


