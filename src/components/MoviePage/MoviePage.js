// // import { useParams } from "react-router-dom";
// import styles from "./MoviePage.module.scss";
// import Loading from "../Loading/Loading";
// import Link from "next/link";
// import Image from "next/image";
// import { useAppSelector } from "@/redux/services/hooks";
//
// export default function MoviePage() {
//   const { movies, isLoading, error } = useAppSelector( (state) => state.movies );
//
//   const movie = movies.find( item => item.id === Number( movieId ) );
//
//   return (
//     <section>
//       {
//         isLoading ? (
//           <>
//             <Link href="/" className={ `link ${ styles[ "movie-page__link" ] }` }>Вернуться к списку фильмов</Link>
//             <Loading />
//           </>
//         ) : error ? (
//           <>
//             <Link href="/" className={ `link ${ styles[ "movie-page__link" ] }` }>Вернуться к списку фильмов</Link>
//             <p> Ошибка загрузки: { error }</p>
//           </>
//         ) : (
//           <>
//             <h1 className={ styles[ "movie-page__main-title" ] }>{ movie.name }</h1>
//             <Link href="/" className={ `link ${ styles[ "movie-page__link" ] }` }>Вернуться к списку фильмов</Link>
//
//             <div className={ styles[ "movie-page" ] } id={ movie.id }>
//               <div className={ styles[ "movie-page__img-block" ] }>
//                 <Image src={ movie.poster } className={ styles[ "movie-page__img" ] } alt={ movie.name } width={250} height={300} />
//               </div>
//               <div className={ styles[ "movie-page__text-block" ] }>
//                 <h3 className={ styles[ "movie-page__title" ] }>
//                   <span className={ styles[ "movie-page__span" ] }>Название: </span>
//                   { movie.name }
//                 </h3>
//                 <p className={ styles[ "movie-page__text" ] }>
//                   <span className={ styles[ "movie-page__span" ] }>Описание: </span>
//                   { movie.description }
//                 </p>
//                 <p className={ styles[ "movie-page__text" ] }>
//                   <span className={ styles[ "movie-page__span" ] }>Жанр: </span>
//                   { movie.genre }
//                 </p>
//                 <p className={ styles[ "movie-page__text" ] }>
//                   <span className={ styles[ "movie-page__span" ] }>Актеры: </span>
//                   { movie.actors.map( item => `${ item }, ` ) }
//                 </p>
//                 <p className={ `${ styles[ "movie-page__text" ] }` }>
//                   <span className={ styles[ "movie-page__span" ] }>Рейтинг: </span>
//                   { movie.rating }
//                 </p>
//
//               </div>
//             </div>
//           </>
//         )
//       }
//
//
//     </section>
//   );
// }