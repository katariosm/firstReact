import React, {Component} from "react";
import axios from 'axios';
import SelectionForm from "../SelectionForm/SelectionForm";
import "./App.css";
import UserTable from "../UserTable/UserTable";
import PostList from "../PostList/PostList";
import {Spinner} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataType: null,
            isLoading: false,
        };
    }

    updateData(value) {
        this.setState(prevState => ({isLoading: !prevState.isLoading, dataType: value, data: []}));
        if (value === 'user')
            this.getUsers()
        else if (value === 'post')
            this.getPosts();
    }

    getUsers() {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState(
                    prevState => ({
                        isLoading: !prevState.isLoading,
                        data: response.data,
                    })
                );
            })
            .catch(e => console.log(e));
    }

    getPosts() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState(
                    prevState => ({
                        isLoading: !prevState.isLoading,
                        data: response.data,
                    })
                );
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <SelectionForm updateData={(type) => this.updateData(type)}/>
                </div>
                {this.state.isLoading && <Spinner animation="border"/>}
                {this.state.data &&
                <div className='row justify-content-center data'>
                    {this.state.dataType === 'user' && <UserTable users={this.state.data}/>}
                    {this.state.dataType === 'post' && <PostList posts={this.state.data}/>}
                </div>}
            </div>
        );
    }
}

export default App;