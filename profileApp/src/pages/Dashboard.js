import React, { useState } from "react";

const noOfCards = [1, 2, 3, 4, 5, 6, 7, 8];

const Dashboard = ({ user }) => {
  const [selected, setSelected] = useState(0);
  const selectHandler = () => {
    setSelected(selected + 1);
    console.log(selected);
  };

  return (
    <div className="dashboard-container">
      <h2>
        Welcome <span className="welcome-user">{user ? user : "user"}</span> !!
      </h2>
      <p>Select the items to add to your shopping cart</p>
      <section className="dashboard-cards">
        {noOfCards.map((card) => {
          return (
            <div key={card} onClick={selectHandler}>
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Dashboard;
