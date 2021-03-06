/**
 * 主页程序
 **/

// React Libs
import React from 'react'
// Style
import style from './index.less'
// App Entry
import Zmage, { showImage } from '@/index'

export default class ReactZmage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={style.pageContainer}>

                {/*首屏, 项目名称与简介*/}
                <div className={style.page}>

                    <a className={style.github} href="https://github.com/Caldis/react-zmage">
                        <div aria-label="Github">
                            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"></path></svg>
                        </div>
                    </a>

                    <div className={style.project}>
                        <span className={style.tag} onClick={() => window.open("https://github.com/Caldis/react-zmage/releases")}>alpha</span><span className={style.tag} onClick={() => window.open("https://github.com/Caldis/react-zmage/releases")}>0.0.4</span>

                        <h1>react-zmage</h1>
                        <h2>一个基于 React 的可缩放图片控件, 也可作为幻灯片使用</h2>
                        <h3>您可以用这个控件完全替代原生的 img 标签, 令其附带图片缩放功能</h3>

                        <div className={style.button} onClick={() => window.open("https://github.com/Caldis/react-zmage/wiki")}>马上使用</div>
                    </div>
                </div>

                {/*特性介绍*/}
                <div className={style.horizon}>
                    <div>
                        <Zmage
                            className={style.image}
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7a4cdd56119387.59a0f4e69a7c4.jpg"
                            alt="最简单的使用方式"
                        />
                        <a href="https://www.behance.net/gallery/56119387/_">via. sslololss Guihuahuzi on behance</a>
                    </div>
                    <div>
                        <h2>基本用法</h2>
                        <p>一如原生的 {"<img/>"} 标签, 只需要直接替换 img 为 Zmage 即可, 您依旧可以使用 style, className 等原生属性。</p>
                        <p>现在, 点击图片, 您即可进入<b>查看模式</b>。</p>
                        <p>注意到了吗? 您传入的 alt 属性将会在放大后作为标题显示在全屏状态的左上角。</p>
                        <pre>
{`<Zmage
        src="https://your.image.link.jpg"
        alt="最简单的使用方式"
/>`}
                        </pre>
                    </div>
                </div>

                <div className={style.horizon}>
                    <div>
                        <h2>图片放大</h2>
                        <p>注意到了吗, 在放大后的图片右上角有一个奇怪的图标, 不妨点击试试 ?</p>
                        <p>滑动鼠标则可以浏览超出屏幕的部分, 对浏览大尺寸图片时尤为方便。</p>
                        <p>在<b>放大模式</b>中, 图片会设置为 100%放大, 确保不会有任何失真。</p>
                        <p>再次点击屏幕即可退出<b>放大模式</b>。</p>
                        <pre>
{`<Zmage
        src="https://your.image.link.jpg"
        alt="放大图片并并滑动预览"
/>`}
                        </pre>
                    </div>
                    <div>
                        <Zmage
                            className={style.image}
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/032a2156119387.59a0f47ee4d08.jpg"
                            alt="放大图片并并滑动预览"
                        />
                        <a href="https://www.behance.net/gallery/56119387/_">via. sslololss Guihuahuzi on behance</a>
                    </div>
                </div>

                <div className={style.horizon}>
                    <div>
                        <Zmage
                            className={style.image}
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5a51f56119387.59a0f47ee56a3.jpg"
                            alt="展示序列图片"
                            imageSet={[{
                                src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5a51f56119387.59a0f47ee56a3.jpg",
                                alt: "童梦 · THREE"
                            },{
                                src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0e8ea156119387.59a0f47ee6752.jpg",
                                alt: "童梦 · FOUR"
                            },{
                                src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/dc26ed56119387.59a0f47ee7283.jpg",
                                alt: "童梦 · FIVE"
                            },{
                                src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4253c56119387.59a0f47ee5f47.jpg",
                                alt: "童梦 · SIX"
                            },{
                                src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4549ec56119387.59a0f47ee515e.jpg",
                                alt: "童梦 · SEVEN"
                            },{
                                src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9df7456119387.59a0f47ee6f76.jpg",
                                alt: "童梦 · EIGHT"
                            }]}
                        />
                        <a href="https://www.behance.net/gallery/56119387/_">via. sslololss Guihuahuzi on behance</a>
                    </div>
                    <div>
                        <h2>展示序列图片</h2>
                        <p>您可以传入一系列图片来显示一个幻灯片, 使用 <b>imageSet</b> 来包裹它们。</p>
                        <p>点击放大后使用键盘的 <b>←</b> 或 <b>→</b> , 或点击屏幕两侧的按钮即可切换图片。</p>
                        <p>左右两侧的控制按钮仅会在您提供了有效的 <b>imageSet</b> 参数时才会显示</p>
                        <pre>
{`<Zmage
        src="your.cover.image.link.jpg"
        alt="展示序列图片"
        imageSet={[{
            src: "your.cover.image.link.jpg",
            alt: "First image description"
        },{
            src: "your.another.image.link.jpg",
            alt: "Second image description"
        }]}
/>`}
                        </pre>
                    </div>
                </div>

                <div className={style.horizon}>
                    <div>
                        <h2>快捷操作</h2>
                        <p>您可以使用键盘来快捷操作</p>
                        <p>除了在展示序列图片时使用键盘的 <b>←</b> 或 <b>→</b> 来切换页面, 你可以可以使用 <b>SPACE(空格键)</b>, 来激活<b>放大模式</b></p>
                        <p>处于放大模式时, 点击 <b>ESC</b> 可以退出<b>放大模式</b>, 再次点击即可退出<b>查看模式</b>。</p>
                        <p>滚动鼠标滚轮同样也可以退出<b>查看模式</b>。</p>
                    </div>
                    <div>
                        <Zmage
                            className={style.image}
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0e8ea156119387.59a0f47ee6752.jpg"
                            alt="使用键盘进行快捷操作"
                        />
                        <a href="https://www.behance.net/gallery/56119387/_">via. sslololss Guihuahuzi on behance</a>
                    </div>
                </div>

                <div className={style.horizon}>
                    <div>
                        <h2>函数式调用</h2>
                        <p>如果您不需要一个封面图片, 您可以手动调用 <b>showImage()</b> 方法来直接呼出查看模式</p>
                        <p>您只需要提供一个 <b>imageSet</b> 参数即可, 使用方式就如同直接从封面展示序列图片一样</p>
                        <p>如果您只需要展示一张图片, 您可以直接传入一个包含 <b>src</b> 与 <b>alt</b> 元素的对象</p>
                        <pre>
{`onClick={() => showImage([
        src: "your.cover.image.link.jpg",
        alt: "First image description"
},{
        src: "your.another.image.link.jpg",
        alt: "Second image description"
}])`}
                        </pre>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div
                            className={style.button}
                            onClick={() => showImage({
                                imageSet: [{
                                    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4253c56119387.59a0f47ee5f47.jpg",
                                    alt: "童梦 · SIX"
                                },{
                                    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4549ec56119387.59a0f47ee515e.jpg",
                                    alt: "童梦 · SEVEN"
                                },{
                                    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9df7456119387.59a0f47ee6f76.jpg",
                                    alt: "童梦 · EIGHT"
                                }]
                            })}
                        >呼出查看模式</div>
                    </div>
                </div>

                <div className={style.bottomBanner}>
                    <div>
                        <h2>您已经准备好了</h2>
                        <p>当前还处于初期开发版本, 仍然存在许多小问题</p>
                        <p>但旋转查看、移动端适配、主题自定义等接口正在紧锣密鼓地开发中</p>
                        <p>如果您觉得当前的功能已经能满足您的需求, 您也可以马上开始使用, 如果您有什么更好的建议, 欢迎告诉我们 !</p>
                        <div className={style.button} onClick={() => window.open("https://github.com/Caldis/react-zmage/wiki")}>查看文档</div>
                        <div className={style.button} onClick={() => window.open("https://github.com/Caldis/react-zmage/issues")}>反馈建议</div>
                    </div>
                </div>

                <div className={style.footer}>
                    <div>
                        <span>react-zmage</span>
                    </div>
                    <div>
                        <span>Create & Design by </span>
                        <a href="https://github.com/Caldis">Caldis </a>
                        <span>, Power by </span>
                        <a href="https://reactjs.org/">React</a>
                    </div>
                    <div>
                        <span>Illustrator from </span>
                        <a href="https://www.behance.net/gallery/56119387/_">sslololss Guihuahuzi </a>
                        <span>on </span>
                        <a href="https://www.behance.net">behance</a>
                    </div>
                    <a className={style.github} href="https://github.com/Caldis/react-zmage">
                        <div aria-label="Github">
                            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"></path></svg>
                        </div>
                    </a>
                    <div className={style.hr}/>
                </div>
            </div>
        )
    }
}