import styles from "./MovieCard.module.scss";
import StarIcon from "../StarIcon/StarIcon";
import Button from "../Button/Button";
import Link from "next/link";
import { useDeleteMovieMutation } from "@/redux/services/moviesApi";
import Image from "next/image";


export default function MovieCard({ movie }) {
  const [ deleteMovie ] = useDeleteMovieMutation( movie.id );

  const handleDelete = async() => {
    await deleteMovie( movie.id );
  };

  return (
    <>
      {
        <li className={ styles.movie } id={ movie.id } key={ movie.id }>
          <div className={ styles[ "movie__img-block" ] }>
            <Link href={ `/${ movie.id }` } className="link">
              <Image src={ movie.poster } className={ styles.movie__img } alt={ movie.name } width={250} height={300}/>
            </Link>
          </div>
          <div className={ styles[ "movie__text-block" ] }>
            <h3 className={ styles.movie__title }><span
              className={ styles.movie__span }
            >Название: </span> { movie.name }
            </h3>
            <p className={ styles.movie__description }><span
              className={ styles.movie__span }
            >Описание:</span> { movie.description }</p>
            <p>
              <span className={ styles.movie__span }>Рейтинг: </span>
              { movie.rating } <StarIcon />
            </p>

            <div className={ styles[ "movie__btn-wrap" ] }>
              <Link href={ `/change-movie/${ movie.id }` } className={ styles[ "movie__change" ] }>Изменить</Link>
              <Button btnClass="btn--bg-red" func={ handleDelete } text="Удалить" />
            </div>

          </div>
        </li>
      }
    </>
  );
}