import UserFinder from "./components/UserFinder";
import UsersContext from "./context/users-context";

const DUMMY_USERS = [
  { id: "1", name: "Ala" },
  { id: "2", name: "Makota" },
  { id: "3", name: "Akotmaale" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
