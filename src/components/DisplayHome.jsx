/* eslint-disable react/no-unescaped-entities */
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-xl">
          Songs for Esther's journey back home
        </h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <>
              <AlbumItems
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
