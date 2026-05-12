import { getArticles } from "@/Api/artigos";
import List from "./components/List";
import Title from "./components/Title";


export default async function Home() {
  const Artigos = await getArticles()
  return (
    <>
      <Title title={"Inicio"}/>
      <List artigos={Artigos}/>
    </>
  );
}
