import styles from "./SearchForm.module.scss";
import { useState } from "react";
// import { searchMovie } from "../../actions";

import FoundedResult from "../FoundedResult/FoundedResult";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { useGetMoviesQuery } from "@/redux/services/api/moviesApi";
import { foundedResults } from "@/redux/services/foundedResultsSlice";
import { useAppDispatch } from "@/redux/services/hooks";

export default function SearchForm() {
  const { data: movies, isLoading, error } = useGetMoviesQuery();
  const [ nothingFound, setNothingFound ] = useState( false );
  const dispatch = useAppDispatch();
  const [ isShowResults, setShowResults ] = useState( false );
  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm( {
    mode: "onTouched",
  } );

  const onSubmit = async() => {

    setShowResults( true );
    const result = movies.filter( item => {
      const value = getValues().search;
      return item.name.toLowerCase().includes( value.toLowerCase() ) || item.description.toLowerCase().includes( value.toLowerCase() ) || item.genre.toLowerCase().includes( value.toLowerCase() );
    } );

    if( result.length === 0 ) {
      // setShowResults( false );
      setNothingFound( true );
      setValue( "search", "" );
      dispatch( foundedResults( result ) );
      return;
    }

    // setFoundedMovies(result)
    dispatch( foundedResults( result ) );
    setValue( "search", "" );

  };

  return (
    <div
      className={ styles[ "search-form__wrapper" ] }
    >
      <form onSubmit={ handleSubmit( onSubmit ) } className={ styles[ "search-form" ] }>
        <div className={ styles[ "search-form__item" ] }>
          <label htmlFor="name" className={ styles[ "search-form__label" ] }>Поиск по названию, описанию, жанру
            фильма:</label>
          <input
            id="name"
            name="search"
            type="text"
            className={ styles[ "search-form__input" ] }
            placeholder="Комедия"
            { ...register( "search", {
                required: "Пожалуйста, введите не менее 3-x символов",
                minLength: {
                  value: 3,
                  message: "Должно быть не менее 3-x символов",
                },
              }
            ) }

          />
        </div>
        { errors.search && <p className={ styles[ "search-form--error" ] }>{ errors.search.message }</p> }
        <Button text="Искать" />

      </form>
      {
        isShowResults && <FoundedResult nothingFound={ nothingFound } />
      }
    </div>
  );
}