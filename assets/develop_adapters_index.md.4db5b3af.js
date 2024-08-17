import{_ as a,o as s,c as e,V as n}from"./chunks/framework.4465fd78.js";const _=JSON.parse('{"title":"适配器","description":"","frontmatter":{},"headers":[],"relativePath":"develop/adapters/index.md","filePath":"develop/adapters/index.md","lastUpdated":1723865901000}'),o={name:"develop/adapters/index.md"},t=n(`<h1 id="适配器" tabindex="-1">适配器 <a class="header-anchor" href="#适配器" aria-label="Permalink to &quot;适配器&quot;">​</a></h1><p>更改默认适配器可以让你搭建其他平台的机器人，除了 <code>bot.instance.api</code> 有差异外，你几乎可以完全按照文档的开发方式进行。我们尽量为所有适配器的基本逻辑实现了相同的效果，使得在不同平台下 AmiyaBot 的开发差异变得极其之小。</p><h2 id="适配器参数-adapter" tabindex="-1">适配器参数 adapter <a class="header-anchor" href="#适配器参数-adapter" aria-label="Permalink to &quot;适配器参数 adapter&quot;">​</a></h2><p>AmiyaBot 对象拥有一个适配器参数 adapter，接受一个 <code>BotAdapterProtocol</code> 的子类。默认值为 QQ 频道机器人的适配器 <code>QQGuildBotInstance</code>。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">BotHandlerFactory</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">                 ...</span></span>
<span class="line"><span style="color:#BABED8;">                 </span><span style="color:#BABED8;font-style:italic;">adapter</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Type</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">BotAdapterProtocol</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> QQGuildBotInstance</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        ...</span></span></code></pre></div><p>从左侧导航挑选合适的适配器，更改你的实例。</p>`,6),p=[t];function l(c,r,d,i,y,B){return s(),e("div",null,p)}const F=a(o,[["render",l]]);export{_ as __pageData,F as default};
