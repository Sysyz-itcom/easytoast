// 实现
class Toast {
    constructor(options) {
        this.options = {
            duration: 3000,
            position: 'top-right',
            title: '',
            icon: '',
            ...options
        };
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.zIndex = '1000';
        document.body.appendChild(container);
        return container;
    }

    show(message, title, options = {}) {
        const toast = document.createElement('div');
        toast.className = 'toast custom-toast';
        toast.style.width = '300px';
        toast.style.whiteSpace = 'normal';
        toast.style.wordWrap = 'break-word';

        if (title) {
            const titleElement = document.createElement('div');
            titleElement.className = 'toast-title';

            titleElement.innerHTML = '<strong style="font-size: 18px;">' + title + '</strong>';
            toast.appendChild(titleElement);
        }
        const content = document.createElement('div');
        content.className = 'toast-content';
        content.innerHTML = this.parseMarkdown(message);
        toast.appendChild(content);

        // 关闭按钮
        const closeBtn = document.createElement('i');
        closeBtn.className = 'fas fa-times-circle close-icon';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '50%';
        closeBtn.style.right = '8px';
        closeBtn.style.transform = 'translateY(-50%)';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#fff';
        closeBtn.style.fontSize = '16px';
        closeBtn.addEventListener('click', () => this.hide(toast));
        toast.appendChild(closeBtn);
        toast.style.position = 'relative';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        toast.style.transition = 'all 0.3s ease';
        this.container.appendChild(toast);

        // 进入动画
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 10);

        // 自动消失
        setTimeout(() => {
            this.hide(toast);
        }, this.options.duration);
    }

    hide(toast) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }

    // 添加Font Awesome CSS 感谢 Deepseek 鼎力支持
    addFontAwesome() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);
    }
parseMarkdown(text) {
    // Markdown
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // 加粗
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // 斜体
        .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" style="color: #b3d4fc;">$1</a>'); // 链接
}
}

// 全局访问
window.Toast = new Toast();
window.Toast.show = function(message, title, options) {
    const toast = new Toast(options);
    toast.show(message, title);
};
window.Toast.addFontAwesome();
