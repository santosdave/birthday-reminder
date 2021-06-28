import React from 'react';
import {Button} from '@material-ui/core';

function Categories({ categories, filterItems }) {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                <Button
                    type="button"
                    className="filter-btn"
                    key={index}
                    onClick={() => filterItems(category)}
                >
                    {category}
                </Button>
                );
            })}
    </div>
  );
};

export default Categories;
