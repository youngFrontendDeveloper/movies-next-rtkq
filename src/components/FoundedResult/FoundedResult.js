import styles from "./FoundedResult.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function FoundedResult({ nothingFound }) {
  const foundedMovies = useSelector( state => state.foundedResults.results );

  return (
    <div className={ styles[ "search-result" ] }>
      <h3>Результаты поиска:</h3>
      {
        foundedMovies.length > 0 ? (
          <ol>
            {
              foundedMovies.map( item => {
                return (

                  <li key={ `search-${ item.id }` } className={ styles[ "search-result__item" ] }>
                    <Link href={ `/${ item.id }` } className={ styles[ "search-result__link" ] }>
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
  );
}