import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import Table from "../components/Table"
import Alert from "../components/Alert";
import Button from "../components/Button"

//I want the json object available as a prop
let randList;
class Search extends Component {
  state = {
    result: [],
    search: "",
    countryCode: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomList()
        .then(res => {
            randList = res.data.results;
            this.setState({result: randList})
        });
  }


  //Search by state
  searchByCity = (query) => {
    API.getRandomNational(query)
        .then(res => this.setState({result: res}))
        .catch(err => console.log(err))
  }


  //The user should be able to sort by last name and gender
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Your employees:</h1>
            <Button text={"Sort alphabetically"} name={"alphabet"}/>
            <Button text={"Show only men"} name={"men"} />
            <Button text={"Show only women"} name={"women"} />
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchResults results={this.state.results} />
        </Container>
        <Table randList={this.state.result}/>
      </div>
    );
  }
}

export default Search;