import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class news extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "science"
  }

  constructor(props) {
    super(props);
    this.state = {

      article: [],
      page: 1,
      totalarticles: 0
    };
    document.title = `${this.capatalize(this.props.category)}News-InfoWave`
  }
  capatalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    let data = await fetch(url)
    let response = await data.json()
    console.log(response)
    this.setState({ article: response.articles, totalarticles: response.totalResults })
  }

  async componentDidMount() {
    this.updateNews()
  }
  handleNext = async () => {

    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }
  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pagesize=${this.props.pagesize}`;

      let data = await fetch(url);
      let response = await data.json();
      console.log(response);
      this.setState({ article: this.state.article.concat(response.articles), totalarticles: response.totalResults });
    
  };
  render() {


    return (

     <>
        <h2 className="text-center"style={{ margin: "30px" }}>InfoWave-Top {this.capatalize(this.props.category)} Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalarticles
          }
          loader={this.state.article.length < this.state.totalarticles ? <h4>Loading...</h4> : null}
        >
          <div className='container'>
          <div className='row'>
            {this.state.article.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} discription={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

              </div>
              
            })}


            </div>
          </div >
        </InfiniteScroll>
        

        </>

    )
  }
}

export default news
