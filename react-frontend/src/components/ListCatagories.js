import React, {Component} from "react";
import {Col, ListGroup} from "react-bootstrap";
import axios from "axios";
import {API_URL} from "../utils/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUtensils, faCoffee, faCheese, faList} from "@fortawesome/free-solid-svg-icons"
import ListProduct from "./ListProduct";

const Icon = ({id}) => {
    if (id === 1) return <FontAwesomeIcon icon={faUtensils} className={"mr-2"}/>
    if (id === 2) return <FontAwesomeIcon icon={faCoffee} className={"mr-2"}/>
    if (id === 3) return <FontAwesomeIcon icon={faCheese} className={"mr-2"}/>

    return <FontAwesomeIcon icon={faUtensils} className={"mr-2"}/>
}

class ListCatagories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get(API_URL + "categories/all-categories").then(res => {
            const categories = res.data.data

            this.setState({categories})

        }).catch(error => {
            console.log("Error Data", error)
        })
    }

    render() {
        const {categories} = this.state
        const {changeCategory, selectCategory} = this.props
        return (
            <Col md={2} mt={2}>
                <h4><strong>Daftar Kategori</strong></h4>
                <hr/>
                <ListGroup className={"Group__list"}>
                    <ListGroup.Item onClick={() => changeCategory(0)}
                                    className={selectCategory === 0 && "category-active"}>

                        <FontAwesomeIcon icon={faList} className={"mr-3"} />
                        All Category
                    </ListGroup.Item>

                    {categories && categories.map((category) => (
                        <ListGroup.Item
                            key={category.id} onClick={() => changeCategory((category.id))}
                            className={selectCategory === category.id && "category-active"}>

                            <Icon id={category.id}/> {category.categories}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        );
    }
}

export default ListCatagories;