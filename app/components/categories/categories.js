import React from 'react';
import Category from '../category/category';
import styled from 'styled-components';
import {connect} from 'react-redux';
import category from '../category/category';
import {List} from 'material-ui/List';

class Categories extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.categories) 
            return (
                <List className={this.props.className}>

                    {this
                        .props
                        .categories
                        .map(
                        item =>< Category key = {
                            item.id
                        }
                        {
                            ...item
                        }/>)}
                </List>
            )   
        else 
            return (
                <div></div>
            );
        }
    }

const mapStateToProps = state => {

    
    
    return {
        categories: state.get('categories').present
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