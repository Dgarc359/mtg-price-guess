import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";

interface ICard {
  cardData: Card | undefined
}

export const CardView = (props: ICard) => {
  return (
    <div
      id="card-container"
      className={
        cn([
          "sm:w-full sm:h-1/2",
          'md:w-1/2 md:h-screen md:flex md:justify-center md:align-middle md:8'
        ])
      }
    >
      <img src={props.cardData?.image_uris?.art_crop} alt="" className="blur-3xl" />
      <div className="absolute">
        <img
          id="image"
          src={props.cardData?.image_uris?.png}
          alt=""
          className={
            cn([
              "hover:cursor",
              "max-sm:w-2/6",
              "md:w-1/4 md:h-1/2 md:m-auto"
            ])
          }
        />
        <div className="w-1/4 text-center m-auto mt-8">
          <div id="card-name" className="text-center text-3xl">{props.cardData?.name}</div>
          <div id="card-action" className="text-center">{props.cardData?.oracle_text}</div>
        </div>
      </div>
    </div>
  );
};
