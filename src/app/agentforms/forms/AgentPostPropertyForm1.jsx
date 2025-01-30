
import AdditionalAttributes from '../components/AdditionalAttributes';
import UploadAndDisplay from '../components/UploadAndDisplay';
import './AgentPostPropertyForm1.css';

const AgentPostPropertyForm1 = ({active}) => {
 
  return (
    <>
    <div>
      <h3>Property Pictures</h3>
      <UploadAndDisplay/>
    </div>
    <div>
      <h3>Property Videos</h3>
      <UploadAndDisplay/>
    </div>
    <div>
   
  <AdditionalAttributes active={active}/>

    </div>
    </>
  )
}

export default AgentPostPropertyForm1
