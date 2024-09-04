import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "MIRROR NOW",
      title:
        "Chandipura Virus Outbreak In Gujarat: Cases Surge Past 100, Two More Deaths Reported | Top News - MIRROR NOW",
      description: null,
      url: "https://news.google.com/rss/articles/CCAiCzdKRmFwRnlXRDJVmAEB?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-24T12:14:03Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Mint",
      title:
        "'Apple Watch For Your Kids' introduced in India: How it works and details on features | Mint - Mint",
      description: null,
      url: "https://news.google.com/rss/articles/CBMilAFodHRwczovL3d3dy5saXZlbWludC5jb20vdGVjaG5vbG9neS90ZWNoLW5ld3MvYXBwbGUtd2F0Y2gtZm9yLXlvdXIta2lkcy1pbnRyb2R1Y2VkLWluLWluZGlhLWhvdy1pdC13b3Jrcy1hbmQtZGV0YWlscy1vbi1mZWF0dXJlcy0xMTcyMTgyMjI0MTc5NC5odG1s0gGYAWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS90ZWNobm9sb2d5L3RlY2gtbmV3cy9hcHBsZS13YXRjaC1mb3IteW91ci1raWRzLWludHJvZHVjZWQtaW4taW5kaWEtaG93LWl0LXdvcmtzLWFuZC1kZXRhaWxzLW9uLWZlYXR1cmVzL2FtcC0xMTcyMTgyMjI0MTc5NC5odG1s?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-24T12:06:11Z",
      content: null,
    },
  ];
  constructor(props) {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
      progress:props.progress
    };
  }
  async componentDidMount() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=8cc1c486d68f442c8c8308ec504d8340&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=8cc1c486d68f442c8c8308ec504d8340&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=8cc1c486d68f442c8c8308ec504d8340&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          <b>NewsMonk-Top Headlines</b>
        </h1>
        <br/>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 40)}
                    description={
                      element.description
                        ? element.description.slice(0, 150)
                        : element.description
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    mode={this.props.mode}
                  />
                  <br />
                </div>
              );
            })}
        </div>
        <hr />
        <div className="container d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
