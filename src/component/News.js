import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResult] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string && string.charAt(0).toUpperCase() + string.substring(1);
    }

    const updatenews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        props.setProgress(30);
        let data = await fetch(url);
        props.setProgress(50);
        let parseddata = await data.json();
        props.setProgress(70);
        setarticles(parseddata.articles)
        settotalResult(parseddata.totalResults)
        setloading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updatenews();
    }, [])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        setloading(true)
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticles(articles.concat(parseddata.articles))
        settotalResult(parseddata.totalResults)
        setloading(false)
    };


    return (
        <>
            <h1 className='text-center'>LionNews - Top {capitalizeFirstLetter(props.category)} Headline</h1>
            {loading  && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem tittle={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://images.indianexpress.com/2023/04/supermassive-black-hole.jpg"} newurl={element.url}
                                    author={element.author} date={element.publishedAt} sourcename={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}

export default News;

News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}