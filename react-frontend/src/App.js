import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import { Header, Footer} from "./components"
import ListCatagories from "./components/ListCatagories";
import ListProduct from "./components/ListProduct";
import {API_URL} from "./utils/constants";
import axios from "axios";

import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: [],
        }
    }

    componentDidMount() {
        axios.get(API_URL+"products").then(res => {
            const menus = res.data;
            this.setState({ menus })
        }).catch(error => {
            console.log("Error Data")
        })
    }

    render() {
        return (
            <>
                <div className={App}>
                    <Header></Header>

                    <div className={'mt-3'}>
                        <Container fluid>
                            <Row>
                                <ListCatagories></ListCatagories>
                                <Col>
                                    <h4>
                                        <strong>Daftar Product</strong>
                                    </h4>
                                    <hr />
                                </Col>
                                <ListProduct></ListProduct>
                            </Row>
                        </Container>
                    </div>

                    <Footer></Footer>
                </div>
            </>
        );
    }
}

export default App;
