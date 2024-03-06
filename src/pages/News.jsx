import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi'
import { Link } from 'react-router-dom'
import { Loader } from '../components'
const {Text,Title} = Typography;
const {Option} = Select;


function News({simplified}) {
  const {data:cryptoNews} = useGetCryptoNewsQuery({ count: simplified ? 6 : 30 });
  if(!cryptoNews) return <Loader/>;
  console.log(cryptoNews);

  return (
    <div>
      <Row gutter = {[24,24]}>
        {cryptoNews.articles.map((news,i)=>{
          const date = new Date(news.publishedAt);
         return (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Link to={news.url} target = '_blank'>
              <Card className='news-card'
            hoverable>
              <div className='news-image-container'>
              <img src = {news.urlToImage} style={{width:"100px", display:"flex", justifyContent:"center"}} />
              </div>
                <Title level={4} className='news-title'>{news.title}</Title>
                <p>Description: {news.description<100?news.description:news.description.substring(100) + '...'}</p>
                <hr />
                <p>{date.toLocaleDateString()}</p>
              </Card>
              
            </Link>
          </Col>
         )
})}
      </Row>
    </div>
  )
}

export default News