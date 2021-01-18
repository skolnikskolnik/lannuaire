import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Table from "../components/Table"
import Button from "../components/Button"

//I want the json object available as a prop
let randList;
class Search extends Component {
    state = {
        search: "",
        result: [],
        showOriginalTable: true,
        alphebetized: false,
        country: ""
    };


    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getRandomList()
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            });
    }

    //Sorts alphabetically by last name
    sortAlphabet = () => {
        //This takes randList and orders it alphabetically
        randList.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);

        //Then by setting alphabetized to true this repopulates the table
        this.setState({ alphebetized: true });
    }

    //When only USA is clicked, a new API call should be run
    onlyUsa = () => {
        API.getRandomNational("us")
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            })
    }

    onlyGb = () => {
        API.getRandomNational("gb")
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            })
    }

    onlyFr = () => {
        API.getRandomNational("fr")
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            })
    }


    //The user should be able to sort by last name and gender
    //Maybe a new table for the sort by gender?
    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Your employees:</h1>
                    <Button cb={this.sortAlphabet} text={"Sort alphabetically"} name={"alphabet"} />
                    <Button cb={this.onlyUsa} text={"Show only USA"} name={"unitedStates"} />
                    <Button cb={this.onlyGb} text={"Show only Great Britain"} name={"greatBritain"} />
                    <Button cb={this.onlyFr} text={"Montre seulement les Français"} name={"laFrance"} />
                </Container>
                <Table
                    alphebetized={this.state.alphebetized}
                    classToAdd={this.state.showOriginalTable}
                    sortAlphabet={this.sortAlphabet}
                    randList={this.state.result} />
            </div>
        );
    }
}

export default Search;