import React from "react";

// Components
import Navigation from "../../components/Navigation/Navigation";
import UserTable from "../../components/UserTable/UserTable";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home(props) {
  console.log(props.users);
  return (
    <React.Fragment>
      <Navigation />
      <UserTable users={props.users} />
    </React.Fragment>
  );
}

export default Home;
