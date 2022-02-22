# UCAS本科生GPA、加权平均分实时计算器

## 前言

写这个脚本纯属是闲的蛋疼。。。新学期上课之前没有什么事情。宿舍三个人闲聊的时候发现我们三个人的GPA都没变，排名也没有变，就怀疑是GPA始终没有刷新，我的两个室友就开始用自己的方法把GPA重算了一遍(好像用的是Excel)，结果是GPA确实没有变，而且SEP网站也确实是刷新了。我自己也是学了一个假期的JS，正好用这个机会练练手，写个脚本帮着自动计算一下GPA。

## 脚本受众

比较关心自己的GPA和成绩，且无法忍受SEP长期不刷新GPA的UCAS**本科生**，

## 脚本功能：

* 实时计算GPA(包括每个特定学期和全部学期)
* 实时计算加权平均分(包括每个特定学期和全部学期)

* 局限：无法实时刷新自己的GPA排名(不黑学校服务器，我怎么可能知道别人的成绩来给你刷新排名？)

当浏览器打开所有成绩页面时，显示的是全部学期的GPA和加权平均分；当浏览器打开某个学期的成绩页面时，显示的是当前学期的GPA和加权平均分。

## 使用方法

脚本需要挂在在**油猴脚本(Tampermonkey)插件**上才能正常运行。

浏览器插件油猴脚本的安装教程参见[这里](https://zhuanlan.zhihu.com/p/387251122)

注：不推荐使用Chrome、Edge、Firefox之外的浏览器运行该脚本。

安装好之后，点击目录中的`gpa_calc.js`，便可看到全部代码。在油猴脚本插件的选项中找到新添加脚本，将默认脚本内容删除后，将文件`gpa_calc.js`中的**所有代码**(注意是所有！包含注释！)复制到网页代码编辑器中，按`Ctrl+S`保存即可。

再次打开SEP的成绩查询页面后，会发现GPA一栏多出`(实时)`字样。

如果在使用过程中遇到问题，可以使用Google或Baidu搜索相关问题。

## 改进

如果您发现脚本存在bug或者您有对脚本更好的改进意见，请联系`anwentao1@gmail.com`。

如果您对脚本还算满意，请帮我点亮一颗star。