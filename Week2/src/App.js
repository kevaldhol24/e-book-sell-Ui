import logo from "./logo.svg";
import "./App.css";
import User from "./User";

export const App = () => {
  const userName = "Keval";
  const userId = [1, 2, 4];

  return (
    <div className="App">
      App Component
      <User a={userName} userId={userId} />
    </div>
  );
};

// export default App;
// export { App };
