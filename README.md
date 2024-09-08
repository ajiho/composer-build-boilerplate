# composer-build-boilerplate

快速构建composer包的简单样板


# 集成

- vitepress写项目文档(比较精美)
- github action+vercel来部署文档(相比github pages可以预览每次部署的内容,实现版本控制)
- `release-please`来自动发版(会自动生成变更日志+创建tag+release)
- `brainmaestro/composer-git-hooks`来增加hook钩子简单验证提交信息符合常规提交规范(类似node生态中的husky)
- `squizlabs/php_codesniffer`来检查样式(类似node生态中的preitter)
- `phpunit/phpunit`单元测试
- `phpstan/phpstan`来检查代码质量(类似node生态中的eslint、stylelint)
- 默认安装`topthink/framework`快速设计基于tp框架的封装(可以自己删除)


