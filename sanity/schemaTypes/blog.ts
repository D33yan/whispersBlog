
export default{
  name: 'blog',
  type :'document',
  title:'blog',
  fields:[
    {
      name:'title',
      type:'string',
      title:'Title of blog article',
    },
    {
      name:'slug',
      type:'slug',
      title:'slug of blog article',
      options:{
        source:'title'
      }
    },
    {
      name:'titleImage',
      type:'image',
      title:'Title Image of blog',
    },
    {
      name:'smallDescription',
      type:'text',
      title:'small Description',
    },
    {
      name:'content',
      type:'array',
      title:'Content',
      of:[
        {
        type:'block'
        },
      ]
    },

  ]
}