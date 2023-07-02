import "./entries.css";
import { FavoriteButton } from "../FavoriteButton/favorite-button";

export function Entries({
  date,
  motto,
  notes,
  id,
  isFavorite,
  onToggleFavorite,
  onDeleteEntry,
}) {
  return (
    <>
      <section className="entry-section">
        <p>{date}</p>
        <h2 className="card__name">{motto}</h2>
        <FavoriteButton
          id={id}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <p>{notes}</p>
        <button className="deleteButton" onClick={() => onDeleteEntry(id)}>Delete</button>
      </section>
    </>
  );
}
