import React, { useState } from "react";
import "./styles.css";

var booksObject = {
  javascript: [
    {
      id: 0,
      name: "Eloquent JavaScript",
      rating: "4/5",
      description:
        "This is a book about instructing computers. Computers are about as common as screwdrivers today, but they are quite a bit more complex, and making them do what you want them to do isn’t always easy.  "
    },
    {
      id: 1,
      name: "You don't know JS",
      rating: "3.5/5",
      description:
        "The primary point of the title 'You Don't Know JS Yet' is to point out that most JS developers don't take the time to really understand how the code that they write works. They know that it works—that it produces a desired outcome. But they either don't understand exactly how, or worse, they have an inaccurate mental model for the how that falters on closer scrutiny."
    },
    {
      id: 2,
      name: "JavaScript - The Good Parts",
      rating: "3.5/5",
      description:
        "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole-a subset you can use to create truly extensible and efficient code. "
    }
  ],
  fiction: [
    {
      id: 0,
      name: "The Hunger Games (The Hunger Games, #1)",
      rating: "4.32/5",
      description:
        "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?"
    },
    {
      id: 1,
      name: "	Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
      rating: "4.5/5",
      description:
        "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?"
    },
    {
      id: 2,
      name: "The Chronicles of Narnia",
      rating: "4.32/5",
      description:
        "Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? "
    }
  ],
  business: [
    {
      id: 0,
      name: "THINK AND GROW RICH",
      rating: "3.5/5",
      description:
        "In every chapter of this book, mention has been made of the money-making secret which has made fortunes for more than five hundred exceedingly wealthy men whom I have carefully analyzed over a long period of years.     "
    },
    {
      id: 1,
      name: "The Alchemist",
      rating: "4/5",
      description:
        "The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. From his home in Spain he journeys to the markets of Tangiers and across the Egyptian desert to a fateful encounter with the alchemist."
    },
    {
      id: 2,
      name: "The Lean Startup",
      rating: "4.5/5",
      description:
        "The Lean Startup has a kind of inexorable logic, and Ries’ recommendations come as a bracing slap in the face to would-be tech moguls: Test your ideas before you bet the bank on them. Don’t listen to what focus groups say; watch what your customers do."
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
                  width: "100%",
                  border: "1px solid rgb(209,213,219)",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div>{item.name}</div>
                <div>{item.rating}</div>
                <small>{item.description}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
