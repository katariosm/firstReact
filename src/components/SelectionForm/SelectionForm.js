import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap';

class SelectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {type: "user"};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateData(this.state.type);
    }

    handleChange(e) {
        this.setState({ type: e.target.value })
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group>

                    <Form.Check
                        type="radio"
                        label="Пользователи"
                        name="typeContent"
                        value="user"
                        checked={this.state.type === 'user'}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Check
                        type="radio"
                        label="Записи"
                        name="typeContent"
                        value="post"
                        checked={this.state.type === 'post'}
                        onChange={(e) => this.handleChange(e)}
                    />

                </Form.Group>
                <Button className="button" type="submit">Получить</Button>
            </Form>
        );
    }
}

export default SelectionForm;