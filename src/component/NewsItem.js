import React from 'react'

const NewsItem = (props) => {
    let { tittle, desc, imgUrl, newurl, author, date, sourcename } = props;
    return (
        <div>
            <div className="card my-2">
                <span className="position-absolute translate-middle badge bg-danger" style={{ zIndex: '1', left: '90%', top: '2%' }}>
                    {sourcename}
                    <span className="visually-hidden">unread messages</span></span>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tittle}...</h5>
                    <p className="card-text">{desc}</p>
                    <p><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newurl} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;