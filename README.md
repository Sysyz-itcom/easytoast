# easytoast

可以在前端页面中调用的 Toast 通知组件，~~好奇怪的东西~~.

## 组件特性
- ~~并不能高度~~可定制的文本功能。
- 简易的 Markdown 语法支持。
- 极其简单的调用和编辑方式。

## 调用方式
### 使用按钮调用
以下是一个完整的通过按钮调用 Toast 的方式，该页面简单编写了一个按钮，如果您需要更复杂的功能，那么需要您自行编写。

您也可以在 [demo1](demo1.html) 中体验。
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toast Demo</title>
    <style>
        .toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .toast {
            background-color: #333;
            color: #fff;
            padding: 12px 24px;
            border-radius: 4px;
            margin-bottom: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .toast a {
            color: #00bfff;
            text-decoration: none;
        }

        .toast a:hover {
            text-decoration: underline;
        }

        .custom-toast {
            background-color: rgb(83, 83, 83);
            /* 背景 */
        }

        .toast-link:hover {
            text-decoration: underline;
        }

        button {
            padding: 8px 16px;
            font-size: 16px;
            border-radius: 4px;
            border: none;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>
    <button onclick="showToast('top')">显示 Toast</button>

    <script src="toast.js"></script>
    <script>
        function showToast() {
            window.Toast.show('这是一个**Toast**示例，支持*斜体*和[链接](https://example.com)1234567890abcdefg123456789023456789', 'Alpha', {icon: 'fas fa-info-circle', titleIconMargin: '8px'});
        }
    </script>
</body>

</html>
```

### 通过触发方式调用
以下使用了倒计时 30 秒的方式触发 Toast 组件。

您也可以在 [demo2](demo2.html) 中体验。
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toast 定时演示</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        #countdown {
            font-size: 3rem;
            font-weight: bold;
            color: #333;
        }

        .toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .toast {
            background-color: #333;
            color: #fff;
            padding: 12px 24px;
            border-radius: 4px;
            margin-bottom: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .toast a {
            color: #00bfff;
            text-decoration: none;
        }

        .toast a:hover {
            text-decoration: underline;
        }

        .custom-toast {
            background-color: rgb(83, 83, 83);
            /* 红色背景 */
        }

        .toast-link:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div id="countdown">30</div>
    <script src="toast.js"></script>
    <script>
        let countdown = 30;
        const countdownElement = document.getElementById('countdown');


        function showToast() {
            window.Toast.show('这是一个**Toast**示例，支持*斜体*和[链接](https://example.com)1234567890abcdefg123456789023456789', 'Alpha', { icon: 'fas fa-info-circle', titleIconMargin: '8px' });
        }

        function startCountdown() {
            const interval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                if (countdown <= 0) {
                    clearInterval(interval);
                    showToast();
                    countdown = 30;
                    countdownElement.textContent = countdown;
                    startCountdown();
                }
            }, 1000);
        }

        startCountdown();
    </script>
</body>

</html>
```

## 必要代码
在您自定义 Toast 时，您必须在您的代码文件中添加这些代码，否则通知将无法正确显示。

### 定义 Toast 样式的 CSS 代码
```css
        /* Toast提示容器样式 */
        .toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000; /* 确保在最顶层 */
        }

        /* 基础Toast样式 */
        .toast {
            background-color: #333; /* 背景 */
            color: #fff; /* 文字颜色 */
            padding: 12px 24px;
            border-radius: 4px;
            margin-bottom: 10px; /* 间距 */
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
        }

        /* Toast内链接样式 */
        .toast a {
            color: #00bfff; /* 链接 */
            text-decoration: none; /* 下划线 */
        }

        /* Toast链接悬停效果 */
        .toast a:hover {
            text-decoration: underline; /* 下划线 */
        }

        /* 自定义Toast变体样式 */
        .custom-toast {
            background-color: rgb(83, 83, 83); 
            /* 背景颜色 */
        }
```

### 引入 js 文件
``` html
<script src="https://sysyz-itcom.github.io/easytoast/toast.js"></script>
```
