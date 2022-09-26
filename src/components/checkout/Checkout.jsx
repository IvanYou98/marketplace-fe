import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import PaymentIcon from '@mui/icons-material/Payment';
import axios from 'axios';
import { BACKEDN_API } from '../../constant';
import { setWishList } from '../../redux/wishListRedux';
import { connect } from 'react-redux';

const KEY = 'pk_test_51L0nxBCIDiYoy76jKCasV6eIBjP7UDUS3350TB6lfiITUnQwhqv0fAyPA08c3PUODAmz5vGJ6TDZSpxgaAGpr7uR006uW90FIe';

const mapDispatchToProps = (dispatch) => {
    return {
        setWishList: (wishList) => dispatch(setWishList(wishList))
    }
};

class TakeMoney extends React.Component {
    onToken = (token) => {
        console.log(token);
        // 1. create an order
        axios.post(`${BACKEDN_API}/order`, {
            "productId": this.props.product._id,
            "address": token.card.address_city
        }, {
            headers: {
                "token": "bearer " + localStorage.getItem("token")
            }
        }).then(
            // 2. update the product status to sold
            axios.put(`${BACKEDN_API}/product/${this.props.product._id}`, {
                "status": "sold"
            }, {
                headers: {
                    "token": "bearer " + localStorage.getItem("token")
                }
            }).then(
                // 3. remove from the wish list
                axios.delete(`${BACKEDN_API}/wishlist/${this.props.product._id}`, {
                    headers: {
                        "token": "bearer " + localStorage.getItem("token")
                    }
                }).then(res => {
                    this.props.setWishList(res.data);
                })
            ).catch(err => {
                console.log(err);
            })
        ).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <StripeCheckout
                name='Lai Market'
                billingAddress
                shippingAddress
                description={`Your total is $ ${this.props.product.price}`}
                amount={this.props.product.price * 100}
                token={this.onToken}
                stripeKey={KEY}
            >
                <PaymentIcon style={{ 'cursor': 'pointer' }} />
            </StripeCheckout>
        )
    }
}

export default connect(null, mapDispatchToProps)(TakeMoney)