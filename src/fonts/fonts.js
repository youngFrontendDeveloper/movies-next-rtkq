import { Rubik_Dirt } from "next/font/google";
import { Inter } from "next/font/google";
import { Marck_Script } from "next/font/google";


export const rubikDirt = Rubik_Dirt( {
  weight: "400",
  variable: "--logoFont",
  subsets: [ "cyrillic" ],
  display: "swap",
  fallback: [ "system-ui", "Times new Roman" ]
} );

export const inter = Inter( {
    variable: "--primaryFont",
    subsets: [ "cyrillic" ],
    display: "swap",
    fallback: [ "system-ui", "arial" ]
  }
);

export const marckScript  = Marck_Script({
  weight: "400",
  variable: "--logoFont",
  subsets: [ "cyrillic" ],
  display: "swap",
  fallback: [ "system-ui", "Times new Roman" ]
})