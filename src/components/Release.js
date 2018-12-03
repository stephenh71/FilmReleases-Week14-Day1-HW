import React from 'react';

class Release extends React.Component{
  render(){
    return(
      <div className="release">
        <a href={this.props.url}> {this.props.name}</a>
      </div>
    )
  }
}

export default Release;
