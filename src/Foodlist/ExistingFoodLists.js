import React from 'react'
import { Button, Icon, Modal, Header, Input } from 'semantic-ui-react'

class ExistingFoodLists extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render(){
    debugger
    return(
      <React.Fragment>
      {this.props.foodList.map(list =>
      <div id={list.id} className="grocery-list-card">
        <div style={{padding: "20px"}}>
          <h4>{list.name}</h4>
          <p style={{fontSize: "12px"}}>{list.date}</p>
          <p style={{color: "green", textAlign: "center", marginBottom: "12px"}}>${list.total_cost}</p>
          <Button size="tiny" onClick={(e) => {this.props.getAllFoodsForSelectedList(e, list.id)}} basic color='green'>
            Open
          </Button>
          <Button size="tiny" onClick={(e) => {this.props.removeFoodList(e, list.id)}} basic color='red'>
            Delete
          </Button>
          <Modal
            trigger={<Icon size="large" name="edit" onClick={this.handleOpen} />}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            <Header icon='dollar' content='How much did you spend today?' />
            <Modal.Content>
              <Input onChange={this.props.getDollarAmount} style={{margin: "0 auto"}} type="number" placeholder="Enter amount..."/>
              <h3>You can look at your expense history on the Stats tab.</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={(e) => {this.handleClose(); this.props.addPriceToList(e, list.id)}} inverted>
                <Icon name='checkmark' /> Save
              </Button>
            </Modal.Actions>
          </Modal>
        </div> 
      </div> )}
    </React.Fragment>
    )
  }
}


export default ExistingFoodLists
