import React, { useState, useEffect } from 'react'
import { info } from 'sass'
import orderApi from '../../api/orderApi'
import ProductCart from '../product/ProductCart'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

function OrderDetail(props) {
  const { businessId } = JSON.parse(localStorage.getItem('user'))
  const [isLoading, setIsLoading] = useState(false)
  const [productList, setProductList] = useState([])
  const [address, setAddress] = useState([])
  const [currency, setCurrency] = useState()
  const [amountPay, setAmountPay] = useState(0)
  const [customerInfor, setCustomerInfor] = useState([])
  const [itemCount, setItemCount] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [approved, setApproved] = useState(null)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    ;(async () => {
			try {
				const response = await orderApi.getDetailById(props.location.state.orderId)
				setCurrency(response.data.fullOrder.currency)
        setAmountPay(response.data.fullOrder.payment ? response.data.fullOrder.payment.purchase_units[0].amount.value : null)
        setAddress([response.data.fullOrder.address])
        setProductList(response.data.fullOrder.productList)
        setCustomerInfor([response.data.customer.infor])
        setApproved(response.data.fullOrder.approveAt ? response.data.fullOrder.approveAt : null)

        const itemCount = response.data.fullOrder.productList.reduce((quantity, product) => {
          return quantity + +product.quantity;
        }, 0);

        const subTotal = response.data.fullOrder.productList.reduce((total, product) => {
          return total + product.price * + product.quantity;
        }, 0);

        setItemCount(itemCount)
        setSubTotal(subTotal)

			} catch (error) {
				console.log(error.message)
			}
		})()
  }, [isLoading]);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home"></i>
          </span> Orders Detail
        </h3>
      </div>  
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Detail Product</h4>
            <div className="forms-sample">
              <div>
                <label htmlFor="exampleInputUsername1">Currency</label>
                <h3>{ currency }</h3>
              </div>
              <div>
                <label htmlFor="exampleInputEmail1">Payment status</label>
                <h3>{ amountPay ? 'Paied' : 'None' }</h3>
              </div>
              <div>
                <label htmlFor="exampleInputPassword1">Payment amount: </label>
                <h3>{ amountPay ? amountPay : subTotal } $</h3>
              </div>
              <div>
                <label htmlFor="exampleInputPassword1">Item Count: </label>
                <h3>{ itemCount }</h3>
              </div>
              <div className='mb-4'>
                <label htmlFor="exampleInputConfirmPassword1">Product List:</label>
                {
                  productList.map((product, i) => {
                    return (
                      <div key={i}>
                        <ProductCart product={product}> </ProductCart>
                      </div>
                    )
                  })
                }
              </div>
              <button onClick={ async () => {
                setIsLoading(true)
                const response = await orderApi.approveOrder(props.location.state.orderId).then(data => {
                  setIsLoading(false)
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Success!',
                    showConfirmButton: false,
                    timer: 2500
                  }).catch(() => {
                    setIsLoading(false)
                    Swal.fire({
                      position: "center",
                      icon: "error",
                      title: 'Error!',
                      showConfirmButton: false,
                      timer: 2500
                    })
                  })
                })
              }} className={"btn mr-2 " + (approved ? 'disable btn-light' : 'btn-gradient-primary')}>{ approved ? 'Approved' : 'Approve'}</button>
              {/* <button className="btn btn-light">Cancel</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Customer infor</h4>
            <div className="forms-sample">
              <div className="row">
                <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Address</label>
                <div className="col-sm-9">
                  { address.map((ad, i) => {
                    return <p key={i}> {ad.street}, {ad.city}, {ad.province}, {ad.country} </p>
                  }) }
                </div>
              </div>
              { customerInfor.map((infor, i) => {
                return (
                  <div key={i}>
                    <div className="row">
                      <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        { infor.name }
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        { infor.email }
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Phone</label>
                      <div className="col-sm-9">
                        { infor.phone }
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

} 


export default OrderDetail;