import React, { Component } from 'react';
import { getData } from "../modules/performanceData";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.state.performanceData !== null) {
      dataIndex = (
        <>
          {this.state.performanceData.map(item => {
            let indexDate = item.updated_at
            indexDate = indexDate.substring(0, indexDate.indexOf("T"));
            
            return <div key={item.id}>{indexDate}: Distance: {item.data.distance} Rating: {item.data.message}</div>
          })}
        </>
      )
    }

    return (
      <div id="index">
        <h3>Your fitness progress:</h3>
        {dataIndex}
      </div>
    )
  }      
}

export default DisplayPerformanceData