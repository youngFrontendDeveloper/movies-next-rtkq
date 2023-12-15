"use client";

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../../components/Form/Form";
import Link from "next/link";
import { useEditMovieMutation, useGetMovieByIdQuery } from "@/redux/services/api/moviesApi";
import Loading from "@/components/Loading/Loading";

export default function ChangeMoviePage({ params }) {
  const id = params.id;
  const { data: movie, isLoading, error,  } = useGetMovieByIdQuery( id );
  const [ editMovie ] = useEditMovieMutation( movie );
  const [ isSuccess, setSuccess ] = useState( false );
  const [ formFields, setFormFields ] = useState( [] );
  const { register, handleSubmit, formState: { errors, } } = useForm( {
    mode: "onTouched",
  } );

  useEffect( () => {
    setFormFields( [
      {
        type: "text",
        name: "name",
        placeholder: "Ирония судьбы",
        label: "Название фильма",
        required: true,
        defaultValue: movie?.name,
      },
      {
        type: "text",
        name: "genre",
        placeholder: "Comedy",
        label: "Жанр",
        required: true,
        defaultValue: movie?.genre,
      },
      {
        type: "text",
        name: "description",
        placeholder: "Традиционный фильм для всей семьи на новый год",
        label: "Описание",
        required: true,
        defaultValue: movie?.description,
      },
      {
        type: "text",
        name: "actors",
        placeholder: "Андрей Мягков, Барбара Брыльска, Юрий Яковлев",
        label: "Актеры",
        required: true,
        defaultValue: movie?.actors.join(),
      },

    ] );
  }, [ movie ] );

  const onSubmit = async(data) => {
    const movieData = {
      id: movie.id,
      name: data.name,
      genre: data.genre,
      description: data.description,
      actors: data.actors.split( "," ),
      rating: movie.rating,
    };

    try {
      await editMovie( movieData ).unwrap;

      setSuccess( true );
      setTimeout( () => {
        setSuccess( false );
      }, 2000 );
    } catch( err ) {
      console.log( err.message );
    }


  };
  if( isLoading ) {
    return (
      <Loading />
    );
  }
  if( error ) {
    return (
      <p className="error">Что-то пошло не так</p>
    );
  }

  return (
    <section className={ styles[ "add-movie" ] }>
      <h2
        className={ `title ${ styles[ "add-movie__title" ] }` }
      >Изменить фильм</h2>
      <Link href="/" className={ `link ${ styles[ "add-movie__link" ] }` }>Вернуться к списку фильмов</Link>
      <Form
        formFields={ formFields }
        register={ register }
        errors={ errors }
        handleSubmit={ handleSubmit }
        onSubmit={ onSubmit }
        btnText="Отправить"
      />
      {
        isSuccess && <p>Фильм успешно изменен</p>
      }
    </section>
  );
}