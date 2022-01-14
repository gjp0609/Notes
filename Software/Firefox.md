## FireFox

### 自定义样式

> 1. 访问 `about:config` 页面，设置 `toolkit.legacyUserProfileCustomizations.stylesheets` 选项为 `true`。
>
> 1. 访问 `about:support` 页面，点击 `配置文件夹` 中的打开文件夹，在文件夹内新增 `chrome/userChrome.css` 文件。
>
> 1. 打开开发者工具，在 `设置` 的 `高级设置` 中打开 `启用浏览器界面及附加组件的调试工具箱` 和 `启用远程调试` 选项
>
> 1. 打开 WEB 开发者工具，打开 `浏览器工具箱` 选项之后即可对浏览器进行调试
>
> 1. css 代码示例：[Github](https://github.com/gjp0609/Scripts/blob/master/css/userChrome.less)

```less
// userChrome.css
@-moz-document url("chrome://browser/content/browser.xul"),
url("chrome://browser/content/browser.xhtml")
{
    // Code here
}
```

### 自定义策略

在安装目录下新增 `distribution/policies.json` 文件，内容参考 [Policy Templates](https://github.com/mozilla/policy-templates)

```json
{
    "policies": {
        "ManualAppUpdateOnly": true,
        "DontCheckDefaultBrowser": true,
        "UserMessaging": {
            "WhatsNew": false,
            "ExtensionRecommendations": false
        }
    }
}
```

-   ManualAppUpdateOnly

    > Allow manual updates only and do not notify the user about updates.
    >
    > 只允许手动更新，不通知用户更新。

-   DontCheckDefaultBrowser

    > Don't check if Firefox is the default browser at startup.
    >
    > 启动时不检查 Firefox 是否默认浏览器。

-   UserMessaging

    > Prevent Firefox from messaging the user in certain situations.
    >
    > 阻止 Firefox 在某些情况下向用户发送消息。

    -   WhatsNew
        > Remove the "What's New" icon and menuitem.
        >
        > 删除“新增功能”图标和菜单项。
    -   ExtensionRecommendations
        > If `false`, don't recommend extensions while the user is visiting web pages.
        >
        > 如果为 `false`，不在用户访问网页时推荐扩展。
