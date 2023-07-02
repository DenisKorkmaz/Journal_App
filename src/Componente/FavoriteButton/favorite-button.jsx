import { StarEmpty } from "./Star";
import { StarFilled } from "./StarFilled";
import "./favorite-button.css";

export function FavoriteButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <button className="button__favorite" onClick={() => onToggleFavorite(id)}>
      {isFavorite ? <StarFilled /> : <StarEmpty />}
    </button>
  );
}
