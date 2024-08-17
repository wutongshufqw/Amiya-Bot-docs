import{_ as t,o as d,c as e,V as r}from"./chunks/framework.4465fd78.js";const m=JSON.parse('{"title":"QQ 频道 API","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/api/qqbot.md","filePath":"develop/basic/api/qqbot.md","lastUpdated":1723865901000}'),a={name:"develop/basic/api/qqbot.md"},h=r('<h1 id="qq-频道-api" tabindex="-1">QQ 频道 API <a class="header-anchor" href="#qq-频道-api" aria-label="Permalink to &quot;QQ 频道 API&quot;">​</a></h1><p>🚧 API 文档尚处于建设阶段，缺少 api 说明和参数释义，请酌情阅读。🚧</p><h2 id="add-message-reaction" tabindex="-1">add_message_reaction <a class="header-anchor" href="#add-message-reaction" aria-label="Permalink to &quot;add_message_reaction&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>str</td><td></td><td></td></tr><tr><td>emoji_type</td><td>int</td><td></td><td></td></tr><tr><td>emoji_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="add-pin" tabindex="-1">add_pin <a class="header-anchor" href="#add-pin" aria-label="Permalink to &quot;add_pin&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="create-announces" tabindex="-1">create_announces <a class="header-anchor" href="#create-announces" aria-label="Permalink to &quot;create_announces&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>channel_id</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>announces_type</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>recommend_channels</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="create-channel" tabindex="-1">create_channel <a class="header-anchor" href="#create-channel" aria-label="Permalink to &quot;create_channel&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>channel_name</td><td>str</td><td></td><td></td></tr><tr><td>channel_type</td><td>int</td><td></td><td></td></tr><tr><td>channel_sub_type</td><td>int</td><td></td><td></td></tr><tr><td>position</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>parent_id</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>private_type</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>private_user_ids</td><td>Union[List[str], None]</td><td></td><td></td></tr><tr><td>speak_permission</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>application_id</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="create-guild-api-permission-link" tabindex="-1">create_guild_api_permission_link <a class="header-anchor" href="#create-guild-api-permission-link" aria-label="Permalink to &quot;create_guild_api_permission_link&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>path</td><td>str</td><td></td><td></td></tr><tr><td>method</td><td>str</td><td></td><td></td></tr><tr><td>desc</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="create-guild-role" tabindex="-1">create_guild_role <a class="header-anchor" href="#create-guild-role" aria-label="Permalink to &quot;create_guild_role&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>name</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>color</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>hoist</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="create-schedule" tabindex="-1">create_schedule <a class="header-anchor" href="#create-schedule" aria-label="Permalink to &quot;create_schedule&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>name</td><td>str</td><td></td><td></td></tr><tr><td>description</td><td>str</td><td></td><td></td></tr><tr><td>start_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>end_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>creator</td><td>Union[dict, None]</td><td></td><td></td></tr><tr><td>jump_channel_id</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>remind_type</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="create-thread" tabindex="-1">create_thread <a class="header-anchor" href="#create-thread" aria-label="Permalink to &quot;create_thread&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>title</td><td>str</td><td></td><td></td></tr><tr><td>content</td><td>str</td><td></td><td></td></tr><tr><td>thread_format</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="delete-announces" tabindex="-1">delete_announces <a class="header-anchor" href="#delete-announces" aria-label="Permalink to &quot;delete_announces&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="delete-channel" tabindex="-1">delete_channel <a class="header-anchor" href="#delete-channel" aria-label="Permalink to &quot;delete_channel&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="delete-guild-member" tabindex="-1">delete_guild_member <a class="header-anchor" href="#delete-guild-member" aria-label="Permalink to &quot;delete_guild_member&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr><tr><td>add_blacklist</td><td>bool</td><td></td><td></td></tr><tr><td>delete_history_msg_days</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="delete-guild-role" tabindex="-1">delete_guild_role <a class="header-anchor" href="#delete-guild-role" aria-label="Permalink to &quot;delete_guild_role&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="delete-message" tabindex="-1">delete_message <a class="header-anchor" href="#delete-message" aria-label="Permalink to &quot;delete_message&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>message_id</td><td>str</td><td></td><td></td></tr><tr><td>target_id</td><td>str</td><td></td><td></td></tr><tr><td>is_direct</td><td>bool</td><td></td><td></td></tr><tr><td>hidetip</td><td>bool</td><td></td><td></td></tr></tbody></table><h2 id="delete-message-reaction" tabindex="-1">delete_message_reaction <a class="header-anchor" href="#delete-message-reaction" aria-label="Permalink to &quot;delete_message_reaction&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>str</td><td></td><td></td></tr><tr><td>emoji_type</td><td>int</td><td></td><td></td></tr><tr><td>emoji_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="delete-pin" tabindex="-1">delete_pin <a class="header-anchor" href="#delete-pin" aria-label="Permalink to &quot;delete_pin&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="delete-schedule" tabindex="-1">delete_schedule <a class="header-anchor" href="#delete-schedule" aria-label="Permalink to &quot;delete_schedule&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>schedule_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="delete-thread" tabindex="-1">delete_thread <a class="header-anchor" href="#delete-thread" aria-label="Permalink to &quot;delete_thread&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>thread_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="delete-user-role" tabindex="-1">delete_user_role <a class="header-anchor" href="#delete-user-role" aria-label="Permalink to &quot;delete_user_role&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="gateway" tabindex="-1">gateway <a class="header-anchor" href="#gateway" aria-label="Permalink to &quot;gateway&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead></table><h2 id="gateway-bot" tabindex="-1">gateway_bot <a class="header-anchor" href="#gateway-bot" aria-label="Permalink to &quot;gateway_bot&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead></table><h2 id="get-channel" tabindex="-1">get_channel <a class="header-anchor" href="#get-channel" aria-label="Permalink to &quot;get_channel&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-channel-online-nums" tabindex="-1">get_channel_online_nums <a class="header-anchor" href="#get-channel-online-nums" aria-label="Permalink to &quot;get_channel_online_nums&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-channels" tabindex="-1">get_channels <a class="header-anchor" href="#get-channels" aria-label="Permalink to &quot;get_channels&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-guild" tabindex="-1">get_guild <a class="header-anchor" href="#get-guild" aria-label="Permalink to &quot;get_guild&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-guild-api-permission" tabindex="-1">get_guild_api_permission <a class="header-anchor" href="#get-guild-api-permission" aria-label="Permalink to &quot;get_guild_api_permission&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-guild-member" tabindex="-1">get_guild_member <a class="header-anchor" href="#get-guild-member" aria-label="Permalink to &quot;get_guild_member&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-guild-members" tabindex="-1">get_guild_members <a class="header-anchor" href="#get-guild-members" aria-label="Permalink to &quot;get_guild_members&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>after</td><td>str</td><td></td><td></td></tr><tr><td>limit</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="get-guild-roles" tabindex="-1">get_guild_roles <a class="header-anchor" href="#get-guild-roles" aria-label="Permalink to &quot;get_guild_roles&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-guild-roles-members" tabindex="-1">get_guild_roles_members <a class="header-anchor" href="#get-guild-roles-members" aria-label="Permalink to &quot;get_guild_roles_members&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr><tr><td>start_index</td><td>str</td><td></td><td></td></tr><tr><td>limit</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="get-guilds" tabindex="-1">get_guilds <a class="header-anchor" href="#get-guilds" aria-label="Permalink to &quot;get_guilds&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>before</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>after</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>limit</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="get-me" tabindex="-1">get_me <a class="header-anchor" href="#get-me" aria-label="Permalink to &quot;get_me&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead></table><h2 id="get-me-dms" tabindex="-1">get_me_dms <a class="header-anchor" href="#get-me-dms" aria-label="Permalink to &quot;get_me_dms&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>recipient_id</td><td>str</td><td></td><td></td></tr><tr><td>src_guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-message" tabindex="-1">get_message <a class="header-anchor" href="#get-message" aria-label="Permalink to &quot;get_message&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-message-reactions" tabindex="-1">get_message_reactions <a class="header-anchor" href="#get-message-reactions" aria-label="Permalink to &quot;get_message_reactions&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>message_id</td><td>str</td><td></td><td></td></tr><tr><td>emoji_type</td><td>int</td><td></td><td></td></tr><tr><td>emoji_id</td><td>str</td><td></td><td></td></tr><tr><td>cookie</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>limit</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="get-message-setting" tabindex="-1">get_message_setting <a class="header-anchor" href="#get-message-setting" aria-label="Permalink to &quot;get_message_setting&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-pins" tabindex="-1">get_pins <a class="header-anchor" href="#get-pins" aria-label="Permalink to &quot;get_pins&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-role-permission" tabindex="-1">get_role_permission <a class="header-anchor" href="#get-role-permission" aria-label="Permalink to &quot;get_role_permission&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-schedule" tabindex="-1">get_schedule <a class="header-anchor" href="#get-schedule" aria-label="Permalink to &quot;get_schedule&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>schedule_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-schedules" tabindex="-1">get_schedules <a class="header-anchor" href="#get-schedules" aria-label="Permalink to &quot;get_schedules&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>since</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="get-thread" tabindex="-1">get_thread <a class="header-anchor" href="#get-thread" aria-label="Permalink to &quot;get_thread&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>thread_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-threads" tabindex="-1">get_threads <a class="header-anchor" href="#get-threads" aria-label="Permalink to &quot;get_threads&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="get-user-avatar" tabindex="-1">get_user_avatar <a class="header-anchor" href="#get-user-avatar" aria-label="Permalink to &quot;get_user_avatar&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>args</td><td>_empty</td><td></td><td></td></tr><tr><td>kwargs</td><td>_empty</td><td></td><td></td></tr></tbody></table><h2 id="get-user-permission" tabindex="-1">get_user_permission <a class="header-anchor" href="#get-user-permission" aria-label="Permalink to &quot;get_user_permission&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="modify-channel" tabindex="-1">modify_channel <a class="header-anchor" href="#modify-channel" aria-label="Permalink to &quot;modify_channel&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>channel_name</td><td>str</td><td></td><td></td></tr><tr><td>position</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>parent_id</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>private_type</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>speak_permission</td><td>Union[int, None]</td><td></td><td></td></tr></tbody></table><h2 id="modify-guild-role" tabindex="-1">modify_guild_role <a class="header-anchor" href="#modify-guild-role" aria-label="Permalink to &quot;modify_guild_role&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr><tr><td>name</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>color</td><td>Union[int, None]</td><td></td><td></td></tr><tr><td>hoist</td><td>int</td><td></td><td></td></tr></tbody></table><h2 id="modify-schedule" tabindex="-1">modify_schedule <a class="header-anchor" href="#modify-schedule" aria-label="Permalink to &quot;modify_schedule&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>schedule_id</td><td>str</td><td></td><td></td></tr><tr><td>name</td><td>str</td><td></td><td></td></tr><tr><td>description</td><td>str</td><td></td><td></td></tr><tr><td>start_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>end_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>creator</td><td>Union[dict, None]</td><td></td><td></td></tr><tr><td>jump_channel_id</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>remind_type</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="mute-all" tabindex="-1">mute_all <a class="header-anchor" href="#mute-all" aria-label="Permalink to &quot;mute_all&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>mute_end_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>mute_seconds</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="mute-all-lift" tabindex="-1">mute_all_lift <a class="header-anchor" href="#mute-all-lift" aria-label="Permalink to &quot;mute_all_lift&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="mute-user" tabindex="-1">mute_user <a class="header-anchor" href="#mute-user" aria-label="Permalink to &quot;mute_user&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr><tr><td>mute_end_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>mute_seconds</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="mute-user-lift" tabindex="-1">mute_user_lift <a class="header-anchor" href="#mute-user-lift" aria-label="Permalink to &quot;mute_user_lift&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="mute-users" tabindex="-1">mute_users <a class="header-anchor" href="#mute-users" aria-label="Permalink to &quot;mute_users&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_ids</td><td>List[str]</td><td></td><td></td></tr><tr><td>mute_end_timestamp</td><td>str</td><td></td><td></td></tr><tr><td>mute_seconds</td><td>str</td><td></td><td></td></tr></tbody></table><h2 id="mute-users-lift" tabindex="-1">mute_users_lift <a class="header-anchor" href="#mute-users-lift" aria-label="Permalink to &quot;mute_users_lift&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_ids</td><td>List[str]</td><td></td><td></td></tr></tbody></table><h2 id="post-message" tabindex="-1">post_message <a class="header-anchor" href="#post-message" aria-label="Permalink to &quot;post_message&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>src_guild_id</td><td>str</td><td></td><td></td></tr><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>req</td><td>MessageSendRequest</td><td></td><td></td></tr></tbody></table><h2 id="set-role-permission" tabindex="-1">set_role_permission <a class="header-anchor" href="#set-role-permission" aria-label="Permalink to &quot;set_role_permission&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr><tr><td>add</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>remove</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="set-user-permission" tabindex="-1">set_user_permission <a class="header-anchor" href="#set-user-permission" aria-label="Permalink to &quot;set_user_permission&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>channel_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr><tr><td>add</td><td>Union[str, None]</td><td></td><td></td></tr><tr><td>remove</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table><h2 id="set-user-role" tabindex="-1">set_user_role <a class="header-anchor" href="#set-user-role" aria-label="Permalink to &quot;set_user_role&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>guild_id</td><td>str</td><td></td><td></td></tr><tr><td>user_id</td><td>str</td><td></td><td></td></tr><tr><td>role_id</td><td>str</td><td></td><td></td></tr><tr><td>channel_id</td><td>Union[str, None]</td><td></td><td></td></tr></tbody></table>',114),i=[h];function l(s,o,n,b,_,u){return d(),e("div",null,i)}const g=t(a,[["render",l]]);export{m as __pageData,g as default};