import "./input.css";

export function Input({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.elements.motto.focus();
    event.target.reset();
    console.log(data);
  }
  return (
    <>
      <h2>New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="motto">Motto</label>
        <input id="motto" name="motto" type="text"></input>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
        <button className="button__submit" type="submit">
          Create
        </button>
      </form>
    </>
  );
}
