import React, { useState } from "react";
import "./styles.css";

var booksObject = {
  javascript: [
    {
      id: 0,
      name: "Eloquent JavaScript",
      rating: "4/5"
    },
    {
      id: 1,
      name: "You don't know JS",
      rating: "3.5/5"
    }
  ],
  fiction: [
    {
      id: 0,
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      id: 1,
      name: "Avatar: The Last Airbender",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      id: 0,
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      id: 1,
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var genres = Object.keys(booksObject);

  var [userSelection, setOutput] = useState(booksObject.business);

  function genreSelectedHandler(genre) {
    let selection = booksObject[genre];
    setOutput(selection);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="books">
          📚{" "}
        </span>
        goodbooks
      </h1>
      <h3>Checkout my favorite books. Select a genre to get started..</h3>

      <div>
        {genres.map((item) => {
          return (
            <button
              onClick={() => genreSelectedHandler(item)}
              key={item}
              style={{
                padding: "0.5rem 1rem",
                margin: "0.5rem",
                cursor: "pointer",
                borderRadius: "0.5rem",
                border: "1px solid"
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ padding: "0px" }}>
          {userSelection.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  width: "70%",
                  border: "1px solid rgb(209,213,219)",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div>{item.name}</div>
                <div>{item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
