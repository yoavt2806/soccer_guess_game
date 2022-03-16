import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {playerNames} from "../constants/players";

export const AutoComplete = () => {
  return (
    <div style={{width: 400}}>
      <ReactSearchAutocomplete
        items={playerNames}
        onSelect={() => {
          console.log('onSelect')
        }}
        autoFocus
      />
    </div>
  )
}