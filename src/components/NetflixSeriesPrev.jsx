const NetflixSeries = () => {
  const name = "Queen Of Tears";
  // const rating = "8.2";
  const summary =
    "Baek Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";
  let age = 19;

  // let canWatch = "Not Available";
  // if (age >= 18) canWatch = "Watch Now";

  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };

  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  // if (age < 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
  //       </div>
  //       <h2>Name: {name}</h2>
  //       <h3>Rating:{5 / 3.2}</h3>
  //       <p>Summary: {summary}</p>
  //       <p>Genre: {returnGenre()}</p>
  //       <button>Not Available </button>
  //     </div>
  //   );
  // }
  // 2: But this violates DRY (Do not repeat yourself)
  // 3: Sometimes you might have very complex if conditions, for that there are some solutions
  // 4: solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.
  // One another benefit is also that, you can also pass some dynamic values as function parameter
  return (
    <div>
      <div>
        <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating:{5 / 3.2}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"} </button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </div>
  );
};
