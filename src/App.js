// App.js
import React from "react";
import { NotesProvider } from "./components/NotesContext";
import MainBody from "./components/MainBody";
import Sidebar from "./components/Sidebar";
import "./styles/app/app.css";

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <Sidebar />
        <MainBody />
      </div>
    </NotesProvider>
  );
}

export default App;
