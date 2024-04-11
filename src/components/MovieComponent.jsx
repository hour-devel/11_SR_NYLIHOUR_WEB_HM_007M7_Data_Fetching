import { getAllMovie, getMovieByGenre } from "@/service/movie.service";
import React from "react";
import Link from "next/link";
import CardComponent from "./CardComponent";

const MovieComponent = async ({ genre_moive }) => {
  const data = await getAllMovie();

  function removeArrDuplicates(array) {
    const list_genre = [];
    for (let i = 0; i < array.length; i++) {
      if (list_genre.indexOf(array[i]) === -1) {
        list_genre.push(array[i]);
      }
    }
    return list_genre;  
  }
  const list_genre = removeArrDuplicates(genre_moive);
  const genre_data = await getMovieByGenre(list_genre);

  return (
    <>
      <div className="bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')] bg-cover h-[100vh] w-[100%] flex justify-center items-start overflow-hidden relative">
        <div className="w-[100%] h-[100%] bg-[#0000007e] absolute left-0 top-0 z-10"></div>
      </div>
      <div className="w-[100%] h-auto bg-[#38130D] grid grid-cols-1">
        {/* all movie */}
        <CardComponent genre={data} name={"All moive"}/>
        {/* movie genre */}
        {genre_data.map(i =>(
            <CardComponent genre={i} name={list_genre}/>  
        ))}
      </div>
    </>
  );
};

export default MovieComponent;
