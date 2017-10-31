#  [react-zmage](https://zmage.u2sk.com/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
- 本项目仍在开发中, 您可以点击 [演示页面](http://zmage.u2sk.com) 看看现在的效果
- 如果您感兴趣, 欢迎根据以下的说明试用, 也欢迎 [来这里](https://github.com/Caldis/react-zmage/issues) 反馈意见


## 演示
#### 在线
http://zmage.u2sk.com
#### 本地
```shell
git clone https://github.com/Caldis/react-zmage
cd react-zmage
npm i
npm exam-dev
open http://127.0.0.1:8080/
```

## 简介
react-zmage 是一个简单的图片缩放控件, 您可以用这个控件完全替代原生的 img 标签, 令其附带图片缩放功能
您也可以直接调用附带的接口, 直接以函数调用而不是组件的形式调用全屏的图片展示叠层


## 特性
- 使用简单, 直接替换 img 标签为 Zmage 标签即可
- 带有平滑的缩放渐入效果
- 可支持展示一组序列图片
- 可以缩放查看图片
- 流畅的过渡动画
- 支持键盘控制


## 简单上手
1. 安装
```
npm i react-zmage --save
```
2. 然后在项目中引入
```
import Zmage from 'react-zmage'
```
3. 将页面中的 img 标签替换为 Zmage
```
**BEFORE**: <img src="图片源连接" alt="图片介绍文字"/>
```
👆 to 👇
```
**AFTER**: <Zmage src="图片源连接" alt="图片介绍文字"/>
```

好了, 刷新页面, 现在您的所有图片都可以放大观看了 !