---
date: "2022-06-29"
title: "Gatsby에서 Dynamic Image 사용하기(GatsbyImage)"
description: "Gatsby-plugin-image의 GatsbyImage에 대한 포스팅"
template: "post"
path: "/posts/gatsby/how-to-use-gatsbyimage"
category: "gatsby"
thumbnailImage: ../../images/gatsby-icon.png
draft: false
---

## GatsbyImage란?
***

[gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby-plugin-image) 플러그인을 이용해서 `Gatsby`에서 이미지를 생성하고, 조작할 수 있다.

[이전 포스팅](./gatsby-image-error-unexpected-character)에서도 소개했듯이, 추가하려는 이미지가 정적이냐, 동적이냐에 따라 `<StaticImage>` 또는 `<GatsbyImage>` 컴포넌트를 선택한다.

`<GatsbyImage>` 컴포넌트를 사용하면, `Gatsby`에서 Dynamic Image를 다룰 수 있다.



</br>

## 플러그인 설정
***

 `gatsby-plugin-image`를 사용하기 위해서는 `gatsby-plugin-image`와 `gatsby-plugin-sharp`를 설치해야 하며, 추가로 정적 이미지 사용을 위해서는 `gatsby-source-filesystem`, 정적 이미지 사용을 위해서는 `gatsby-transformer-sharp`를 설치한다.

```shell
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp
```
</br>

`gatsby-config.js`에 플러그인을 추가한다.
```Javascript
module.exports = {
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,//동적 이미지
    ],
}
```
</br>

여기까지 잘 따라했다면, `GatsbyImage`로 `Gatsby`에서 동적 이미지를 사용할 준비가 된 것이다.

> 너무나도 기본적인 사항이지만, `gatsby-config.js`에 플러그인을 추가할 때 브라켓을 잘 맞췄는지 한 번 더 확인해보자... 이것 때문에 엄청나게 많은 시간을 에러와 싸워야했다...

## GatsbyImage 사용
***

나는 블로그 포스팅마다 카테고리에 맞는 썸네일 이미지를 추가하려고 한다. `Gatsby`에서는 포스트의 `.md` 파일 내 `Frontmatter metadata`에 이미지의 경로를 추가해서 `GraphQL query`를 통해 불러온 뒤 `gatsby-plugin-sharp`로 변환하여 `component` 내에서 이미지를 다룰 수 있다.


https://jeonghwan-kim.github.io/dev/2020/08/19/gatsby-image.html