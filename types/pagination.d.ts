export default Pagination;
declare class Pagination {
    /**
     * 分页组件的构造函数
     * ========================================================================
     * @constructor
     * @param {Object} [options] - 可选，分页组件的初始化配置信息
     * @param {String|HTMLElement} options.parent - 必须，显分页导航的父节点或者节点选择器
     * @param {Number} options.total - 必须，数据总数量
     * @param {Number} [options.size=20] - 可选，每页显示的数量，默认值：20
     * @param {Number} [options.page=1] - 可选，当前页面，默认值：1
     * @param {Number} [options.limit=7] - 可选，页面导航数字按钮的个数，默认值：7
     * @param {String} [options.theme='default'] - 可选，主题：default（默认值）、plain 和 bordered
     * @param {String} [options.align='justify'] - 可选，导航的对齐方式：justify（默认值）、left 和 right
     * @param {Array} [options.layout=['prev','pager','next']] - 可选，导航显示的组件，默认值：['prev','pager','next']
     * @param {String} [options.prevText=''] - 可选，上一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
     * @param {String} [options.nextText=''] - 可选，下一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
     * @param {Boolean} [options.prevIcon=true] - 可选，是否用图标按钮显示上一页按钮，默认值：true
     * @param {Boolean} [options.nextIcon=true] - 可选，是否用图标按钮显示下一页按钮，默认值：true
     * @param {Boolean} [options.disabled=false] - 可选，分页导航是否禁用，默认值：false
     * @param {String} [options.customClass=''] - 可选，用于扩展的自定义导航样式，默认值：''
     * @returns {Pagination}
     */
    constructor(options?: {
        parent: string | HTMLElement;
        total: number;
        size?: number;
        page?: number;
        limit?: number;
        theme?: string;
        align?: string;
        layout?: any[];
        prevText?: string;
        nextText?: string;
        prevIcon?: boolean;
        nextIcon?: boolean;
        disabled?: boolean;
        customClass?: string;
    });
    attrs: {};
    $el: any;
    /**
     * 分页组件的默认初始化配置信息和属性的方法
     * ========================================================================
     * @returns {Pagination}
     * @private
     */
    private _default;
    /**
     * 分页组件的初始化方法，用来初始化配置信息，渲染界面和绑定事件处理器
     * ========================================================================
     * @method initialize
     * @param {Object} options - 必须，分页组件的初始化配置信息
     * @param {String|HTMLElement} options.parent - 必须，显分页导航的父节点或者节点选择器
     * @param {Number} options.total - 必须，数据总数量
     * @param {Number} [options.size=20] - 可选，每页显示的数量，默认值：20
     * @param {Number} [options.page=1] - 可选，当前页面，默认值：1
     * @param {Number} [options.limit=7] - 可选，页面导航数字按钮的个数，默认值：7
     * @param {String} [options.theme='default'] - 可选，主题：default（默认值）、plain 和 bordered
     * @param {String} [options.align='justify'] - 可选，导航的对齐方式：justify（默认值）、left 和 right
     * @param {Array} [options.layout=['prev','pager','next']] - 可选，导航显示的组件，默认值：['prev','pager','next']
     * @param {String} [options.prevText=''] - 可选，上一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
     * @param {String} [options.nextText=''] - 可选，下一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
     * @param {Boolean} [options.prevIcon=true] - 可选，是否用图标按钮显示上一页按钮，默认值：true
     * @param {Boolean} [options.nextIcon=true] - 可选，是否用图标按钮显示下一页按钮，默认值：true
     * @param {Boolean} [options.disabled=false] - 可选，分页导航是否禁用，默认值：false
     * @param {String} [options.customClass=''] - 可选，用于扩展的自定义导航样式，默认值：''
     * @returns {Pagination}
     */
    initialize(options: {
        parent: string | HTMLElement;
        total: number;
        size?: number;
        page?: number;
        limit?: number;
        theme?: string;
        align?: string;
        layout?: any[];
        prevText?: string;
        nextText?: string;
        prevIcon?: boolean;
        nextIcon?: boolean;
        disabled?: boolean;
        customClass?: string;
    }): Pagination;
    /**
     * 获取或者设置分页组件的配置信息：
     * 1. 不传递任何参数，用以获取所有配置信息；
     * 2. 仅传递 prop 参数：
     *    1. prop 参数为字符串类型，用来获取某个配置信息的值；
     *    2. prop 参数为对象类型，用来设置多个配置信息；
     * 3. 传递 prop 和 value 参数，用来设置某个配置信息；
     * ========================================================================
     * @method attr
     * @param {String|Object} [prop] - 可选，参数为字符串类型，希望获取的获取某个配置信息的名称；
     *                                 参数为对象类型，用来设置多个配置信息；
     * @param {String|Number|Boolean|Array} [value] - 可选，用来设置 prop 配置参数信息的值；
     * @returns {*|{}|Pagination}
     */
    attr(prop?: string | any, value?: string | number | boolean | any[], ...args: any[]): any | {} | Pagination;
    /**
     * 用来设置 total 配置参数，或者获取 total 配置参数的值：
     * 1. 传递 total 参数，用来设置 total 配置信息的值；
     * 2. 不传递则用以获取 total 配置信息的值；
     * ========================================================================
     * @method total
     * @param {Number} [total] - 可选，传递 total 参数，用来设置 total 配置信息的值；
     *                           不传递则用以获取 total 配置信息的值；
     * @returns {Number|Pagination}
     */
    total(total?: number): number | Pagination;
    /**
     * 用来设置 page 配置参数，或者获取 page 配置参数的值：
     * 1. 传递 page 参数，用来设置 page 配置信息的值；
     * 2. 不传递则用以获取 page 配置信息的值；
     * ========================================================================
     * @method page
     * @param {Number} [page] - 可选，传递 page 参数，用来设置 page 配置信息的值；
     *                          不传递则用以获取 page 配置信息的值；
     * @returns {*|{}|Pagination}
     */
    page(page?: number): any | {} | Pagination;
    /**
     * 用来设置 size 配置参数，或者获取 size 配置参数的值：
     * 1. 传递 size 参数，用来设置 size 配置信息的值；
     * 2. 不传递则用以获取 size 配置信息的值；
     * ========================================================================
     * @method size
     * @param {Number} [size] - 可选，传递 size 参数，用来设置 size 配置信息的值；
     *                          不传递则用以获取 size 配置信息的值；
     * @returns {Number|Pagination}
     */
    size(size?: number): number | Pagination;
    /**
     * 用来设置 limit 配置参数，或者获取 limit 配置参数的值：
     * 1. 传递 limit 参数，用来设置 limit 配置信息的值；
     * 2. 不传递则用以获取 limit 配置信息的值；
     * ========================================================================
     * @method limit
     * @param {Number} [limit] - 可选，传递 limit 参数，用来设置 limit 配置信息的值；
     *                           不传递则用以获取 limit 配置信息的值；
     * @returns {Number|Pagination}
     */
    limit(limit?: number): number | Pagination;
    /**
     * 用来设置 theme 配置参数，或者获取 theme 配置参数的值：
     * 1. 传递 theme 参数，用来设置 theme 配置信息的值；
     * 2. 不传递则用以获取 theme 配置信息的值；
     * ========================================================================
     * @method theme
     * @param {String} [theme] - 可选，传递 theme 参数，用来设置 theme 配置信息的值；
     *                           不传递则用以获取 theme 配置信息的值；
     * @returns {Number|Pagination}
     */
    theme(theme?: string): number | Pagination;
    /**
     * 用来设置 align 配置参数，或者获取 align 配置参数的值：
     * 1. 传递 align 参数，用来设置 align 配置信息的值；
     * 2. 不传递则用以获取 align 配置信息的值；
     * ========================================================================
     * @method align
     * @param {String} [align] - 可选，传递 align 参数，用来设置 align 配置信息的值；
     *                           不传递则用以获取 align 配置信息的值；
     * @returns {Number|Pagination}
     */
    align(align?: string): number | Pagination;
    /**
     * 通过配置参数 total 和 size 的值，计算一共有多少页
     * ========================================================================
     * @method pages
     * @returns {Number}
     */
    pages(): number;
    /**
     * 用来设置 disabled 配置参数，或者获取 disabled 配置参数的值：
     * 1. 传递 disabled 参数，用来设置 disabled 配置信息的值；
     * 2. 不传递则用以获取 disabled 配置信息的值；
     * ========================================================================
     * @method disabled
     * @param {Boolean} [disabled] - 可选，传递 disabled 参数，用来设置 disabled 配置信息的值；
     *                               不传递则用以获取 disabled 配置信息的值；
     * @returns {Boolean|Pagination}
     */
    disabled(disabled?: boolean): boolean | Pagination;
    /**
     * 通过配置参数 pages 和当前页面 page 的值，以及 limit 的值，计算当前数值按钮的显示范围
     * ========================================================================
     * @method range
     * @returns {Array}
     */
    range(): any[];
    /**
     * 用来获取显示分页导航的父节点
     * ========================================================================
     * @method parent
     * @returns {HTMLElement}
     */
    parent(): HTMLElement;
    /**
     * 判断分页导航组件是否需要显示上一页按钮
     * ========================================================================
     * @method hasPrev
     * @returns {Boolean}
     */
    hasPrev(): boolean;
    /**
     * 判断分页导航组件是否需要显示数字导航按钮
     * ========================================================================
     * @method hasPager
     * @returns {Boolean}
     */
    hasPager(): boolean;
    /**
     * 判断分页导航组件是否需要显示下一页按钮
     * ========================================================================
     * @method hasNext
     * @returns {Boolean}
     */
    hasNext(): boolean;
    /**
     * 判断分页导航组件显示的数字导航按钮中是否需要显示快速到上一组按钮
     * ========================================================================
     * @method isQuickPrevVisible
     * @returns {Boolean}
     */
    isQuickPrevVisible(): boolean;
    /**
     * 判断分页导航组件显示的数字导航按钮中是否需要显示快速到下一组按钮
     * ========================================================================
     * @method hasPager
     * @returns {Boolean}
     */
    isQuickNextVisible(): boolean;
    /**
     * 用来动态生成上一页按钮
     * ========================================================================
     * @method _createPrev
     * @returns {HTMLElement}
     * @private
     */
    private _createPrev;
    /**
     * 用来动态生成下一页按钮
     * ========================================================================
     * @method _createNext
     * @returns {HTMLElement}
     * @private
     */
    private _createNext;
    /**
     * 用来动态生成单个数字导航按钮
     * ========================================================================
     * @method _createPager
     * @param {Number} value - 必须，按钮要显示的页数数值
     * @param {Number} current - 必须，当前按钮的页数数值
     * @param {Object} [options] - 可选，当前按钮是否为快速到下一组或者上一组按钮
     * @param {Boolean} [options.isQuickPrevVisible=false] - 可选，当前按钮是否为快速到上一组按钮，默认值：false
     * @param {Boolean} [options.isQuickNextVisible=false] - 可选，当前按钮是否为快速到下一组按钮，默认值：false
     * @returns {HTMLElement}
     * @private
     */
    private _createPager;
    /**
     * 用来动态生成所有的数字分页导航按钮
     * ========================================================================
     * @method _createPages
     * @returns {HTMLElement|null}
     * @private
     */
    private _createPages;
    /**
     * 向上翻1页
     * ========================================================================
     * @method prev
     * @returns {Pagination}
     */
    prev(): Pagination;
    /**
     * 向上翻1页
     * ========================================================================
     * @method prev
     * @returns {Pagination}
     */
    next(): Pagination;
    /**
     * 翻到第几页
     * ========================================================================
     * @method change
     * @param {Number} page - 要跳转的页面数值
     * @returns {Pagination}
     */
    change(page: number): Pagination;
    /**
     * 绘制分页导航的 UI 界面
     * ========================================================================
     * @method render
     * @returns {Pagination}
     */
    render(): Pagination;
    /**
     * （切换页面后）刷新分页导航的 UI 界面
     * ========================================================================
     * @method refresh
     * @returns {Pagination}
     */
    refresh(): Pagination;
    /**
     * 销毁界面并移除导航按钮绑定的事件处理器
     * ========================================================================
     * @method destroy
     * @returns {Pagination}
     */
    destroy(): Pagination;
    /**
     * 整体重置分页导航界面
     * ========================================================================
     * @method reload
     * @param {Object} [options] - 可选，分页组件的初始化配置信息。如果不传递 options 参数，则使用之前的配置或者默认配置
     * @param {String|HTMLElement} options.parent - 必须，显分页导航的父节点或者节点选择器
     * @param {Number} options.total - 必须，数据总数量
     * @param {Number} [options.size=20] - 可选，每页显示的数量，默认值：20
     * @param {Number} [options.page=1] - 可选，当前页面，默认值：1
     * @param {Number} [options.limit=7] - 可选，页面导航数字按钮的个数，默认值：7
     * @param {String} [options.theme='default'] - 可选，主题：default（默认值）、plain 和 bordered
     * @param {String} [options.align='justify'] - 可选，导航的对齐方式：justify（默认值）、left 和 right
     * @param {Array} [options.layout=['prev','pager','next']] - 可选，导航显示的组件，默认值：['prev','pager','next']
     * @param {String} [options.prevText=''] - 可选，上一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
     * @param {String} [options.nextText=''] - 可选，下一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
     * @param {Boolean} [options.prevIcon=true] - 可选，是否用图标按钮显示上一页按钮，默认值：true
     * @param {Boolean} [options.nextIcon=true] - 可选，是否用图标按钮显示下一页按钮，默认值：true
     * @param {Boolean} [options.disabled=false] - 可选，分页导航是否禁用，默认值：false
     * @param {String} [options.customClass=''] - 可选，用于扩展的自定义导航样式，默认值：''
     * @returns {Pagination}
     */
    reload(options?: {
        parent: string | HTMLElement;
        total: number;
        size?: number;
        page?: number;
        limit?: number;
        theme?: string;
        align?: string;
        layout?: any[];
        prevText?: string;
        nextText?: string;
        prevIcon?: boolean;
        nextIcon?: boolean;
        disabled?: boolean;
        customClass?: string;
    }): Pagination;
    /**
     * （消息订阅发布模式）发布消息
     * ========================================================================
     * @method $emit
     * @param {String} topic - 必须，发布消息的主题名称
     * @param {*} [data] - 可选，发布消息时传递的数据
     * @returns {Pagination}
     */
    $emit(topic: string, data?: any): Pagination;
    /**
     * （消息订阅发布模式）订阅消息，并指定接受到消息后的回调处理函数
     * ========================================================================
     * @method $on
     * @param {String} topic - 必须，订阅消息的主题名称
     * @param {Function} callback - 必须，接受到消息后的回调处理函数
     * @returns {Pagination}
     */
    $on(topic: string, callback: Function): Pagination;
    /**
     * （消息订阅发布模式）取消订阅消息
     * ========================================================================
     * @method $off
     * @param {String} topic - 必须，订阅消息的主题名称
     * @returns {Pagination}
     */
    $off(topic: string): Pagination;
    _onPrev(evt: any): this;
    _onChange(evt: any): this;
    _onNext(evt: any): this;
    addListeners(): this;
    removeListeners(): this;
}
declare namespace Pagination {
    let DEFAULTS: any;
}
