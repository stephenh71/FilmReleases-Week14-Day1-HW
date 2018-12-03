import React from 'react';
import ReleaseList from '../components/ReleaseList'

class ReleaseNews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
  {
    id: 1,
    name: "Spider-Man: Into the Spider-Verse",
    url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
  },
  {
    id: 2,
    name: "Life Itself",
    url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
  },
  {
    id: 3,
    name: "Mary Queen of Scots",
    url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
  },
  {
    id: 4,
    name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
  },
  {
    id: 5,
    name: "Captain Marvel",
    url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
  }
]
    }
this.link = this.link.bind(this);

  }

  link(){
    window.open("https://www.imdb.com/calendar/?region=gb");
  }

  render(){
    return(
      <div className="release-news">
        <h2>Upcoming Film Releases For UK</h2>
        <ReleaseList data = {this.state.data}/>
      <button onClick = {this.link}>View more upcoming releases >> </button>
      </div>
    )
  }
}

export default ReleaseNews;
