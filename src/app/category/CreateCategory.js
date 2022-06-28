import React, { useEffect, useState } from 'react'
import categoryApi from '../../api/categoryApi'
import { useHistory } from "react-router-dom"
import { Form } from 'react-bootstrap'

function CreateCategory() {
  const { businessId } = JSON.parse(localStorage.getItem('user'))
  const [category, setCategory] = useState({ businessId: businessId })
  let history = useHistory();

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    
    setCategory({ ...category, [name]: value });
  }

  async function handleSubmit() {
    const response = await categoryApi.createOne(category)
    history.push("/category/list");
  }

  return (
    <div>

      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home"></i>
          </span> Category
        </h3>
      </div>  

      <div className="row">
				<div className="col-md-6 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Create Category Form</h4>
							<div className="forms-sample">
                <Form.Group>
                  <label htmlFor="name">Category Name</label>
                  <Form.Control type="text" id="name" placeholder="Category Name" size="lg" 
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="price">Code</label>
                  <Form.Control type="text" className="form-control" id="code" placeholder="Price" 
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <button onClick={handleSubmit} className="btn btn-gradient-primary mr-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>

    </div>
  ) 
}


export default CreateCategory;