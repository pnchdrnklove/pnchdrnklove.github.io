---
date: "2022-06-02"
title: "이미지 첨부 시 'Module parse failed: Unexpected character' 에러 발생"
description: "gatsby-plugin-image 사용하기"
template: "post"
path: "/posts/gatsby/gatsby-image-error-unexpected-character"
category: "gatsby"
thumbnailImage: ../../images/gatsby-icon.png
---

## 에러 로그
***

`Gatsby`로 블로그를 만들던 중 프로필란을 개발하고, 거기에 이미지를 삽입하는 작업을 하던 중 다음과 같은 에러가 발생했다.

```Powershell
ModuleParseError: Module parse failed: Unexpected character '�' (1:0)
  You may need an appropriate loader to handle 
  this file type, currently no loaders are 
  configured to process this file. See https://
  webpack.js.or g/concepts#loaders
  (Source code omitted for this binary file)
```

</br>

## 원인
***

이리저리 검색해본 후, 내가 이미지를 삽입한 방법이 잘못되었다는 걸 알았다.([https://github.com/gatsbyjs/gatsby/issues/11040](https://github.com/gatsbyjs/gatsby/issues/11040))

나는 `img` 태그로 이미지를 추가하는 방식을 사용하고 있었다.

```javascript
import profile from '...경로'

...

<img src={profile} alt="">

...
```

</br>

이런 방식으로 이미지를 추가할 경우 `url_loader`를 통해 이미지를 불러오게 되는데, `Gatsby`에서는 이런 방식으로 이미지를 삽일할 경우, 파일의 용량을 10000 byte(10kb 정도)로 제한하고 있다고 한다.

이런 방식으로 추가된 파일은 base64로 인코딩돼서 첨부된다고 하는 걸 보니 아마도 사이트의 빠른 빌드를 위함이 아닌가 싶다.

추가로, `url-loader`가 아닌 `gatsby-plugin-image`를 사용하여 이미지를 첨부할 것을 제안하고 있다.

</br>

## [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image) 사용
***

처음 블로그를 생성했을 때 사용한 테마인 `gatsby-starter-default`에는 기본적으로 `gatsby-plugin-image`가 설치되어 있고, 이를 사용해서 이미지를 추가한 예제가 있기 때문에 기본적인 사용법을 알 수 있었다.

</br>

### 플러그인 설치

</br>

1. `gatsby-plugin-image`와 `gatsby-plugin-sharp`, `gatsby-source-filesystem`(정적 이미지를 추가할 경우) 또는 `gatsby-transformer-sharp`(동적 이미지를 추가할 경우)를 설치

2. `gatsby-config.js`에 플러그인을 추가

    ```javascript
    module.exports = {
      plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // 동적 이미지를 추가할 경우
      ],
    }
    ```

</br>

### StaticImage 컴포넌트 사용

</br>

* 추가하려는 이미지가 정적이냐, 동적이냐에 따라 `<StaticImage>` 또는 `<GatsbyImage>` 컴포넌트를 선택

* 나는 프로필란에 이미지를 삽입할 것이고, 이미지가 동적으로 바뀔 필요가 없기 때문에 `<StaticImage>` 컴포넌트를 선택함

* `<StaticImage>` 컴포넌트를 사용해서 이미지를 삽입하는 방법은 `img` 태그를 사용한 방식과 같음

    ```javascript
    import { StaticImage } from "gatsby-plugin-image"

    ...

    <StaticImage src="...경로" alt="">

    ...
    ```
    </br>
* `<StaticImage>` 컴포넌트에서 이미지 사이즈나 레이아웃, lazy loading 시 처리할 방법 등을 설정

* `StaticImage`를 사용할 때의 주의점:
  * 부모 컴포넌트로부터 어떠한 `prop`도 받을 수 없음
  * 이미지를 빌드 시에 불러오기 때문에, 파일명을 `prop`으로 전달하거나 컴포넌트 밖에서 정의할 수 없음</br>(컴포넌트 `scope` 안의 지역 변수여야 함)

</br>

## 프로필란에 적용
***

`StaticImage` 컴포넌트 적용은 `img` 태그를 사용할 때와 유사하다.

```javascript
<StaticImage
    src={"../images/profile.png"}
    placeholder="blurred"
    width={80}
    />
```
</br>

## 정리
***

* 첨부 이미지의 용량이 작은 경우(10kb 미만)
  * `img` 태그 사용 가능
* 대용량(정적, 동적) 이미지 첨부시
  * `StaticImage` 또는 `GatsbyImage` 사용