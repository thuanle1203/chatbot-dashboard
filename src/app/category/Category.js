import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';

function Category() {
  const { businessId } = JSON.parse(localStorage.getItem('user'))
  const [categoryList, setCategoryList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <div>

      <div className="page-header">s
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home"></i>
          </span> Category
        </h3>
      </div>  

      <div className="row">
				<div className="col-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Your category</h4>
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th> Name </th>
											<th> Code </th>
											<th> Action </th>
										</tr>
									</thead>
									<tbody>
										{
											categoryList.map((category, i )=> {
												return (
													<tr key={i}>
														<td> { category.name } </td>
														<td>
															<label className="badge badge-gradient-success">{ category.code }</label>
														</td>
														<td> 
															<a className='btn btn-gradient-success btn-rounded btn-fw'><i className='mdi mdi-lead-pencil'></i></a>
															<a className='btn btn-gradient-danger btn-rounded btn-fw' onClick={() => console.log(category.name)}><i className='mdi mdi-delete'></i></a>
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


export default Category;