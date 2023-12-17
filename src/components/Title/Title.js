import styles from "./Title.module.scss";
import Image from "next/image";

export default function Title({ titleClass, title }) {
  return (
    <>
      <h2 className={ `${titleClass}  ${ styles[ "title" ] }` }>{ title }      </h2>
    </>
  );
}