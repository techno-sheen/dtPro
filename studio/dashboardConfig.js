export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9c8cf8b1c66611347924c8',
                  title: 'Sanity Studio',
                  name: 'dtpro-studio',
                  apiId: '74183921-0698-4a03-a534-68da311cc05c'
                },
                {
                  buildHookId: '5f9c8cf89389010d7119e4c4',
                  title: 'Blog Website',
                  name: 'dtpro',
                  apiId: 'f1331ec9-a616-4744-9eed-baaf1e800f44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/technosheen/dtPro',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dtpro.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
