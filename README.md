# composer-build-boilerplate

快速构建 composer 包的简单样板

# 集成

-   [vitepress](https://github.com/vuejs/vitepress)写项目文档(比较精美)
-   github action+[vercel](https://vercel.com/)来部署文档(相比 github pages 可以预览每次部署的内容,实现版本控制)
-   [release-please](https://github.com/googleapis/release-please)来自动发版(会自动生成变更日志+创建 tag+release)
-   [composer-git-hooks](https://github.com/BrainMaestro/composer-git-hooks)来增加 hook 钩子简单验证提交信息符合常规提交规范(类似 node 生态中的 husky)
-   [php_codesniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer/)来检查样式(类似 node 生态中的 preitter)
-   [phpunit](https://github.com/sebastianbergmann/phpunit)单元测试
-   [phpstan](https://github.com/phpstan/phpstan)来检查代码质量(类似 node 生态中的 eslint、stylelint)
-   默认安装[topthink/framework](https://github.com/top-think/framework)快速设计基于 tp 框架的composer包(可以自己删除)
