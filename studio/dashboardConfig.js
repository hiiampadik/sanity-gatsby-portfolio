export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '62f3b495cb3377527b3b44de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uurzp2qc',
                  apiId: '02b177f0-ab56-4852-971c-b9ca33662a98'
                },
                {
                  buildHookId: '62f3b495ca6258549c754ae8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9snnqpqm',
                  apiId: 'ace87e50-35c7-462a-af78-506ecd7b0194'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hiiampadik/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9snnqpqm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
