import React, {Component} from "react";
import {Spinner, Table} from "react-bootstrap";
import UserDetail from "../UserDetail/UserDetail";
import axios from "axios";

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            isLoading: false
        };
    }

    render() {
        const rows = [];
        this.props.users.forEach((user) => {
            rows.push(
                <UserRow
                    user={user}
                    key={user.id}
                    onClick={() => this.handleClick(user.id)}
                />
            )
        });
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
                {this.state.detail &&
                <UserDetail show={true} user={this.state.detail} onHide={() => this.handleHideModal()}/>}
            </>
        );
    }

    handleHideModal() {
        this.setState({detail: null});
    }

    handleClick(id) {
        if (id > 0 && !this.state.isLoading) {
            this.setState({isLoading: true});
            axios.get('http://jsonplaceholder.typicode.com/users/' + id)
                .then(response => {
                    this.setState({isLoading: false, detail: response.data});
                })
                .catch(e => console.log(e));
        }
    }
}

function UserRow(props) {
    const user = props.user;
    return (
        <tr onClick={props.onClick}>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.email}</th>
            <th>{user.phone}</th>
            <th>{user.website}</th>
            <th>{user.company.name}</th>
        </tr>
    );
}

export default UserTable;