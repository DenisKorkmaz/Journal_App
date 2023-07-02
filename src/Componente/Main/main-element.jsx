import "./main.element.css";
import { Input } from "../Input/inpute";
import { Tabs } from "../Tabs/tabs";
import { Entries } from "../Entries/entries";
import { Fragment } from "react";

export function Main({
  entries,
  onAddEntry,
  onToggleFavorite,
  showAllEntries,
  showFavoriteEntries,
  allCount,
  favoriteCount,
  filter,
  onDeleteEntry,
  search,
  handleSearch
}) {
  return (
    <main>
      <Input onAddEntry={onAddEntry} />
      <Tabs
        search={search}
        handleSearch={handleSearch}
        filter={filter}
        showAllEntries={showAllEntries}
        showFavoriteEntries={showFavoriteEntries}
        allCount={allCount}
        favoriteCount={favoriteCount}
      />
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
