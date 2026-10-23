// import React from "react";
import { useState } from "react";

type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; //skala do 10

interface MovieProps {
  posterUrl: string;
  title: string;
  releaseYear: number;
  rating: Rating;
}

function Movie(props: MovieProps) {
  return (
    <div className="card h-100" onClick={() => console.log("Wybrano film " + props.title)}>
      <img
        style={{ height: 375, objectFit: "contain" }}
        src={props.posterUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.releaseYear}</p>
        <p className="card-text">Ocena: {props.rating}</p>
        {props.rating >= 8 && (
          <span className="badge text-bg-success">Polecane</span>
        )}
      </div>
    </div>
  );
}

interface BookProps {
  coverUrl: string;
  title: string;
  releaseYear: number;
  numPages: number;
}

function Book(props: BookProps) {
  return (
    <div className="card h-100">
      <img
        style={{ height: 375, objectFit: "contain" }}
        src={props.coverUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">
          {props.releaseYear} &bull; {props.numPages ?? 0} stron
        </p>
        {props.releaseYear < 2000 && (
          <span className="badge text-bg-secondary">Klasyka</span>
        )}
      </div>
    </div>
  );
}

interface TrackProps {
  index: number;
  title: string;
  length: string;
}

function Track(props: TrackProps) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td className="text-end">{props.length}</td>
    </tr>
  );
}

interface AlbumProps {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  tracks: TrackProps[];
}

function Album(props: AlbumProps) {
  return (
    <div className="card h-100">
      <img
        style={{ height: 375, objectFit: "contain" }}
        src={props.coverUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">
          {props.band} &bull; {props.releaseYear} &bull; {props.genre}
        </p>

        {props.tracks.length === 0 ? (
          <div className="alert alert-info" role="alert">
            Brak utworów w tym albumie.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>L.p.</th>
                  <th>Tytuł</th>
                  <th className="text-end">Czas trwania</th>
                </tr>
              </thead>
              <tbody>
                {props.tracks.map((track) => (
                  <Track
                    key={track.index}
                    index={track.index}
                    title={track.title}
                    length={track.length}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  //zawijane
  const [isMoviesOpen, setIsMoviesOpen] = useState(true);
  const [isBooksOpen, setIsBooksOpen] = useState(true);
  const [isAlbumsOpen, setIsAlbumsOpen] = useState(true);
  const [is2010Open, setIs2010Open] = useState(true);
  const [isSortedBooksOpen, setIsSortedBooksOpen] = useState(true);
  const [isAlbumsMostTracksOpen, setIsAlbumsMostTracksOpen] = useState(true);

  const movies: MovieProps[] = [
    { releaseYear: 1999, title: "The Matrix", posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg", rating: 9 },
    { releaseYear: 2014, title: "Interstellar", posterUrl: "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp", rating: 8 },
    { releaseYear: 2003, title: "Taxi 3", posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/Taxi_3_film.jpg", rating: 5 },
    { releaseYear: 2011, title: "Inception", posterUrl: "https://cdng.europosters.eu/pod_public/1300/263129.jpg", rating: 9 },
  ];

  const books: BookProps[] = [
    { releaseYear: 2019, numPages: 272, title: "Atomowe nawyki", coverUrl: "https://files.legimi.com/images/44263fa8e9e4caa1720c7efd30d695e6/w512_u90.jpg" },
    { releaseYear: 2012, numPages: 667, title: "Pułapki myślenia. O myśleniu szybkim i wolnym", coverUrl: "https://static.profinfo.pl/storage/image/core_products/2026/8/23/196950ec8988246ea07ed9965506dcb3/admin/preview/6999907590569.webp" },
    { releaseYear: 2025, numPages: 304, title: "Tiny experiments", coverUrl: "https://m.media-amazon.com/images/I/61rUfWyyfoL._AC_UF1000,1000_QL80_.jpg" },
    { releaseYear: 1999, numPages: 352, title: "Pragmatyczny programista", coverUrl: "https://static01.helion.com.pl/global/okladki/vbig/prag2v.jpg" }
  ];

  const albums: AlbumProps[] = [
    {
      releaseYear: 2005, band: "Pendulum", title: "Hold Your Colour", genre: "drum'n'bass", coverUrl: "https://muzikercdn.com/uploads/products/11924/1192412/main_70a2a6cc.jpg",
      tracks: [
        { index: 1, title: "Prelude", length: "0:52" },
        { index: 2, title: "Slam", length: "5:44" },
        { index: 3, title: "Plasticworld", length: "6:21" },
        { index: 4, title: "Fasten Your Seatbelt", length: "6:38" },
        { index: 5, title: "Through the Loop", length: "6:13" },
        { index: 6, title: "Sounds of Life", length: "5:21" },
        { index: 7, title: "Girl in the Fire", length: "4:53" },
        { index: 8, title: "Tarantula", length: "5:31" },
        { index: 9, title: "Out Here", length: "6:07" },
        { index: 10, title: "Hold Your Colour", length: "5:28" },
        { index: 11, title: "The Terminal", length: "5:42" },
        { index: 12, title: "Streamline", length: "5:23" },
        { index: 13, title: "Another Planet", length: "7:38" },
        { index: 14, title: "Still Grey", length: "7:51" },
        { index: 15, title: "Axle Grinder", length: "5:30" }
      ]
    },

    {
      releaseYear: 2003, band: "Overseer", title: "Wreckage", genre: "big beat", coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Overseer_-_Wreckage.jpg",
      tracks: [
        { index: 1, title: "Slayed", length: "4:47" },
        { index: 2, title: "Stompbox", length: "3:53" },
        { index: 3, title: "Supermoves", length: "4:47" },
        { index: 4, title: "Velocity Shift", length: "2:08" },
        { index: 5, title: "Horndog", length: "3:31" },
        { index: 6, title: "Meteorology", length: "5:32" },
        { index: 7, title: "Aquaplane", length: "5:14" },
        { index: 8, title: "Doomsday", length: "3:14" },
        { index: 9, title: "Basstrap", length: "4:03" },
        { index: 10, title: "Sparks", length: "6:02" },
        { index: 11, title: "Never", length: "6:36" },
        { index: 12, title: "Heligoland", length: "26:56" }
      ]
    },

    {
      releaseYear: 2001, band: "Daft Punk", title: "Discovery", genre: "disco house", coverUrl: "https://ecsmedia.pl/c/discovery-b-iext197156812.jpg",
      tracks: [
        { index: 1, title: "One More Time", length: "5:20" },
        { index: 2, title: "Aerodynamic", length: "3:27" },
        { index: 3, title: "Digital Love", length: "4:58" },
        { index: 4, title: "Harder, Better, Faster, Stronger", length: "3:45" },
        { index: 5, title: "Crescendolls", length: "3:31" },
        { index: 6, title: "Nightvision", length: "1:44" },
        { index: 7, title: "Superheroes", length: "3:57" },
        { index: 8, title: "High Life", length: "3:22" },
        { index: 9, title: "Something About Us", length: "3:51" },
        { index: 10, title: "Voyager", length: "3:47" },
        { index: 11, title: "Veridis Quo", length: "5:44" },
        { index: 12, title: "Short Circuit", length: "3:26" },
        { index: 13, title: "Face to Face", length: "3:58" },
        { index: 14, title: "Too Long", length: "10:00" }
      ]
    },

    {
      releaseYear: 2000, band: "The Prodigy", title: "The Fat of the Land", genre: "big beat", coverUrl: "https://tse3.mm.bing.net/th/id/OIP.nM9IAdft8oCT6ApAMYYIsgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      tracks: []
    }
  ];

  movies.sort((a, b) => a.title.localeCompare(b.title)); //porownuje tytuly i sortuje
  books.sort((a, b) => a.title.localeCompare(b.title));
  albums.sort((a, b) => a.title.localeCompare(b.title));

  const moviesAfter2010 = movies.filter((movie) => movie.releaseYear > 2010);

  const sortedBooks = [...books].sort((a, b) => b.releaseYear - a.releaseYear);

  const albumsMostTracks = [...albums].sort((a, b) => b.tracks.length - a.tracks.length)[0];
  //.. to kopia, [0] bierze od pierwszego

  return (
    <div className="container my-4">

      <h1 onClick={() => setIsMoviesOpen(!isMoviesOpen)}>{isMoviesOpen ? "⏷" : "⏵"} Filmy</h1>

      {isMoviesOpen && (
        <div id="allmovies">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {movies.map((movie) => (
              <div className="col" key={movie.title}>
                <Movie {...movie} />
              </div>
            ))}
          </div>
          <h2 onClick={() => setIs2010Open(!is2010Open)}>{is2010Open ? "⏷" : "⏵"} Filmy wydane po 2010 roku</h2>

          {is2010Open && (
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {moviesAfter2010.map((movie) => (
                <div className="col" key={movie.title}>
                  <Movie {...movie} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}


      <h1 onClick={() => setIsBooksOpen(!isBooksOpen)}>{isBooksOpen ? "⏷" : "⏵"} Książki</h1>

      {isBooksOpen && (
        <div id="allalbums">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {books.map((book) => (
            <div className="col" key={book.title}>
              <Book {...book} />
            </div>
          ))}
          </div>
          <h1 onClick={() => setIsSortedBooksOpen(!isSortedBooksOpen)}>{isSortedBooksOpen ? "⏷" : "⏵"} Posortowane książki (od najnowszej)</h1>

          {isSortedBooksOpen && (
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {sortedBooks.map((book) => (
                <div className="col" key={book.title}>
                  <Book {...book} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <h1 onClick={() => setIsAlbumsOpen(!isAlbumsOpen)}>{isAlbumsOpen ? "⏷" : "⏵"} Albumy</h1>

      {isAlbumsOpen && (
        <div id="allbooks">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {albums.map((album) => (
              <div className="col" key={album.title}>
                <Album {...album} />
              </div>
            ))}
            </div>
            <h1 onClick={() => setIsAlbumsMostTracksOpen(!isAlbumsMostTracksOpen)}>{isAlbumsMostTracksOpen ? "⏷" : "⏵"} Album z największą ilością utworów</h1>

            {isAlbumsMostTracksOpen && albumsMostTracks && (
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                <div className="col">
                  <Album {...albumsMostTracks} />
                </div>
              </div>
            )}
          </div>
      )}

      {/* <h1>Filmy polecane</h1>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {recomended.map((movie)=> (<div key={movie.title}>
          <Movie
            releaseYear={movie.releaseYear}
            title={movie.title}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
          /> 
          </div>
        ))}

        </div>


        <h1>Książki klasyczne</h1>

        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {classicBooks.map((book)=> (<div key={book.title}>
          <Book
            releaseYear={book.releaseYear}
            title={book.title}
            coverUrl={book.coverUrl}
            numPages={book.numPages}
          /> 
          </div>
        ))}

        </div> */}







    </div>
  );
}

export default App;