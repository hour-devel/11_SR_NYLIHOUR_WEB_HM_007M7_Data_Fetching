export const getAllMovie = async () => {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api',{cache : "no-store"});
    const data  = await res.json();
    return data;
}

export const getMovieById = async (id) => {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const data  = await res.json();
    return data;
}

export const getMovieByGenre = async (genres) => {
    const data_res = [];
    for(let genre of genres){
        const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
        const data  = await res.json();
        data_res.push(data);
    }
    return data_res;
}

