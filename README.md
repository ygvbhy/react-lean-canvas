# React Lean Canvas

## 1. Json Server

Vercel Json Server:
[GIT](https://github.com/ygvbhy/json-server-vercel)
[Page](https://json-server-vercel-iota-opal.vercel.app/)

## 2. React + TS

Vercel 을 통해 배포

[page](https://react-lean-canvas.vercel.app/)
Json Server와 Vercel의 특징으로 인해 추가, 수정, 삭제 기능은 동작하지 않음

## 3. Tailwind CSS

디자인은 Tailwind CSS를 사용하여 구현

## 4. React Query

Axios 를 기반으로 API 를 만들었으며 해당 API 를 사용하여 데이터를 조회, 추가, 수정, 삭제 기능을 구현
GET 으로 가져오는 데이터는 React Query를 사용하여 캐싱 및 데이터 업데이트 기능을 구현

## 5. React Router

BrowserRouter 를 사용하여 라우팅 기능 구현
vercel.json 파일을 통해 라우팅 기능 설정

## 6. 프로젝트 설치 (clone)

```bash
git clone https://github.com/ygvbhy/react-lean-canvas.git
```

## 7. 프로젝트 실행

```bash
npm install
npm run dev
```

### 7.1 Local Json Server 실행

```bash
npm run db
```

## 8. 프로젝트 빌드

```bash
npm run build
```

vercel 에서 env 파일을 인식하지 못하므로 따로 설정을 해줘야 하는데 우선 패스하고 env 파일을 올림
env, env.development, env.production 파일을 올려보았음

TODO
추후 따로 설정할 기회가 되면 설정한 뒤 env 파일을 지울예정
