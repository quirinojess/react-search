import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import styles from "./index.module.css";
import { IData } from "../../types";

interface ISearch {
 searchResults: Array<IData>;
 setSearchResults: Dispatch<SetStateAction<Array<IData>>>;
 initialData: Array<IData>;
 isClearable: boolean;
 placeholder: string;
}

export function Search({
 searchResults,
 setSearchResults,
 initialData,
 isClearable,
 placeholder,
}: ISearch) {
 const input = useRef<HTMLInputElement>(null);

 function handleChange(e: ChangeEvent<HTMLInputElement>) {
  const searchResult = initialData?.filter(obj =>
   obj.name.toLowerCase().includes(e.target.value.toLowerCase().toString())
  );
  if (searchResult) {
   setSearchResults(searchResult);
  }
  if (!e.target.value) {
   setSearchResults(initialData);
  }
 }

 function clearSearch() {
  setSearchResults(initialData);
  if (input.current) {
   input.current.value = "";
  }
 }

 return (
  <div className={styles.search}>
   <span className="material-symbols-outlined">search</span>
   <input
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    ref={input}
   />
   {isClearable && searchResults !== initialData ? (
    <span className="material-symbols-outlined" onClick={() => clearSearch()}>
     close
    </span>
   ) : null}
  </div>
 );
}
