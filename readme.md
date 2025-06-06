# 项目介绍
## 1.路由
这是路由的介绍

## 用usePathname查看当前网页路径
记得usePathname用客户端组件
'use client'

const accessLink =[ "/","/one","/two","/three"];

export default function Header() {
 const pathname = usePathname(); 
 if (!accessLink.includes(pathname)) return null;
  return 

## 修改网站文字
首先import文字的函数
import { Comforter } from "next/font/google";
接着定义
const comforter = Comforter({
  subsets: ["latin"],
  weight:'400'
});
然后再html中的className中加入字体的className

    <html lang="en">
      <body className={comforter.className}>
        {children}</body>
    </html>

## 引入antd集成
npm install antd --save
修改 src/app/page.tsx，引入 antd 的按钮组件。
import React from 'react';
import { Button } from 'antd';

const Home = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default Home;

兼容问题

React 19 兼容性问题

由于 React 19 调整了 的 export 方法，antd 不能直接使用该方法。因此，使用 antd 会遇到以下问题：`react-dom``ReactDOM.render`

- Wave 效果不显示
- 的静态方法 ， ， 不起作用`Modal``Notification``Message`

因此，你需要使用兼容性配置来使 antd 在 React 19 中正常工作。

兼容性方法

您可以选择以下方法之一，建议先使用兼容包。

兼容包

安装兼容包

```bash
npm install @ant-design/v5-patch-for-react-19 --save
```

在应用程序入口处导入兼容包

多伦多证券交易所

```tsx
import '@ant-design/v5-patch-for-react-19';
```

unstableSet渲染

同样，请先使用兼容包。仅针对 umd、微应用等特殊场景，使用该方法。 是一种低级注册方法，允许开发人员修改 ReactDOM 的渲染方法。在应用程序的入口处编写以下代码：`unstableSetRender``unstableSetRender`

JS

```js
import { unstableSetRender } from 'antd';import { createRoot } from 'react-dom/client';
unstableSetRender((node, container) => {  container._reactRoot ||= createRoot(container);  const root = container._reactRoot;  root.render(node);  return async () => {    await new Promise((resolve) => setTimeout(resolve, 0));    root.unmount();  };});
```

使用 App Router 

如果你在 Next.js 当中使用了 App Router, 并使用 antd 作为页面组件库，为了让 antd 组件库在你的 Next.js 应用中能够更好的工作，提供更好的用户体验，你可以尝试使用下面的方式将 antd 首屏样式按需抽离并植入到 HTML 中，以避免页面闪动的情况。

1. 安装 `@ant-design/nextjs-registry`

```bash
$ npm install @ant-design/nextjs-registry --save
```

1. 在 `app/layout.tsx` 中使用

```tsx
import React from 'react';import { AntdRegistry } from '@ant-design/nextjs-registry';
const RootLayout = ({ children }: React.PropsWithChildren) => (  <html lang="en">    <body>      <AntdRegistry>{children}</AntdRegistry>    </body>  </html>);
export default RootLayout;
```


## 在vercel