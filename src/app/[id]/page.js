"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetMovieByIdQuery } from "@/redux/services/moviesApi";
import Loading from "@/components/Loading/Loading";


export default function MoviePage() {
  const pathName = usePathname();
  const path = pathName.slice( 1 );
  const { data, isLoading, error } = useGetMovieByIdQuery( path );

  return (
    <section>
      {
        isLoading ? (
          <>
            <Link href="/" className={ `link ${ styles[ "movie-page__link" ] }` }>Вернуться к списку фильмов</Link>
            <Loading />
          </>
        ) : error ? (
          <>
            <Link href="/" className={ `link ${ styles[ "movie-page__link" ] }` }>Вернуться к списку фильмов</Link>
            <p> Ошибка загрузки: { error }</p>
          </>
        ) : (
          <>
            <h1 className={ styles[ "movie-page__main-title" ] }>{ data.name }</h1>
            <Link href="/" className={ `link ${ styles[ "movie-page__link" ] }` }>Вернуться к списку фильмов</Link>

            <div className={ styles[ "movie-page" ] } id={ data.id }>
              <div className={ styles[ "movie-page__img-block" ] }>
                <img src={ data.poster } className={ styles[ "movie-page__img" ] } alt={ data.name } />
              </div>
              <div className={ styles[ "movie-page__text-block" ] }>
                <h3 className={ styles[ "movie-page__title" ] }>
                  <span className={ styles[ "movie-page__span" ] }>Название: </span>
                  { data.name }
                </h3>
                <p className={ styles[ "movie-page__text" ] }>
                  <span className={ styles[ "movie-page__span" ] }>Описание: </span>
                  { data.description }
                </p>
                <p className={ styles[ "movie-page__text" ] }>
                  <span className={ styles[ "movie-page__span" ] }>Жанр: </span>
                  { data.genre }
                </p>
                <p className={ styles[ "movie-page__text" ] }>
                  <span className={ styles[ "movie-page__span" ] }>Актеры: </span>
                  { data.actors.map( item => `${ item }, ` ) }
                </p>
                <p className={ `${ styles[ "movie-page__text" ] }` }>
                  <span className={ styles[ "movie-page__span" ] }>Рейтинг: </span>
                  { data.rating }
                </p>

              </div>
            </div>
          </>
        )
      }


    </section>
  );
}