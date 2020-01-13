import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import PerformanceChart from "./PerformanceChart"

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
            
            return (
              <div key={item.id} className="column">
                <strong id="entry-header">{indexDate}</strong><br>
                </br>Distance: {item.data.distance}<br>
                </br> Rating: {item.data.message}
                </div>
            )
          })}
        </>
      )
    }

    return (
      <div id="user-history">
        <div className="ui six column stackable grid">
          {dataIndex}
        </div>
        <PerformanceChart performanceData={this.state.performanceData} />
      </div>
    )
  }      
}

export default DisplayPerformanceData