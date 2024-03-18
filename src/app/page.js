import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <ChakraProvider>
      <LandingPage/>
    </ChakraProvider>
  );
}
