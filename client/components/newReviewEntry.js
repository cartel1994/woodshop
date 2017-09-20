import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {postReview} from '../store'

export class NewReviewEntry extends Component {

  constructor (props) {
    super(props)
    this.state = {
      input: "",
      rating: 3
    }
    this.updateInput = this.updateInput.bind(this)
    this.updateRating = this.updateRating.bind(this)
  }

  updateInput (_event, newValue) {
    this.setState({input: newValue})
  }

  updateRating (_event, _key, value) {
    this.setState({rating: value})
  }

  render () {
    console.log('state:', this.state)
    const postReview = this.props.postReview
    const {input, rating} = this.state

    return (
      <Card>
        <CardTitle title="Write a Review" />
        <TextField hintText="Review text" value={this.state.input} onChange={this.updateInput} />
        <DropDownMenu value={this.state.rating} onChange={this.updateRating}>
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
        </DropDownMenu>
        <br/>
        <RaisedButton label="Submit" secondary={true} onClick={() => postReview(rating, input)} />
      </Card>
    )
  }
}

const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    postReview: (rating, summary) => {
      console.log('posted a new review')
      dispatch(postReview({rating, summary, userId: ownProps.userId, productId: ownProps.productId}))
    }
  }
}

export default connect(mapState, mapDispatch)(NewReviewEntry)

NewReviewEntry.PropTypes = {

}
