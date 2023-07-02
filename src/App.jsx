import "./App.css";
import { Header } from "./Componente/Header/header";
import { Main } from "./Componente/Main/main-element";
import { Footer } from "./Componente/Footer/footer";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes: "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes: "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes: "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });
    setEntries([{ ...newEntry, id: uid(), date: date }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(entries.map((entry) => entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry));
  }

  const favoriteEntries = entries.filter((entry) => entry.isFavorite ? true : false);

  function handleDeleteEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  function displayAllEntries() {
    setFilter("all");
  }

  function displayFavoriteEntries() {
    setFilter("favorite");
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const filteredEntries = entries.filter(entry =>
    entry.motto.toLowerCase().includes(search.toLowerCase()) ||
    entry.notes.toLowerCase().includes(search.toLowerCase()));

  

    return (
      <>
        <Header />
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Suche"
        />
        <Main
         search={search}
         handleSearch={handleSearch}
          allCount={filteredEntries.length}
          favoriteCount={favoriteEntries.length}
          showAllEntries={displayAllEntries}
          showFavoriteEntries={displayFavoriteEntries}
          entries={filter === "all" ? filteredEntries : favoriteEntries.filter(entry =>
            entry.motto.toLowerCase().includes(search.toLowerCase()) ||
            entry.notes.toLowerCase().includes(search.toLowerCase()))}
          onAddEntry={handleAddEntry}
          onToggleFavorite={handleToggleFavorite}
          onDeleteEntry={handleDeleteEntry}
          filter={filter}
        />
        <Footer />
      </>
    );
  }
  
  export default App;