import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Table from "../components/Table"
import Alert from "../components/Alert";

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


  //Search by city
  searchByCity = (query) => {
    API.getRandomNational(query)
        .then(res => this.setState({result: res}))
        .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchByCity(this.state.search);
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Country!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            countryCode={this.state.countryCode}
          />
          <SearchResults results={this.state.results} />
        </Container>
        <Table randList={this.state.result}/>
      </div>
    );
  }
}

export default Search;