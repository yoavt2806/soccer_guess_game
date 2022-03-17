import {ReactSearchAutocomplete} from "react-search-autocomplete";

export const AutoComplete = () => {
  return (
    <div style={{width: 400}}>
      <ReactSearchAutocomplete
        items={[{id: 0, name: 'name1'}, {id: 1, name: "name2"}]}
        onSelect={() => {
          console.log('onSelect')
        }}
        autoFocus
      />
    </div>
  )
}