import React, { Component } from 'react';

export class Product extends Component {
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
								</span> Products
							</h3>
						</div>
						<div className="row">
							<div className="col-12 grid-margin">
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Recent Tickets</h4>
										<div className="table-responsive">
											<table className="table">
												<thead>
													<tr>
														<th> Assignee </th>
														<th> Subject </th>
														<th> Status </th>
														<th> Last Update </th>
														<th> Tracking ID </th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<img src={require("../../assets/images/faces/face1.jpg")} className="mr-2" alt="face" /> David Grey </td>
														<td> Fund is not recieved </td>
														<td>
															<label className="badge badge-gradient-success">DONE</label>
														</td>
														<td> Dec 5, 2017 </td>
														<td> WD-12345 </td>
													</tr>
													<tr>
														<td>
															<img src={require("../../assets/images/faces/face2.jpg")} className="mr-2" alt="face" /> Stella Johnson </td>
														<td> High loading time </td>
														<td>
															<label className="badge badge-gradient-warning">PROGRESS</label>
														</td>
														<td> Dec 12, 2017 </td>
														<td> WD-12346 </td>
													</tr>
													<tr>
														<td>
															<img src={require("../../assets/images/faces/face3.jpg")} className="mr-2" alt="face" /> Marina Michel </td>
														<td> Website down for one week </td>
														<td>
															<label className="badge badge-gradient-info">ON HOLD</label>
														</td>
														<td> Dec 16, 2017 </td>
														<td> WD-12347 </td>
													</tr>
													<tr>
														<td>
															<img src={require("../../assets/images/faces/face4.jpg")} className="mr-2" alt="face" /> John Doe </td>
														<td> Loosing control on server </td>
														<td>
															<label className="badge badge-gradient-danger">REJECTED</label>
														</td>
														<td> Dec 3, 2017 </td>
														<td> WD-12348 </td>
													</tr>
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
}


export default Product;