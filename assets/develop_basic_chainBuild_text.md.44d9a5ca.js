import{_ as t,o as a,c as e,V as s}from"./chunks/framework.4465fd78.js";const D=JSON.parse('{"title":"文字","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/chainBuild/text.md","filePath":"develop/basic/chainBuild/text.md","lastUpdated":1723865901000}'),o={name:"develop/basic/chainBuild/text.md"},n=s('<h1 id="文字" tabindex="-1">文字 <a class="header-anchor" href="#文字" aria-label="Permalink to &quot;文字&quot;">​</a></h1><p>发送一段文字消息</p><h2 id="chain-text" tabindex="-1">Chain().text() <a class="header-anchor" href="#chain-text" aria-label="Permalink to &quot;Chain().text()&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>str</td><td>内容文本</td><td></td></tr><tr><td>auto_convert</td><td>bool</td><td>是否超出字数后转换为图片</td><td>True</td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>设置 <code>auto_convert=True</code> 可开启自动转换，当文字超过一定长度时（默认配置为 100），会自动将本段落转换为图片发送。</p><h2 id="插入表情" tabindex="-1">插入表情 <a class="header-anchor" href="#插入表情" aria-label="Permalink to &quot;插入表情&quot;">​</a></h2><p>在文本内使用 <code>[face:ID]</code> 模板也可以插入 QQ 表情。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, world[face:175]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div>',9),l=[n];function p(c,r,d,i,h,F){return a(),e("div",null,l)}const _=t(o,[["render",p]]);export{D as __pageData,_ as default};
