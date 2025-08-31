'use client';

import { Row, Col, Typography, Button, Input, Dropdown, Pagination, Spin, notification } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArticleStyle from '@/styles/client/home/articleHighlight.module.css';
import OverrideStyle from '@/styles/client/article/overrideHighlight.module.css';
import '@/styles/client/article/article-home.css';
import '@/styles/client/main.css';
import ProductStyle from '@/styles/client/product/product.module.css';
import ArticleHighlight from '@/components/client/Article';
import ProductCard from '@/components/client/ProductCard';
import { FaFilter } from 'react-icons/fa';
import { TbArrowsSort } from 'react-icons/tb';
import productsData from '@/data/products.json';
import articlesData from '@/data/articles.json';
import SubscribeCard from '@/components/client/SubscribeCard';
import tagConfig from '@/data/tag.json';
const { Title, Paragraph } = Typography;
const newStyle = { ...ArticleStyle, ...OverrideStyle };
const PAGE_SIZE = 5;

export default function Home() {
  const router = useRouter();
  
  // Lấy dữ liệu từ Redux
  const products = productsData;
  const articles = articlesData;
  const loadingProducts = false;
  const loadingArticles = false;
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  const [api, contextHolder] = notification.useNotification();

  const filteredArticles = (() => {
    let result = [...articles];
    if (keyword) {
      const keywordExp = new RegExp(keyword, 'i');
      result = result.filter(article => keywordExp.test(article.title ?? ''));
    }
    return result;
  })();
  const readArticle = async (article: any) => {
    await router.push(`/article/read/${article.slug}.${article._id}`);
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="article-main">
      {contextHolder}
      <div className="article-banner">
        <h1 className="hero-title">BÀI VIẾT</h1>
      </div>
      <Spin spinning={loadingProducts || loadingArticles}>
        <div className="highlight-container">
          <Title level={4} style={{ marginRight: 'auto' }}>BÀI VIẾT NỔI BẬT</Title>
          <Row gutter={[24, 24]} className='highlight-row'>
            {articles
              .filter(item => item.outstand)
              .slice(0, 4)
              .map((article, index) => (
                <Col xs={24} md={12} key={index} className='highlight-col' onClick={() => readArticle(article)}>
                  <div className="highlight-box">
                    <div className="highlight-image">
                      <img src={article.thumbnail ?? ''} alt={article.title ?? ''} />
                    </div>
                    <div className="highlight-content">
                      <Paragraph style={{ color: '#919191', marginBottom: 3 }}>{article.tags?.[0] ?? ''}</Paragraph>
                      <div className="highlight-title truncate3">{article.title}</div>
                      <Paragraph className="highlight-introduction truncate2">
                        {article.introduction}
                      </Paragraph>
                      <Button 
                        onClick={(e) => { e.stopPropagation(); readArticle(article); }}
                        className="highlight-button"
                      >
                        Đọc bài viết
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>

        {/* Danh sách bài viết */}
        <Row gutter={0} className={OverrideStyle.articleMain}>
          <Col md={24} lg={16} className={OverrideStyle.columnLeft}>
            {/* Bộ lọc */}
            <div className={OverrideStyle.articleHeader}>
              <Title level={4} className={OverrideStyle.articleHeaderLeft}>DÀNH CHO BẠN</Title>
              <div className={OverrideStyle.articleHeaderRight}>
                <Input.Search
                  className="custom-search"
                  placeholder="Tìm kiếm"
                  onSearch={setKeyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                />
              </div>
            </div>

            <ArticleHighlight articles={currentArticles} style={newStyle} />
            <Pagination
              current={page}
              pageSize={PAGE_SIZE}
              total={filteredArticles.length}
              showSizeChanger={false}
              onChange={(p) => {
                setPage(p);
                document.querySelector(`.${OverrideStyle.articleMain}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <SubscribeCard api={api}/>
          </Col>

          <Col md={24} lg={8}>
            <div className={OverrideStyle.columnRight}>
              {products.length > 0 && <ProductCard product={products[0]} style={ProductStyle} />}
            </div>
          </Col>
        </Row>
      </Spin>
    </div>
  );
}
