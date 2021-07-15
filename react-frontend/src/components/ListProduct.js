import React, {Component} from 'react';
import {Col} from "react-bootstrap";

class ListProduct extends Component {
    render() {
        return (
            <Col md={3} mt={2}>
                <h4><strong>List Product</strong></h4>
                <hr />
            </Col>
        );
    }
}

export default ListProduct;