import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import AlertDialog from "./components/FormDialog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>hello home</h1>
    </>
  );
}
