import './SearchBox.styles.css'

export function SearchBox({ placeholder, handleChange }) {
  return (
    <div className="search-box">
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}
