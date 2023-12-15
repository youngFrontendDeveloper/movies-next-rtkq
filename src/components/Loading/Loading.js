import styles from "./Loading.module.scss";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={ styles[ "loading" ] }>
      <Image src="/images/loading.svg" width={ 64 } height={ 64 } alt="Идет загрузка" />
    </div>
  );
}