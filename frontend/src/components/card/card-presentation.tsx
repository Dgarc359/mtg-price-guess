import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";

interface ICard {
  cardData: Card | undefined;
  // imageOnClick?: (event?: MouseEvent<HTMLImageElement, MouseEvent>) => void,
  imageOnClick?: (event?: unknown) => void;
}

export const CardView = (props: ICard) => {
  const {
    imageOnClick,
  } = props;
  return (
    <div
      id={`card-container`}
      className={cn([
        "flex",
        "max-sm:w-full max-sm:h-[50vh]",
        "md:w-1/2 md:h-screen md:justify-center md:align-middle md:8",
      ])}
    >
      <img
        src={props.cardData?.image_uris?.art_crop}
        alt=""
        className="blur-xl"
      />

      <div
        id="div-img-container"
        className={cn([
          "absolute",
          "max-sm:h-1/2", 
        ])}
      >
        <img
          id={props.cardData?.name}
          src={props.cardData?.image_uris?.png}
          alt=""
          className={cn([
            "hover:cursor-pointer",
            "max-sm:w-2/6",
            "md:w-1/4 md:h-1/2 md:m-auto",
          ])}
          onClick={imageOnClick}
        />
        <div className={cn([
          "max-sm:absolute",
          "w-1/4 text-center m-auto mt-8"
        ])}>
          <div id="card-name" className="text-center text-3xl">
            {props.cardData?.name}
          </div>
          <div id="card-action" className={cn([
            "md:text-center"
          ])}>
            {props.cardData?.oracle_text}
          </div>
        </div>
      </div>
    </div>
  );
};
