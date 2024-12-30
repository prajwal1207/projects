import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EditTodo from "./pages/EditTodo";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/todo" element={<HomePage />} />
        <Route path="/todo/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
