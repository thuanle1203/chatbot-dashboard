import React, { Component } from 'react';

export class Category extends Component {
    constructor(props){
			super(props)
    }

    render () {
        return (
          <div>

            <div className="page-header">
							<h3 className="page-title">
								<span className="page-title-icon bg-gradient-primary text-white mr-2">
								<i className="mdi mdi-home"></i>
								</span> Category
							</h3>
						</div>  
          </div>
        )
    }
}


export default Category;