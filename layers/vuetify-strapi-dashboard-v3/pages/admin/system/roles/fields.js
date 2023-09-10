export default [
  {
    text: 'id',
    align: 'start',
    sortable: true,
    value: 'id',
    header: false,
    edit: false,
    show: true,
    filterable: true,
    type: 'text',
    searchable: true,
  },
  {
    text: 'title',
    value: 'name',
    type: 'text',
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start',
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true,
  },
  {
    text: 'type',
    value: 'type',
    type: 'text',
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start',
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true
  },
  {
    text: 'description',
    value: 'description',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'textarea',
    align: 'center'
  },
  {
    text: 'users',
    value: 'nb_users',
    show: true,
    header: false,
    edit: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'text',
    align: 'center'
  },
  {
    text: '',
    filterable: false,
    value: 'actions',
    show: false,
    edit: false,
    sortable: false,
    searchable: false,
    align: 'left'
  },
]

