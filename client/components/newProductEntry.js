import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {postProduct} from '../store'

export class NewProductEntry extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      details: '',
      stock: 100,
      price: 10,
      photoUrl: 'http://dummyimage.com/1024x768.jpg/ff4444/ffffff'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, newValue) {
    switch (event.target.name) {
      case 'name':
        return this.setState({name: newValue})
      case 'details':
        return this.setState({details: newValue})
      case 'stock':
        return this.setState({stock: newValue})
      case 'price':
        return this.setState({price: newValue})
      case 'photoUrl':
        return this.setState({photoUrl: newValue})
      default:
        console.log('event.target.name', event.target.name)
    }
  }

  render () {
    const style = {margin: '0 10px'}
    const postProduct = this.props.postProduct

    return (
      <Card>
        <CardTitle title="Add a Product" />
        <TextField hintText="Name" floatingLabelText="Name" floatingLabelFixed={true} name='name' style={style} value={this.state.name} onChange={this.handleChange} />
        <TextField hintText="Details" floatingLabelText="Details" floatingLabelFixed={true} name='details' style={style} value={this.state.details} onChange={this.handleChange} />
        <TextField hintText="Stock" floatingLabelText="Stock" floatingLabelFixed={true} name='stock' style={style} value={this.state.stock} onChange={this.handleChange} />
        <TextField hintText="Price" floatingLabelText="Price" floatingLabelFixed={true} name='price' style={style} value={this.state.price} onChange={this.handleChange} />
        <TextField name='photoUrl' floatingLabelText="URL to Photo" floatingLabelFixed={true} style={style} value={this.state.photoUrl} onChange={this.handleChange} />
        <br/>
        <RaisedButton label="Submit" style={style} secondary={true} onClick={() => postProduct(this.state)} />
      </Card>
    )
  }
}

const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {
    postProduct(productData, comp) {
      dispatch(postProduct(productData))
    }
  }
}

export default connect(mapState, mapDispatch)(NewProductEntry)
