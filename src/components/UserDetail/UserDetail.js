import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;

        return (
            <Modal show={this.props.show}
                   size="lg"
                   onHide={this.props.onHide}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Подробная информация о пользователе {user.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>username : {user.username}</p>
                    <p>email : {user.email}</p>
                    <p>phone : {user.phone}</p>
                    <p>city : {user.address.city}</p>
                    <p>street : {user.address.street}</p>
                    <p>suite : {user.address.suite}</p>
                    <p>zipcode : {user.address.zipcode}</p>
                    <p>website : {user.website}</p>
                    <p>company name: {user.company.name}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UserDetail;
