import{_ as a,o as e,c as t,V as r}from"./chunks/framework.4465fd78.js";const b=JSON.parse('{"title":"选择你的运营方","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy/yourChoose.md","filePath":"guide/deploy/yourChoose.md","lastUpdated":1723865901000}'),o={name:"guide/deploy/yourChoose.md"},p=r(`<h1 id="选择你的运营方" tabindex="-1">选择你的运营方 <a class="header-anchor" href="#选择你的运营方" aria-label="Permalink to &quot;选择你的运营方&quot;">​</a></h1><p>QQ 机器人目前分为两种，一种是由腾讯官方运营的 <a href="https://bot.q.qq.com/wiki" target="_blank" rel="noreferrer">频道机器人</a>，另一种则是由第三方技术提供支持的QQ群机器人。</p><h2 id="频道机器人" tabindex="-1">频道机器人 <a class="header-anchor" href="#频道机器人" aria-label="Permalink to &quot;频道机器人&quot;">​</a></h2><p>如果你选择了频道机器人，并且注册了“<strong>公域机器人</strong>”，很遗憾地告诉你，你不能继续部署兔兔了。因为兔兔有官方版本，你不能发布一个功能与官方版本相当接近的机器人。你可以加入 <a href="https://qun.qq.com/qqweb/qunpro/share?_wv=3&amp;_wwv=128&amp;appChannel=share&amp;inviteCode=1W4sJux&amp;appChannel=share&amp;businessType=9&amp;from=181074&amp;biz=ka&amp;shareSource=5" target="_blank" rel="noreferrer">官方频道</a> 并找到机器人“AmiyaBot”，点开资料卡添加到自己的频道里。</p><p>当然，你可以基于 AmiyaBot 框架开发自己的机器人并发布。请参阅 <a href="https://www.amiyabot.com/develop/basic/" target="_blank" rel="noreferrer">开发指南</a>。</p><p>如果是“<strong>私域机器人</strong>”，你仍然可以继续部署。</p><h2 id="kook-机器人" tabindex="-1">KOOK 机器人 <a class="header-anchor" href="#kook-机器人" aria-label="Permalink to &quot;KOOK 机器人&quot;">​</a></h2><p>请在 <a href="https://developer.kookapp.cn/app/index" target="_blank" rel="noreferrer">KOOK 开发者平台</a>，创建一个机器人应用。</p><h2 id="qq-群机器人" tabindex="-1">QQ 群机器人 <a class="header-anchor" href="#qq-群机器人" aria-label="Permalink to &quot;QQ 群机器人&quot;">​</a></h2><p>如果你选择了 QQ 群机器人，你可能需要克服一些困难才能顺利部署。你必须部署第三方技术提供的服务才能继续部署兔兔。</p><p>第三方技术目前支持：</p><ul><li><a href="https://docs.go-cqhttp.org/" target="_blank" rel="noreferrer">go-cqhttp</a></li><li><a href="https://docs.mirai.mamoe.net/mirai-api-http/" target="_blank" rel="noreferrer">mirai-api-http</a></li></ul><p>选择其中一个进行部署即可。</p><h2 id="使用-go-cqhttp" tabindex="-1">使用 go-cqhttp <a class="header-anchor" href="#使用-go-cqhttp" aria-label="Permalink to &quot;使用 go-cqhttp&quot;">​</a></h2><p>请按照 <a href="https://docs.go-cqhttp.org/" target="_blank" rel="noreferrer">go-cqhttp 官网</a> 的说明进行部署。</p><p>修改配置中的 <code>post-format: array</code>。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># config.yml</span></span>
<span class="line"><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 上报数据类型</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 可选: string, array</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">post-format</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">array</span></span></code></pre></div><h2 id="使用-mirai-api-http" tabindex="-1">使用 mirai-api-http <a class="header-anchor" href="#使用-mirai-api-http" aria-label="Permalink to &quot;使用 mirai-api-http&quot;">​</a></h2><p>mirai-api-http 有一定的部署难度，需要你拥有一定的计算机科学基础。但对比其他第三方服务，mirai 在很多方面都占有优势。</p><p>我们的团队成员 <a href="https://github.com/Initial-heart-1" target="_blank" rel="noreferrer">Initial-heart</a> 为你提供了一篇部署 mirai-api-http 的博客，这篇博文详尽的描述了部署 mirai-api-http 的前期准备、部署、配置等整套部署 mirai-api-http 所需的流程。</p><p><a href="https://www.initbili.top/2022/8d92a2feb3e2/#2-%E9%83%A8%E7%BD%B2-mirai" target="_blank" rel="noreferrer">https://www.initbili.top/2022/8d92a2feb3e2/#2-部署-mirai</a></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">非常重要<br></p><p>请耐心根据教程部署完。部署完第三方服务，你就完成 80% 的工作了！务必部署成功再往下继续，否则后续的操作将毫无意义。</p></div><p>如果一切就绪，那么接着来看开始部署部分。</p>`,24),s=[p];function i(n,l,h,c,d,m){return e(),t("div",null,s)}const u=a(o,[["render",i]]);export{b as __pageData,u as default};