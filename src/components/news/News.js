import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner';
import defaultImage from '../../assets/dumy.png'
import PropTypes from 'prop-types'





export class News extends Component {
  generateId=()=> {
    let length = 10
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  static defaultProps = {
    pageSize: 9,
    category: "general",
    country: "in"

  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired,
    country: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalize(this.props.category)} - News Corner`;
  }

  async updateNews(page){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let pasedData = await data.json();
    console.log(pasedData);
    this.setState({
      articles: pasedData.articles,
      totalResults: pasedData.totalResults,
      loading: false
    });
  }

  async componentDidMount(){
    this.updateNews(this.state.page);
  }

  handlePreviousButton = async ()=>{
    this.updateNews(this.state.page -1);
    this.setState({page: this.state.page - 1});
    
  }

  handleNextButton = async ()=>{
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      this.updateNews(this.state.page + 1);
      this.setState({page: this.state.page + 1});
      
    }
  }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center'>News corner - Top {this.capitalize(this.props.category)} headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((ele)=> {
            return <div className='col-md-4' key={ele.url + this.generateId()}>
            <NewsItem title ={ele.title?ele.title.slice(0, 45):""} description = {ele.description?ele.description.slice(0 ,88):""} imageUrl={ele.urlToImage?ele.urlToImage:defaultImage} newsUrl={ele.url} author={ele.author?ele.author:"Unknown"} date={ele.publishedAt} source={ele.source.name} />
          </div>
          })}
        </div>
      </div>
        <div style={{position:"sticky",bottom:"0px",backgroundColor:"#212529",width:"100%",opacity:"1",zIndex:"1"}}>
        <div className='container bg-#212529 d-flex justify-content-evenly'>
        <button disabled={this.state.page<=1} type="button" className="mt-2 mb-1 btn btn-primary" onClick={this.handlePreviousButton}>&laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="mt-2 mb-1 btn btn-primary" onClick={this.handleNextButton}>Next &raquo;</button>
        </div>
        </div>
        </>
    )
  }
}

export default News
