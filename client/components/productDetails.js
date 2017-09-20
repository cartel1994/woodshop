import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from './productItem'
import { Card, CardMedia, CardTitle, CardActions, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ReviewItem from './reviewItem'

import { fetchReviews, fetchUsers, postCartItem, toggleCart } from '../store'


export class ProductDetails extends Component {

  componentDidMount() {
    const productId = parseInt(this.props.match.params.productId)
    this.props.fetchReviews(productId)
    this.props.fetchUsers()
  }

  render() {
    // const product = this.props.product
    // const reviews = this.props.reviews
    // const users = this.props.users
    const { product, reviews, users, postCartItem, productInCart } = this.props

    let sumScore = 0;
    reviews.forEach(review => {
      sumScore += review.rating
    })
    const meanScore = Math.round(sumScore / reviews.length * 10) / 10;

    console.log(product)

    return (
      <div>
        {
          product && (
            <Card style={{ maxWidth: `800px` }}>
              <CardMedia
                overlay={<CardTitle title={product.name} subtitle={`$${product.price}`} />}
              >
                <img style={{ maxHeight: `600px`, objectFit: `contain` }} src={product.photoUrl} alt="" />
              </CardMedia>
              <CardText>
                <h3>Average Score: {meanScore}</h3>
                <h3>Details</h3>
                <p>{product.details}</p>
              </CardText>
              <CardActions>
                {
                  productInCart
                    ? <RaisedButton label="Added to Cart" disabled={true} />
                    : <RaisedButton label="Add to Cart" primary={true} onClick={() => postCartItem(product)} />
                }
              </CardActions>
            </Card>
          )
        }
        {
          reviews && (
            <div>
              <h1> Reviews</h1>
              {
                reviews.map((review) => <ReviewItem key={review.id} review={review} users={users} />)
              }
            </div>
          )
        }
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  const productId = parseInt(ownProps.match.params.productId)
  const product = state.products.filter((product) => {
    return product.id === productId
  })[0]
  return {
    product,
    reviews: state.reviews,
    users: state.users,
    productInCart: state.cart && state.cart.find((cartItem) => cartItem.id == productId)
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchReviews: (productId) => {
      dispatch(fetchReviews(productId))
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    postCartItem: (product) => {
      dispatch(postCartItem({
        ...product,
        quantity: 1
      }))
      dispatch(toggleCart()) // Opens the cart to show the item added
    }
  }
}

export default connect(mapState, mapDispatch)(ProductDetails)

ProductDetails.propTypes = {
  reviews: PropTypes.array,
  product: PropTypes.object,
  users: PropTypes.array,
  productInCart: PropTypes.object,
}
