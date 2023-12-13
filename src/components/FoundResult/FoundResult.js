import styles from "./FoundResult.module.scss";
import Link from "next/link";


export default function FoundResult({foundMovies, nothingFound}){
  return(
    <div className={ styles[ "search-result" ] }>
      <h3>Результаты поиска:</h3>
      {
        foundMovies.length > 0 ? (
          <ol>
            {
              foundMovies.map( item => {
                return (

                  <li key={ `search-${ item.id }` } className={styles["search-result__item"]}>
                    <Link href={ `/movie/${item.id}` } className={styles["search-result__link"]}>
                      { item.name }
                    </Link>
                  </li>

                );
              } )
            }
          </ol>
        ) : nothingFound && <p>По Вашему запросу ничего не найдено</p>
      }
    </div>
  )
}