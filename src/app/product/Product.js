import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi'

function Product() {
	const [productList, setProductList] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const { businessId } = JSON.parse(localStorage.getItem('user'))

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    ;(async () => {
			try {
				const response = await productApi.get(businessId)
				setProductList(response.data)
			} catch (error) {
				console.log(error.message)
			}
		})()
  }, [isLoading]);

	const handleDeleteBtn = async (id) => {
		setIsLoading(true)
		const response = await productApi.deleteOne(id)
		setIsLoading(false)
	}
    
	return (
		<div>
			<div className="page-header">
				<h3 className="page-title">
					<span className="page-title-icon bg-gradient-primary text-white mr-2">
					<i className="mdi mdi-home"></i>
					</span> Products
				</h3>
			</div>
			<div className="row">
				<div className="col-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Your Product</h4>
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th> Image </th>
											<th> Name </th>
											<th> Quantity </th>
											<th> Price </th>
											<th> Description </th>
											<th> Action </th>
										</tr>
									</thead>
									<tbody>
										{
											productList.map((product, i )=> {
												return (
													<tr key={i}>
														<td>
															<img src={ product.image } className="mr-2" />
														</td>
														<td> { product.name } </td>
														<td>
															<label className="badge badge-gradient-success">{ product.quantity }</label>
														</td>
														<td> { product.price }$ </td>
														<td> { product.description } </td>
														<td> 
															<a className='btn btn-gradient-success btn-rounded btn-fw'><i className='mdi mdi-lead-pencil'></i></a>
															<a className='btn btn-gradient-danger btn-rounded btn-fw' onClick={() => handleDeleteBtn(product._id)}><i className='mdi mdi-delete'></i></a>
														</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}


export default Product;