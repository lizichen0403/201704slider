# React版的轮播图

## 初始化项目
```
npm init -y
```

## 安装依赖的模块
```
npm install react react-dom jquery -S
npm install webpack webpack-dev-server less less-loader css-loader style-loader babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react babel-core url-loader file-loader html-webpack-plugin -D
```

## npm run build工作流程
1.先找到package.json文件,查找里面的脚本,看有没有叫build的脚本
2.如果找到了,会去当前目录下的node_modules目录下找对应的可执行命令webpack.cmd
3.执行webpack命令
4.执行webpack命令的时候,会找当前目录下面的webpack.config.js配置文件,进行打包处理