import MovieComponent from "@/components/MovieComponent";
import { getAllMovie } from "@/service/movie.service";

export default async function Home() {
  const data = await getAllMovie();
  const genre_moive=[];
  return (
      <div className="h-[100vh]">
          {data.payload?.map(e => {
            genre_moive.push(e.genre);
          })}
          <MovieComponent genre_moive={genre_moive}/>
      </div>
  );
}
