import React, { useState, useEffect } from 'react';
import orderApi from '../../api/orderApi'
import { useHistory } from "react-router-dom";

function Order(props) {
  const { businessId } = JSON.parse(localStorage.getItem('user'))
  const [orderList, setOrderList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { push } = useHistory();

  const handleSubmit = (id) => {
    push({
        pathname: '/orders/detail',
        state:
        {
          orderId: id
        }
    })
}

  // Similar to componentDidMount and compon entDidUpdate:
  useEffect(() => {
    ;(async () => {
			try {
				const response = await orderApi.get(businessId)
				setOrderList(response.data)
        console.log(response)
			} catch (error) {
				console.log(error.message)
			}
		})()
  }, [isLoading]);

  // const handleSeeMoreClick = (id) => {
  //   console.log('abc')
  //   return  <Redirect
  //   to={{
  //   pathname: "/orders/detail",
  //   state: { orderId: id }
  // }}
  // />
  // }

  

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home"></i>
          </span> Orders
        </h3>
      </div>  
      <div className="row">
				<div className="col-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Your order</h4>
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
                      <th> Order At </th>
											<th> Currency </th>
											<th> Payment </th>
                      <th> Status </th>
											<th> Action </th>
										</tr>
									</thead>
									<tbody>
										{
											orderList.map((order, i )=> {
												return (
													<tr key={i}>
                            <td> { order.createdAt.substring(0,10) } </td>
														<td>
															<label className="badge badge-gradient-success">{ order.currency }</label>
														</td>
                            <td> { order.payment ? 'Is payment' : 'COD' }</td>
                            <td>
                              { order.status ? 'Approved' : 'Unapprove' }
                            </td>
														<td> 
															<a className='btn btn-gradient-success btn-rounded btn-fw' onClick={(e) => handleSubmit(order._id)}>See more</a>
															<a className='btn btn-gradient-danger btn-rounded btn-fw' onClick={() => console.log(order._id)}><i className='mdi mdi-delete'></i></a>
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


export default Order;