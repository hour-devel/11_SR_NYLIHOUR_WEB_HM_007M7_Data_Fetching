import { getMovieById } from '@/service/movie.service';
import React from 'react'
import { format } from 'date-fns';

const MovieDetailComponent = async ({params}) => {
    const {payload} = await getMovieById(params.movieId);
    const star = Math.round(payload.rating);
    function filter_star(stars){
        const list_star = [];
        for (let i = 1; i <= stars; i++) {
          list_star.push(<i className="fa-solid fa-star text-yellow-500"></i>);
        }
        if (list_star.length <= 5) {
          for (let i = list_star.length; i < 5; i++) {
            list_star.push(<i className="fa-regular fa-star text-yellow-500"></i>);
          }
        }
        return list_star;
    }
  return (
    <div className='w-[100%] h-[100vh] bg-[#38130D]'>
        <div className='w-[90%] h-[100%] flex items-center  m-auto'>
            <div className='w-[70%] h-[85%] float-left mt-[50px]'>
                {payload.image == "" ? 
                    (<img src="https://www.slashgear.com/wp-content/uploads/2021/04/fast-furious-f9-1280x720.jpg" className="h-[80%] w-[90%]"/>) 
                    : 
                    <img src={payload.image} alt="" className='w-[100%] h-[100%]' />
                }
            </div>
            <div className='w-[30%] h-[85%] float-left p-[20px] text-white mt-[50px]'>
                <h2 className='font-bold text-[30px]'>{payload.director}</h2>
                <h3>{payload.runtime} minutes</h3>
                <i className='w-[100%]'>{payload.genre}</i>
                <div className="rating w-[100%]">
                    {filter_star(star)}
                </div>
                <h2 className='font-bold text-[30px] mt-[30px]'>{payload.movie_title} ({payload.released_year})</h2>
                <p className='mb-[100px] line-clamp-6'>
                    {payload.description}
                </p>
                <span>
                    {format(payload.posted_at, 'LLLL d, yyyy, h:mm:ssa')}
                </span>
            </div>
        </div>
    </div>
  )
}

export default MovieDetailComponent