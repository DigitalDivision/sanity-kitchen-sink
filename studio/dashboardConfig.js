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
                  buildHookId: '5f57fcfb96ac6740e005ed3c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m91u5t2n',
                  apiId: 'd2c5e835-fafb-4fd3-a2c6-2c8ba6b90051'
                },
                {
                  buildHookId: '5f57fcfbe0d3ce5077add870',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b5yf6sxq',
                  apiId: '2fc633de-42b1-4cde-9f3d-21a9622f584b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DigitalDivision/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b5yf6sxq.netlify.app', category: 'apps'}
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
