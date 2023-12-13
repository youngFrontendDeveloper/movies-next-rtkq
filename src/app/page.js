"use client"

import styles from './page.module.scss';
import { useEffect } from 'react';
import Link from "next/link";
import MovieCard from '../components/MovieCard/MovieCard';
import SearchForm from '../components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import Button from '../components/Button/Button';


export default function Movies() {
  // const { movies } = useSelector((state) => state.movies);
  // const isLoading = useSelector(
  //   (state) => state.movies.request.status === REQUEST_STATUS.LOADING
  // );
  // const error = useSelector((state) => state.movies.request.error);
  // const dispatch = useDispatch();
  //
  // const requestMovies = async () => {
  //   dispatch(getAllMovies());
  // };
  //
  // useEffect(() => {
  //   requestMovies();
  // }, []);

  return (
    <section className={styles.movies}>
      <h1 className="hidden">
        Тестовое задание на вакансию Frontend разработчик
      </h1>
      <h2 className={`title ${styles.movies__title}`}>Коллекция фильмов</h2>
      <SearchForm />
      <Link href="/movie/add" className={`link ${styles['movies__link']}`}>
        Добавить новый фильм
      </Link>
      {/*{isLoading ? (*/}
      {/*  <Loading />*/}
      {/*) : !!error ? (*/}
      {/*  <>*/}
      {/*    <p className="error">Ошибка загрузки: {error} </p>*/}
      {/*    <Button text="Перезагрузить" func={requestMovies} />*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <ul className={styles['movies__list']}>*/}
      {/*    {movies.map((movie) => (*/}
      {/*      <MovieCard movie={movie} key={movie.id} />*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*)}*/}
    </section>
  );
}
