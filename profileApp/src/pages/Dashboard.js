import React from "react";

const noOfCards = [1, 2, 3, 4, 5, 6, 7, 8];

const Dashboard = ({ user }) => {
  const selectHandler = () => {
    console.log("added!");
  };

  return (
    <div className="dashboard-container">
      <h2>
        Welcome to the online shopping{" "}
        <span className="welcome-user">{user ? user : "user"}</span> !!
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
