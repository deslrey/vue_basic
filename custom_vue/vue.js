function observe(data) {
    if (typeof data !== 'object' || data == null) return;
    Object.keys(data).forEach(key => {
        let val = data[key];
        Object.defineProperty(data, key, {
            get() {
                return val;
            },
            set(newVal) {
                val = newVal;
                render();
            }
        });
        observe(val);
    });
}

// 虚拟DOM
function VNode(tag, data, children = [], text = '', elm = null) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
}

// 渲染函数
function render(vnode, container) {
    let element = vnode.elm || document.createElement(vnode.tag);

    // 如果 vnode 包含 text，直接创建文本节点
    if (vnode.text) {
        element = document.createTextNode(vnode.text);
    }

    // 如果 vnode 有子节点，则递归渲染它们
    if (Array.isArray(vnode.children)) {
        vnode.children.forEach(child => {
            element.appendChild(render(child, container));
        });
    }

    container.appendChild(element);
    return element;
}

// 创建实例
function Vue(options) {
    const data = this.data = options.data;
    observe(data);
    this.render = () => {
        const vnode = options.render.call(this, data);
        render(vnode, options.el);
    };
    this.render();
}