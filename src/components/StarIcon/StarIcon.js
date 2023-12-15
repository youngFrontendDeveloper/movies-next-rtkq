import styles from  "./StarIcon.module.scss";
import Image from "next/image";

export default function StarIcon() {
  return (
    <Image src="images/star-icon.svg" alt="Star" className={ styles.star } width={15} height={15}/>
  );
}

