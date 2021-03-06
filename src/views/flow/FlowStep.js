import React,{ useState } from 'react'
import '../../css/flowStep.css'
import { Modal, Button } from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import '../../css/modal.css'


function Request() {
  return(
    <div className="request">
      <div className="loading">
        <LoadingOutlined style={{ fontSize: '32px', color: '#fff',marginLeft:"40px" }}/>
      </div>
      <div className="requestText">
        <span>Transaction in progress</span>
        <span>Settin Uni-V1LP token allowance</span>
      </div>
      <Button>view</Button>
      <Button>close</Button>
    </div>
  )
}

function FlowStep() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return(
      <div className="flowStep">
        <div className="flowStep-top">
          <span>iETH</span>
        </div>
        <span>Uniswap sETH LP Token Rewards</span>
        <span>First approve Unipool contract to transfer your sETH UNI-V1 tokens for staking</span>
        <Button onClick={showModal}>UNLOCK</Button>
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer="">
          <div className="modal-title">
            <span>Deposit USDT-ETH SLP Tokens</span>
          </div>
          <div className="modal-content">
            <span>0 USDT-ETH SLP Available</span>
            <div className="modal-input">
              <input/>
              <span>Max</span>
            </div>
          </div>
          <div className="footer">
            <button>Cancel</button>
            <button>Confirm</button>
          </div>
        </Modal>
        <Request/>
      </div>
    )

}
export default FlowStep
