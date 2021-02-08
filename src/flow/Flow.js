import React from 'react'
import '../css/flow.css'
import {BrowserRouter as Router , Link, Route} from 'react-router-dom'
import FlowStep from "./FlowStep";

class Flow extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="bg">
      <div className="flow">
        <div className="flow-title">
          <span>流动性</span>
          <span>流动性衡量的是将资产快速且无损失地转换为现金的难易程度。转换越容易，
            说明资产的流动性越好。在加密货币交易世界中，流动性的一个促进者是存
            许多不同的限价订单</span>
        </div>
        <div className="flow-content">
            <div className="flow-content-main">
                <span>iBTC</span>
                <span>iBTC</span>
                <span>weekly rewards</span>
                <span>18000 DOWS</span>
            </div>
            <div className="flow-content-main">
              <span>xETH</span>
              <span>xETH</span>
              <span>weekly rewards</span>
              <span>8000 DOWS</span>
            </div>
            <Link to="/FlowStep" className="flow-content-main">
              <span>xETH</span>
              <span>xETH</span>
              <span>weekly rewards</span>
              <span>8000 DOWS</span>
            </Link>
            {/*<Route path='/FlowStep' component={FlowStep}/>*/}
        </div>
      </div>
      </div>
    )
  }
}

export default Flow
