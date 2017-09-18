import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ReviewItem = ({review, users}) => {
  const user = users.find((user) => user.id === review.userId)

  return (
    <Card>
      <CardHeader
        title={user && `User: ${user.googleId}`}
        subtitle={`Rating: ${review.rating}`}
      />
      <CardText>
      <h3>Summary</h3>
      <p>{review.summary}</p>
    </CardText>
    </Card>
  )
}

export default ReviewItem
