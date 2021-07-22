import {Col, Container, Row} from "react-bootstrap";
import React, { Component } from "react";
import { Header, Footer, Menus} from "./components"
import ListCatagories from "./components/ListCatagories";
import ListProduct from "./components/ListProduct";
import {API_URL} from "./utils/constants";
import axios from "axios";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        axios.get(API_URL+"dashboard").then(res => {
            const menus = res.data.products

            this.setState({ menus })

        }).catch(error => {
            console.log("Error Data", error)
        })
    }

    changeCategory = (value) => {
        this.setState({
            selectCategory: value,
            menus: []
        })

        if (value === 0 ) {
            axios.get(API_URL+"dashboard").then(res => {
                const menus = res.data.products

                this.setState({ menus })

            }).catch(error => {
                console.log("Error Data", error)
            })

        } else {
            axios.get(API_URL+"dashboard?id="+value).then(res => {
                const menus = res.data.products

                this.setState({ menus })

            }).catch(error => {
                console.log("Error Data", error)
            })
        }
    }

    render() {
        const { menus, selectCategory } = this.state

        return (
            <>
                <div className={App}>
                    <Header></Header>

                    <div className={'mt-3'}>
                        <Container fluid>
                            <Row>
                                <ListCatagories changeCategory={this.changeCategory} selectCategory={selectCategory} />


                                <Col>
                                    <h4>
                                        <strong>Daftar Product</strong>
                                    </h4>
                                    <hr />

                                    <Row>
                                        { menus && menus.map((menu) => (
                                            <Menus key = {menu.id} menu = {menu}></Menus>
                                        ))}
                                    </Row>

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
