import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movies }) => {
  return (
    <div className="card sm:card-side bg-gray-900 shadow-xl p-2 ">
      <figure>
        {movies?.primaryImage?.url && (
          <Image
            width={300}
            height={300}
            className=""
            src={movies?.primaryImage?.url}
            alt="Movie"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          movie is released {movies?.releaseYear?.year}
        </h2>
        <p>{movies?.titleText?.text}</p>
        <div className="card-actions justify-end">
          <Link href={`/movies/${movies?.id}`}>
            <button className="btn btn-primary">Watch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
