import "./main.element.css"
import { Input } from "../Input/inpute";
import { Entries } from "../Entries/entries";
import { Fragment } from "react";

export function Main({
  entries,
  onAddEntry,
  onToggleFavorite,
  onDeleteEntry,
}) {
  return (
    <main>
      <Input onAddEntry={onAddEntry} />
      {entries.map((entry) => (
        <Fragment key={entry.id}>
          <Entries
            onToggleFavorite={onToggleFavorite}
            id={entry.id}
            isFavorite={entry.isFavorite}
            date={entry.date}
            motto={entry.motto}
            notes={entry.notes}
            onDeleteEntry={onDeleteEntry}
          />
        </Fragment>
      ))}
    </main>
  );
}
