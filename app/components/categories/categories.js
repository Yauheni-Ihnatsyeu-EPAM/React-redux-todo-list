import React from 'react';
import Category from '../category/category';
import styled from 'styled-components';
import {connect} from 'react-redux';
import category from '../category/category';

class Categories extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteRow(index) {
        var categoriesList = [...this.state.categoriesList];
        categoriesList.splice(index, 1);
        this.setState({categoriesList});
    }

    render() {
        if (this.props.categories.length != 0) 
            return (
                <table className={this.props.className}>
                    <tbody>
                        {this
                            .props
                            .categories
                            .map(
                            item =>< Category key = {
                                item.id
                            }
                            {
                                ...item
                            } />)}
                    </tbody>
                </table>
            )
        else 
            return (
                <div></div>
            );
        }
    }

const mapStateToProps = state => {
    return {
        categories: setSelectedCategory(state.get('categories'), state.get('filters'))
    };
};

function setSelectedCategory(categories, filters) {
    categories = categories.map(category => {
        category.id == filters.category
            ? category.selected = true
            : category.selected = false;
        return category;
    });
    return categories;
}

const LiveCategories = connect(mapStateToProps)(Categories);
export default styled(LiveCategories)`grid-area: categories;`;



// if (this.props.categories)     this.state = {         categoriesList: this
// .props             .categories             .map((item, id) => {    return
// (<Category                     key={id} name={item}     id={id}
// onDelete={this                  .deleteRow .bind(this)}/>) })     };