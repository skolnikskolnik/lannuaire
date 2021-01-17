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
        countryCode: "",
        alphebetized: false
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getRandomList()
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            });
    }


    sortAlphabet = () => {
        //This takes randList and orders it alphabetically
        randList.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);

        //Now we need to repopulate the table using the new randList
        //First step, change alphebetized to true
        this.setState({ alphebetized: true });
        console.log(randList);
    }


    //The user should be able to sort by last name and gender
    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Your employees:</h1>
                    <Button cb={this.sortAlphabet} text={"Sort alphabetically"} name={"alphabet"} />
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
                <Table sortAlphabet={this.sortAlphabet} randList={this.state.result} />
            </div>
        );
    }
}

export default Search;