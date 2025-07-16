import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import './App.css';

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>JSONPlaceholder Users</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default App;
