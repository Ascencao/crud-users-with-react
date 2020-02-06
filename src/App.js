import React from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home/Home";
import PageLoading from "./pages/PageLoading/PageLoading";
import PageError from "./pages/PageError/PageError";

class App extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    const fetchData = this.fetchData;
    setTimeout(function() {
      fetchData();
    }, 2000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      this.setState({ loading: false, data: json });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <div className="App">
        <Home users={this.state.data}></Home>
      </div>
    );
  }
}

export default App;
