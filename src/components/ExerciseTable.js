import React from 'react'
import { Header, Image, Table, Popup, Button } from 'semantic-ui-react'

class ExerciseTable extends React.Component {
  render() {
    return(
      <Table style={{width: "100%"}} color={'#2761f1'} basic='very' collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={'./heart-rate.png'} rounded size='mini' />
                <Header.Content>
                  Max Heart Rate
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{this.props.maxHeartRate} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Add users to your feed' /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={'./heart-rate.png'} rounded size='mini' />
                <Header.Content>
                  Moderate
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.50)} - {Math.round(this.props.maxHeartRate * 0.60)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Add users to your feed' /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={'./heart-rate.png'} rounded size='mini' />
                <Header.Content>
                  Fat Burn
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.60)} - {Math.round(this.props.maxHeartRate * 0.70)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Add users to your feed' /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={'./heart-rate.png'} rounded size='mini' />
                <Header.Content>
                  Aerobic
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.70)} - {Math.round(this.props.maxHeartRate * 0.80)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Add users to your feed' /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={'./heart-rate.png'} rounded size='mini' />
                <Header.Content>
                  Anaerobic
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.80)} - {Math.round(this.props.maxHeartRate * 0.90)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Add users to your feed' /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={'./heart-rate.png'} rounded size='mini' />
                <Header.Content>
                  Max Effort
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.90)} - {Math.round(this.props.maxHeartRate)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Add users to your feed' /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default ExerciseTable
