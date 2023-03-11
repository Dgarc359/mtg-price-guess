import { Card } from "../../lib/types";

interface ICard {
  card: Card | undefined
}

export const CardView = (props: ICard) => {
  return (
    <div
      id="card-container"
      className={` w-1/2 h-screen flex justify-center align-middle my-8`}
    >
      <img src={props.card?.image_uris?.art_crop} alt="" className="blur-3xl" />
      <div className="absolute">
        <img
          src={props.card?.image_uris?.png}
          alt=""
          className=" w-1/4 h-1/2 hover:cursor-pointer m-auto"
        />
        <div className="w-1/4 text-center m-auto mt-8">
          <div className="text-center text-3xl">{props.card?.name}</div>
          <div className="text-center">{props.card?.oracle_text}</div>
        </div>
      </div>
    </div>
  );
};
