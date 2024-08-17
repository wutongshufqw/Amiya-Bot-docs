import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4465fd78.js";const t="/assets/hello4.58f3a96c.png",A=JSON.parse('{"title":"创建连续对话","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/continuityMessage.md","filePath":"develop/basic/continuityMessage.md","lastUpdated":1723865901000}'),o={name:"develop/basic/continuityMessage.md"},e=l(`<h1 id="创建连续对话" tabindex="-1">创建连续对话 <a class="header-anchor" href="#创建连续对话" aria-label="Permalink to &quot;创建连续对话&quot;">​</a></h1><p>在一些使用场景里，需要机器人与使用者产生连续的对话。比如询问使用者以获取信息等。</p><p>Message 对象内置了连续对话支持。</p><h2 id="message-wait" tabindex="-1">Message.wait() <a class="header-anchor" href="#message-wait" aria-label="Permalink to &quot;Message.wait()&quot;">​</a></h2><p><strong>参数列表</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>reply</td><td>Chain</td><td>Chain 对象</td><td></td></tr><tr><td>force</td><td>bool</td><td>使用强制等待</td><td>False</td></tr><tr><td>max_time</td><td>int</td><td>最长等待时间（秒数）</td><td>30</td></tr><tr><td>data_filter</td><td>Callable</td><td>Message 过滤器</td><td></td></tr><tr><td>level</td><td>int</td><td>优先级</td><td>0</td></tr></tbody></table><p>使用 wait 方法实现一个简单的连续对话</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#BABED8;">    reply </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tell me your name please~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> reply</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello，</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><img style="width:220px;" src="`+t+`" alt="image"><h3 id="force-强制等待" tabindex="-1">force 强制等待 <a class="header-anchor" href="#force-强制等待" aria-label="Permalink to &quot;force 强制等待&quot;">​</a></h3><p>等待通常不会影响消息分配器运作，也就是说 <strong>仅在不能触发任何其他功能</strong> 的时候，消息才会返回到当前等待处。<strong>（也包括本功能的初始触发方式，一般功能的优先级默认为 1，比等待事件的默认优先级高）</strong></p><p>如果你不希望如此，使用参数 <code>force=True</code>，可以忽略分配器让消息强制返回到等待处。</p><h3 id="data-filter-消息过滤器" tabindex="-1">data_filter 消息过滤器 <a class="header-anchor" href="#data-filter-消息过滤器" aria-label="Permalink to &quot;data_filter 消息过滤器&quot;">​</a></h3><p>如果在等待过程中，希望 wait 接收到符合期望的消息后再返回到等待处，可以使用 data_filter 参数过滤消息。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">my_data_filter</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> ...</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">True</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 返回 True 代表此则消息符合期望，将返回到等待处</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line highlighted"><span style="color:#BABED8;">    reply </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tell me your name please~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">data_filter</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">my_data_filter</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> reply</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello，</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="关于-wait-方法你需要知道的事" tabindex="-1">关于 wait 方法你需要知道的事 <a class="header-anchor" href="#关于-wait-方法你需要知道的事" aria-label="Permalink to &quot;关于 wait 方法你需要知道的事&quot;">​</a></h3><ul><li>若用户超过最长等待时间未回复，wait 会返回 <code>None</code>。</li><li></li></ul><p>同一个子频道内的同一个用户只能存在一个等待事件，当一个新的等待事件创建后，上一个未使用的等待事件会被注销并引发 <code>WaitEventCancel</code> 异常，进行中的业务将会被<strong>终止</strong>，这是符合预期的，通常这个异常会被全局异常捕捉器过滤。</p><ul><li>在等待时间内使用其他功能，等待也会被注销。</li></ul><h2 id="message-wait-channel" tabindex="-1">Message.wait_channel() <a class="header-anchor" href="#message-wait-channel" aria-label="Permalink to &quot;Message.wait_channel()&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">注意<br></p><p>该方法不可用于支持私信的功能里</p></div><p><strong>参数列表</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>reply</td><td>Chain</td><td>Chain 对象</td><td></td></tr><tr><td>force</td><td>bool</td><td>使用强制等待</td><td>False</td></tr><tr><td>clean</td><td>bool</td><td>是否清空消息列表</td><td>True</td></tr><tr><td>max_time</td><td>int</td><td>最长等待时间（秒数）</td><td>30</td></tr><tr><td>data_filter</td><td>Callable</td><td>Message 过滤器</td><td></td></tr><tr><td>level</td><td>int</td><td>优先级</td><td>0</td></tr></tbody></table><p>wait_channel 方法用于等待<strong>子频道全体成员的回复</strong>。</p><p>与 wait 方法不同的是，wait_channel 返回的不是 Message 对象，而是 <code>ChannelMessagesItem</code> 对象。内含等待事件的实例，和该次返回的消息。</p><p><strong>ChannelMessagesItem</strong></p><p>属性</p><table><thead><tr><th>属性</th><th>类型</th><th>释义</th></tr></thead><tbody><tr><td>event</td><td>ChannelWaitEvent</td><td>等待事件的实例</td></tr><tr><td>message</td><td>Message</td><td>Message对象</td></tr></tbody></table><p>方法</p><table><thead><tr><th>方法名</th><th>参数</th><th>释义</th><th>异步</th></tr></thead><tbody><tr><td>close_event</td><td></td><td>关闭等待事件</td><td>否</td></tr></tbody></table><p>下面来看一个简单的例子</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello everyone, tell me your name please~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> asyncio</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line highlighted"><span style="color:#BABED8;">        event </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait_channel</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> event</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#BABED8;">            reply </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">message</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">stop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#BABED8;">                event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close_event</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 关闭等待事件</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello，</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">))</span></span></code></pre></div><h3 id="close-event" tabindex="-1">close_event() <a class="header-anchor" href="#close-event" aria-label="Permalink to &quot;close_event()&quot;">​</a></h3><p>关闭等待事件</p><p>wait_channel 与 wait 的用法是<strong>大致相同</strong>的，但是 wait_channel 在接收到有效消息并返回后，不会像 wait 那样关闭事件，而是保持接收子频道的消息。在你的业务逻辑正常结束时，你<strong>必须</strong>使用 <code>close_event</code> 关闭它。</p><div class="warning custom-block"><p class="custom-block-title">请注意<br></p><p><strong>请务必让你的业务逻辑有机会关闭等待事件</strong>，否则等待事件没有被正常关闭时，它可能会<strong>持续拦截子频道消息</strong>直至超时自动关闭。</p></div><h3 id="不清除消息队列" tabindex="-1">不清除消息队列 <a class="header-anchor" href="#不清除消息队列" aria-label="Permalink to &quot;不清除消息队列&quot;">​</a></h3><p>如果你持续调用 wait_channel（如示例所示），但你不希望在处理业务时错过子频道内的消息，可以设置参数 <code>clean=False</code> 让事件不清除消息队列。让你可以按顺序获取到子频道内的消息。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait_channel</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">clean</span><span style="color:#89DDFF;">=False)</span></span></code></pre></div>`,39),p=[e];function c(r,y,F,D,i,d){return a(),n("div",null,p)}const B=s(o,[["render",c]]);export{A as __pageData,B as default};