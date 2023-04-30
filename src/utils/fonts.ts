import { Yanone_Kaffeesatz, Roboto } from "@next/font/google";

export const logoFont = Yanone_Kaffeesatz({
  weight: ["400"],
  subsets: ["latin"],
});

export const mainFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});