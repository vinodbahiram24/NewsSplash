import React, { Component } from "react";
import noImage from './noImage.jpeg';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date, source } =
      this.props;
    return (
      <div>
        <div
          className="card"
          style={{
            width: "18rem",
            height: "32rem",
            backgroundColor: mode === "light" ? "white" : "#1F242A",
            color: mode === "light" ? "black" : "white",
          }}
        >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'85%'}}>
            {source}
          </span>
          {imageUrl?<img src={imageUrl} className="card-img-top" alt= ""/>:<img src={noImage} className="card-img-top" alt= ""/>}
    
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More..
            </a>
          </div>
          <footer className="blockquote-footer">
            By {author ? author : "Unknown"}{" "}
            <cite title="Source Title">on {new Date(date).toGMTString()}</cite>
          </footer>
        </div>
      </div>
    );
  }
}

export default NewsItem;
