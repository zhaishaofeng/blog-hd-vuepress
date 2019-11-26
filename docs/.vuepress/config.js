module.exports = {
    title: '海顿开发文档',
    description: '不止于匠，更关乎心',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/custom-form/info' },
            { text: '配置', 
              items: [
                { text: '自定义表单', link: '/config/custom-form/base' },
                { text: '工作流', link: '/config/workflow/base' }
              ]
            },
            { text: '架构解读', 
              items: [
                { text: '自定义表单', link: '/framework/custom-form/info' },
                { text: '工作流', link: '/framework/workflow/info' }
              ]
            }
        ],
        lastUpdated: 'Last Updated',
        sidebar: {
            '/guide/': [
                {
                    title: '自定义表单',
                    collapsable: false,
                    children: [
                        ['./custom-form/info', '介绍']
                    ]
                },
                {
                    title: '工作流',
                    collapsable: false,
                    children: [
                        ['./workflow/info', '介绍']
                    ]
                }
            ],
            '/config/': [
                {
                    title: '自定义表单',
                    collapsable: false,
                    children: [
                        ['./custom-form/base', '基本配置']
                    ]
                },
                {
                    title: '工作流',
                    collapsable: false,
                    children: [
                        ['./workflow/base', '基本配置']
                    ]
                }
            ],
            '/framework/': [
                {
                    title: '自定义表单',
                    collapsable: false,
                    children: [
                        ['./custom-form/info', '架构图']
                    ]
                },
                {
                    title: '工作流',
                    collapsable: false,
                    children: [
                        ['./workflow/info', '架构图']
                    ]
                }
            ]
        }
    }
}