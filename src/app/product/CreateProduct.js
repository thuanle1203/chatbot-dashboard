import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi'
import { Form } from 'react-bootstrap'
import productApi from '../../api/productApi';
import { useHistory } from "react-router-dom";

function CreateProduct() {

  const { businessId } = JSON.parse(localStorage.getItem('user'))
  const [product, setProduct] = useState({ businessId: businessId })
  const [categoryList, setCategoryList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  let history = useHistory();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    ;(async () => {
			try {
				const response = await categoryApi.get(businessId)
				setCategoryList(response.data)
			} catch (error) {
				console.log(error.message)
			}
		})()
  }, [isLoading]);

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    
    setProduct({ ...product, [name]: value });
  }

  async function handleSubmit() {
    const response = await productApi.createOne(product)
    history.push("/products/list");
  }

	return (
		<div>
			<div className="page-header">
			<h3 className="page-title"> Create Product </h3>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Product</a></li>
				<li className="breadcrumb-item active" aria-current="page">Create Product</li>
				</ol>
			</nav>
			</div>
			<div className="row">
				<div className="col-md-6 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Create Product Form</h4>
							<div className="forms-sample">
                <Form.Group>
                  <label htmlFor="name">Product Name</label>
                  <Form.Control type="text" id="name" placeholder="Product Name" size="lg" 
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="price">Price</label>
                  <Form.Control type="text" className="form-control" id="price" placeholder="Price" 
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="description">Description</label>
                  <Form.Control type="text" className="form-control" id="description" placeholder="Description" 
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="quantity">Quantity</label>
                  <Form.Control type="text" className="form-control" id="quantity" placeholder="Quantity" 
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="image">Image</label>
                  <Form.Control type="text" className="form-control" id="image" placeholder="Image"  
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="categoryId">Category</label>
                  <select className="form-control form-control-lg" id="categoryId" onChange={handleInputChange}>
                    { categoryList.map((category, i) => {
                      return (
                        <option value={category._id} key={i}> { category.name } </option>
                      )
                    })}
                  </select>
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


export default CreateProduct;