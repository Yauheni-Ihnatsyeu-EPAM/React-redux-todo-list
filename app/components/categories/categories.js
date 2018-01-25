import React from 'react';
import Category from '../category/category'
import styled from 'styled-components'

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: this
                .props
                .categories
                .map((item, id) => {

                    return (<Category
                        key={id}
                        name={item}
                        id={id}
                        onDelete={this
                        .deleteRow
                        .bind(this)}/>)
                })
        };

    }

    deleteRow(index) {
        var categoriesList = [...this.state.categoriesList];

        categoriesList.splice(index, 1);
        this.setState({categoriesList});
    }

    render() {
        return (
            <Table>
                <tbody>
                    {this.state.categoriesList}
                </tbody>
            </Table>
        )
    }
}

const Table = styled.table `
border: 1px solid black;
display: inline-block;
width: 30%; 
`;
