"use client";

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/Form/Form";
import Link from "next/link";
import { useAddNewMovieMutation,} from "@/redux/services/moviesApi";

export default function AddMoviePage() {
  const [ addNewMovie,  ] = useAddNewMovieMutation();
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
        defaultValue: "",
      },
      {
        type: "text",
        name: "genre",
        placeholder: "Comedy",
        label: "Жанр",
        required: true,
        defaultValue: "",
      },
      {
        type: "text",
        name: "description",
        placeholder: "Традиционный фильм для всей семьи на новый год",
        label: "Описание",
        required: true,
        defaultValue: "",
      },
      {
        type: "text",
        name: "actors",
        placeholder: "Андрей Мягков, Барбара Брыльска, Юрий Яковлев",
        label: "Актеры",
        required: true,
        defaultValue: "",
      },

    ] );
  }, [] );

  const onSubmit = async(data) => {
    const movieData = {
      id: new Date().getTime(),
      name: data.name,
      genre: data.genre,
      description: data.description,
      actors: data.actors.split( "," ),
      poster: "/images/poster_any.png",
    };

    await addNewMovie( movieData ).unwrap;
    setSuccess( true );
    setTimeout( () => {
      setSuccess( false );
    }, 2000 );
  };


  return (
    <section className={ styles[ "add-movie" ] }>
      <h2 className={ `title ${ styles[ "add-movie__title" ] }` }>Добавить новый фильм</h2>

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
        isSuccess &&
        <>
          <p>Фильм успешно добавлен</p>
          <p className={ styles[ "add-movie__comment" ] }>(Ищите его в конце списка)</p>
        </>
      }
    </section>
  );
}