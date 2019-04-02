import React from 'react'
import { Header, Image, Table, Popup, Button } from 'semantic-ui-react'

class ExerciseTable extends React.Component {
  render() {
    return(
      <Table style={{width: "100%"}} basic='very' collapsing>
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
            <Table.Cell>{this.props.maxHeartRate} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='This is your maximum heart rate zone.' /></Table.Cell>
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
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.50)} - {Math.round(this.props.maxHeartRate * 0.60)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='This is your warm-up zone, and great if you are just starting an exercise program.' /></Table.Cell>
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
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.60)} - {Math.round(this.props.maxHeartRate * 0.70)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='This is your fat burning zone. Your body fuels itself with 85% fat, 5% protein, and 10% carbohydrate.' /></Table.Cell>
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
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.70)} - {Math.round(this.props.maxHeartRate * 0.80)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='The aerobic heart rate zone is your zone to aim for when training for endurance. In the aerobic zone, you burn 50% of your calories from fat, 50% from carbohydrate, and less than 1% from protein. ' /></Table.Cell>
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
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.80)} - {Math.round(this.props.maxHeartRate * 0.90)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='Workouts in this heart rate zone should be in the 10-20 minute range or part of an interval training workout. The body burns 85% carbohydrates, 15% fat and less than 1% protein in this zone.' /></Table.Cell>
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
            <Table.Cell>{Math.round(this.props.maxHeartRate * 0.90)} - {Math.round(this.props.maxHeartRate)} <Popup trigger={<Button id="more-info-Button" icon='info circle' />} content='This zone should only be used for short bursts during interval training, where you work intensely for a minute and then drop back down to a lower intensity for several minutes, and repeat. While you burn lots of calories per minute in this zone, 90 percent of them are carbohydrates, 10 percent fats, and less than 1 percent protein.' /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default ExerciseTable
