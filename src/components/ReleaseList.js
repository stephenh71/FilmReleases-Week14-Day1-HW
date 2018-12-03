import React from 'react';
import Release from './Release'

class ReleaseList extends React.Component{
  render(){

    const releaseNodes = this.props.data.map(release =>{
      return (
        <ul key={release.id}>
        <li>
        <Release name={release.name} url={release.url}></Release>
        </li>
        </ul>
      );
    });

    return(
      <div className="release-list">
        {releaseNodes}
      </div>
    )
  }
}

export default ReleaseList;
