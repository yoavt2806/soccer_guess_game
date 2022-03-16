import logo from './logo.svg';
import './App.css';
import {playerNames} from "./constants/players";
import {ReactSearchAutocomplete} from 'react-search-autocomplete'
import {MAX_NUMBER_OF_GUESSES} from "./constants/constants";
import {AutoComplete} from "./components/AutoComplete";


function App() {

  const renderContent = () => {
    return (
      <>
        <span>{`guess FILL from ${MAX_NUMBER_OF_GUESSES}`}</span>
        <AutoComplete/>
      </>
    )
  }

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
