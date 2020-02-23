import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../img/Logo-YouTube.jpg';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }
    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    onKeyPress = (event) => {
        if (event.key === "Enter" && this.state.searchTerm !== "") {
            this.props.Submit(this.state.searchTerm);
        }
    }
    clickEnter = () => {
        if (this.state.searchTerm !== "") {
            this.props.Submit(this.state.searchTerm);
        }

    }
    render() {
        return (
            <Paper className="SearchContainer">
                <a href="http://localhost:3000/"><img src={logo} alt="logoYoutube" className="logo" /></a>
                <InputBase
                    value={this.state.searchTerm}
                    className="inputSearch"
                    placeholder="Search"
                    onChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                />
                <IconButton className="iconButtonSearch" aria-label="search" onClick={this.clickEnter}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}

export default SearchBar
