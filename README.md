
[![NPM](https://nodei.co/npm/time-localstorage.png)](https://github.com/hjc22/time-localstorage)

[![npm](https://img.shields.io/npm/dm/time-localstorage.svg)]()


# time-localstorage

> 支持设置过期时间的h5 localStorage

在h5的localStorage Api基础上增加了设置过期时间的功能，轻量级


## 使用方法

``` bash
# 安装 npm 模块
npm install time-localstorage --save

#项目引入
import timeLocalStorage from 'time-localstorage'


```
## Api


| 方法名       |    作用           | 参数  | 返回值 |
| :--------: | :----------------:| :-----: | :-------: |
| get |  通过key值查询value，如果时间已过期，会返回null  |  [name]   | 存储的数据，保持存储之前的数据类型 |
| set |  存储数据，time为过期时间，如果time为false,永久存储，单位为秒  |  [name,value,time]  | 无 |
| remove |  通过key删除一个存储，和原生保持一致  |  [name]  | 无 |

| clear |  删除所有的本地存储数据，和原生保持一致  |  无  | 无 |
