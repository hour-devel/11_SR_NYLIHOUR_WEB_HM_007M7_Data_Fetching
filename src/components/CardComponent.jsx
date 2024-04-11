import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardComponent = ({ genre, name }) => {
  let name_genre=name;
  function getMovieGenre(){
    genre.payload?.map(ele => {
      for(let i=0;i<name.length;i++ ){
        if(ele.genre === name[i]){
          name_genre = name[i]
        }
      }
    })
    return name_genre;
  }
  getMovieGenre();
  return (
    <div className="w-[96%] h-[350px] float-left m-auto mt-5">
      <h1 className="h-[12%] w-[100%] float-left flex items-center p-0 m-0 text-[20px] font-bold text-white">
        {name_genre}  <i class="fa-solid fa-chevron-right"></i>
      </h1>
      <div className="h-[350px] w-[100%] float-left">
        <Carousel>
          <CarouselContent className="gap-5 h-[300px] ml-2">
            {genre.payload?.map((i) => (
              <div className="carousel-item w-[300px] bg-white rounded-2xl grid grid-cols-1" key={i.movie_id}>
                <Link href={`/view-movie-detail/${i.movie_id}`}>
                  <div
                    className="card bg-base-100 shadow-xl w-[100%] h-[100%] overflow-hidden"
                    key={i.movie_id}
                  >
                    <div className="h-[60%] flex justify-center items-center bg-white">
                      {i.image == "" ? (
                        <img
                          src="https://www.slashgear.com/wp-content/uploads/2021/04/fast-furious-f9-1280x720.jpg"
                          className="h-[80%] w-[90%]"
                        />
                      ) : (
                        <img src={i.image} className="h-[80%] w-[90%]" />
                      )}
                    </div>
                    <div className="card-body h-[40%] bg-white text-black py-[5px] px-[17px]">
                      <h2 className="card-title line-clamp-1">
                        {i.movie_title}
                      </h2>
                      <h6 className="line-clamp-2">{i.description}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CardComponent;
