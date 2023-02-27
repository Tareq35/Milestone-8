import './App.css';
function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}
function Friend(){
  return(
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Friend></Friend>
    </div>
  )
}

export default App;
