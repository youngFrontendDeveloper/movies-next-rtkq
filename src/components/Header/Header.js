import styles from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import backgroundImage from "../../../public/images/header.jpg"

export default function Header() {
  const headerStyle ={
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "130px",
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  }

  return (
    <header className={ styles.header } style={headerStyle}>
    <div className="container header__container">
      <Logo />
    </div>
    </header>
  );
}