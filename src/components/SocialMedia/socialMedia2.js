import React from 'react';
import { Button } from 'semantic-ui-react';
import './socialMedia.css';

const ButtonExampleCircularSocial = () => (
  <div className="socialMedia column  ">
    <div className="mb-2">
    <Button circular color='facebook' icon='facebook' />
    </div>
    <div className="mb-2">
    <Button circular color='twitter' icon='twitter' />
    </div>
    <div className="mb-2">
    <Button circular color='linkedin' icon='linkedin' />
    </div>
    <div>
    <Button circular color='google plus' icon='google plus' />
    </div>

  </div>
)

export default ButtonExampleCircularSocial;