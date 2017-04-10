# react-particle
[![NPM](https://nodei.co/npm/react-particle.png)](https://www.npmjs.com/package/react-particle)

## Introduction
This is a library derived from [zhihu-particle](https://github.com/jf3096/zhihu-particle)

## Demo
[知乎Particle Demo](https://jf3096.github.io/zhihu-particle/)

## Installation
```shell
npm i react-particle --save #使用npm安装
```

```shell
yarn add react-particle #使用yarn安装
```

## How to use 
CommonJS：
```javascript
    import Particle from 'react-particle';
    ...
        render() {
            return (
                <Particle className="<string>" tagName="<Html Dom Tag>" options={{<options>}}/>
            )
        }
    ...
```

## API

#### className
accepts css class name

#### tagName
accepts any html dom tag such as 'span', 'div', 'section' etc.

#### ParticleOption
当前参数为粒子选项，可选，有默认的配置。

context属性 | 类型 | 例子 | 说明
---------- | ---- | ----- | ------------------
`atomColor` | `string` | `#eeeeee` | 原子颜色，默认值为`#E4E5E6`
`interactive` | `boolean` | `true` | 是否允许鼠标点击交互，默认值为true
`density` | `number`或`string` | `medium` | 密度，取值范围为1000~50000, `low`, `high`, `medium`。<br />这里可以理解成atoms数量=canvas宽*canvas高/密度。<br />这样的设计是为了在全站响应式的情况下，小屏幕会生成相应少的原子，大屏幕则会生成较多的原子，所以更符合日常需求。
`velocity` | `number`或`string` | .8 | 原子移动速度，取值范围为0~1，`fast`，`slow`，`none`，`medium`，默认为`medium`


## Screenshots
![zhihu-particle](./git-img/zhihu-particle.gif)


## 兼容性
> IE9+

> Firefox

> Chrome

> Safari