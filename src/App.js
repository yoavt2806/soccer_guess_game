import './App.css';
import {MAX_NUMBER_OF_GUESSES} from "./constants/constants";
import {AutoComplete} from "./components/AutoComplete";


function App() {

  const renderContent = () => {
    return (
      <>
        <span>{`guess number $REPLACE$ from ${MAX_NUMBER_OF_GUESSES} guesses`}</span>
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
