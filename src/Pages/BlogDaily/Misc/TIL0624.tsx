import React from 'react'
import cicdCodeImage from './cicdCode.png'
import cicdPipelineImage from './cicdPipline.png'
import createRepositoryImg from './repo.png'
import actionSecretImg from './actionSecret.png'
import actionSecret2Img from './actionSecret2.png'
import actionWorkflowImg from './actionWorkflow.png'
import cicdCheckImg from './cicdcheck.png'
import cicdCheck2Img from './cicdcheck2.png'

const TIL0624 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 6월 24일</p>
            <h3>Github CI/CD 관련 코드</h3>
            <h4>name: Deploy to S3</h4>
            <pre><code>{`
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"

      - name: Create .env file
        run: |
          echo "REACT_APP_ENV=S{{ secrets.REACT_APP_ENV }}" >> .env
          echo "REACT_APP_SERVER_URL=S{{ secrets.REACT_APP_SERVER_URL }}" >> .env

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Build project
        run: yarn build

      - name: Sync static files to S3 with long cache
        env:
          AWS_ACCESS_KEY_ID: S{{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: S{{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: S{{ secrets.AWS_REGION }}
          S3_BUCKET_NAME: S{{ secrets.S3_BUCKET_NAME }}
        run: |
          aws s3 sync build/ s3://S{{ secrets.S3_BUCKET_NAME }} \
            --exclude "index.html" \
            --cache-control "public, max-age=31536000, immutable"

      - name: Upload index.html with no-cache
        env:
          AWS_ACCESS_KEY_ID: S{{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: S{{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: S{{ secrets.AWS_REGION }}
          S3_BUCKET_NAME: S{{ secrets.S3_BUCKET_NAME }}
        run: |
          aws s3 cp build/index.html s3://S{{ secrets.S3_BUCKET_NAME }}/index.html \
            --cache-control "no-cache" \
            --content-type "text/html"

      - name: Invalidate index.html in CloudFront
        env:
          AWS_ACCESS_KEY_ID: S{{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: S{{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: S{{ secrets.AWS_REGION }}
          CLOUDFRONT_DISTRIBUTION_ID: S{{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
        run: |
          aws cloudfront create-invalidation \
            --distribution-id S{{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/index.html"

            `}</code></pre>
            
            <img className='TIL0624cicdCodeImg' src={cicdCodeImage} alt='ci/cd related code'></img>

            <h4>CI/CD</h4>
            <p>CI/CD 파이프라인</p>
            <img className='TIL0624cicdPipelineImg' src={cicdPipelineImage} alt='ci/cd pipeline'></img>

<p>CI(Continuous Integration)</p>
<span>💡 개발자를 위한 자동화 프로세스인 지속적인 통합</span><br/>
<span>Code - Build - Test 단계에서 적용</span>
<ul><li>애플리케이션에 대한 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트되어 공유 repository에 통합되는 것</li>
<li>여러 명의 개발자가 동시에 관련 작업을 할 경우 서로 충돌할 수 있는 문제를 해결할 수 있다.</li>
<li>코드를 머지하기 전 빌드 오류나 테스트 오류를 확인할 수 있다.</li></ul>

<p>CD(Continuous Delivery, Deployment)</p>
<span>💡 지속적인 서비스 제공 혹은 지속적인 배포</span><br/>
<span>Relase - Delpoy - Operate 단계에서 적용</span>
<ul><li>코드 변경 사항의 병합부터 프로덕션에 적합한 빌드 제공에 이르는 모든 단계를 포함 (테스트 자동화와 코드 배포 자동화 포함)</li>
<li>빠르게 손쉽게 최신 버전의 애플리케이션 릴리즈 가능</li></ul>


<h4>Github Action</h4>
<p>Github가 공식적으로 제공하는 CI/CD 플랫폼</p>
<ul><li>빌드, 테스트, 배포 파이프라인을 자동화할 수 있다.</li>
<li>github 레포지토리에서 pull request나 push 같은 이벤트를 트리거로 Github 작업 workflow를 구성할 수 있음</li></ul>

<span>📌 Workflow: 하나 이상의 작업이 실행되는 자동화 프로세스</span>
<ul><li>.yml 이나 .yaml 파일에 이해 구성됨</li>
<li>생성한 workflow는 .github/workflows 디렉토리에 위치</li></ul>

<p>레포지토리 생성</p>
<img className='TIL0624createRepositoryImg' src={createRepositoryImg} alt='create-repository-image'></img><br/>
<span>CI/CD를 적용할 애플리케이션이 있는 레포지토리를 만든다. 이 때 public으로 만들어야 제한없이 Github Action을 사용할 수 있다.</span><br/>

<p>aws access key 발급</p>
<span>IAM 계정에 로그인해서 access key를 발급 받는다.</span>

<p>github action secret 등록</p>
<img className='TIL0624actionSecretImg' src={actionSecretImg} alt='action-secret-image'></img><br/>
<img className='TIL0624actionSecret2Img' src={actionSecret2Img} alt='action-secret-image2'></img><br/>
<span>발급 받은 키를 레포지토리에서 다음과 같이 등록해준다.</span>

<p>github action workflow 작성</p>
<img className='TIL0624actionWorkflowImg' src={actionWorkflowImg} alt='action-workflow-image'></img><br/>

<span>레포지토리의 Actions 탭에서 workflow를 생성한다.</span><br/>
<pre><code>{`
name: client
#트리거: 여기서는 main 브랜치에 push되는 경우
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout source code.
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
        working-directory: <작업할 디렉토리>
      - name: Build
        run: npm run build
        working-directory: <작업할 디렉토리>
      - name: SHOW AWS CLI VERSION
        env:
          AWS_ACCESS_KEY_ID: S{{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: S{{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_EC2_METADATA_DISABLED: true
        run: |
          aws --version
      - name: Sync Bucket
        env:
          AWS_ACCESS_KEY_ID: S{{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: S{{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_EC2_METADATA_DISABLED: true
        run: |
          aws s3 sync \
            --region ap-northeast-2 \
            build s3://<버킷 이름> \
            --delete
        working-directory: <작업할 디렉토리>
`}</code></pre>

<p>CI/CD 확인</p>
<img className='TIL0624cicdCheckImg' src={cicdCheckImg} alt='check-ci/cd-image'></img><br/>
<img className='TIL0624cicdCheck2Img' src={cicdCheck2Img} alt='check-ci/cd-image2'></img><br/>
<span>workflow에서 설정한 트리거(main 브랜치에 push)가 발생하면 workflow가 실행되어 aws s3 버킷이 새로 업로드 된다.</span><br/>


        </div>
    )
}

export default TIL0624