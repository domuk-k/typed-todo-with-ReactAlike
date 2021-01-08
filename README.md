# Todo - with custom view library.

> ✨ Bootstrapped with Create Snowpack App (CSA).

- ⚛️ JSX없이 사용하는 리액트의 주요함수 `ReactDOM.render`, `React.createElement`, `React.Component`를 간략히 구현하여 사용합니다. - `./src/lib`
- 🏔 Snowpack으로 빌드합니다.
- 스타일링을 위해 Sass, CRUD기능을 위해 `json-server`를 사용했습니다.

---

### Reference

- snowpack : [간단한 국문 소개자료](https://heropy.blog/2020/10/31/snowpack/)
- [React without JSX](https://ko.reactjs.org/docs/react-without-jsx.html)

### Create Snowpack App의 기본 scripts 명세

## npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

## npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
