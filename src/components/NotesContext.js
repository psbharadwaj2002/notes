// NotesContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Use a callback to initialize the state with the data from localStorage
    const storedData = JSON.parse(localStorage.getItem("notesData")) || [];
    return storedData;
  });

  useEffect(() => {
    // Update localStorage whenever the data changes
    localStorage.setItem("notesData", JSON.stringify(data));
  }, [data]);

  return (
    <NotesContext.Provider value={{ data, setData }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
