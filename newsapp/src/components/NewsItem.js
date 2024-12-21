import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, discription, imageurl, newsUrl, date, author,source, } = this.props;
    return (
      <div className="card" style={{ margin: "30px" }}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...<span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%"}}>
            {source} 
            
          </span></h5>
          <p className="card-text">{discription}...</p>
          <p class="card-text"><small class="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="a_blank" className="btn btn-sm btn-primary btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem

