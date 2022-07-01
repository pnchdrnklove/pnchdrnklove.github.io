import React, {useState} from "react"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"

import "../css/category.css"

const CategoryPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  // Search 컴포넌트 추가 예정
  // index.js에 구현되어 있는 search 확인 후 컴포넌트(또는 함수)로 모듈화할 것
  const [useSearch, setUseSearch] = useState(true);
  return <Layout contents={
  <main>
    <About />
    {/* All <-> Category 토글 버튼 */}
    <div className="toggle-box">
        <Link to="/">All</Link>
        <Link to="/category" className="current-view">Category</Link>
    </div>
    {/* Category */}
    <div className="category-wrapper">
      {/* Category별 리스트 생성 */}
      {group.map(category => (
        <div key={category.fieldValue} id={category.fieldValue} className="category-list">
          {/* Category별 리스트의 타이틀 생성 */}
          <Link to={`/category/#${(category.fieldValue)}/`} className="category-list-title">
            {category.fieldValue}: {category.totalCount}개의 포스트
          </Link>
          {/* Category별 리스트 내 아이템 생성 */}
          <div>
            {category.edges.map(edges => (
              <Link to={`${edges.node.frontmatter.path}`} key={edges.node.frontmatter.path} className="category-list-post-title">
                <span>{edges.node.frontmatter.title}</span>
              </Link>
            ))}
          </div>
        </div>
        ))}
    </div>
    </main>}/>
  }

export default CategoryPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    }
 `