export default [
  {
    text: 'id',
    align: 'start',
    sortable: true,
    value: 'id',
    header: false,
    edit: false,
    create: false,
    show: true,
    filterable: true,
    type: 'text',
    searchable: false,
  },

  {
    text: 'username',
    value: 'username',
    type: 'text', // textarea bool img rich price date
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'password',
    value: 'password',
    type: 'password', // textarea bool img rich price date
    header: false,
    table: false,
    show: false,
    pop: false,
    edit: true,
    create: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'email',
    value: 'email',
    type: 'text', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'role',
    value: 'role',
    type: 'select', // textarea bool img rich price date
    meta: {
      text: 'text',
      value: 'id'
    },
    store: 'roles',
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'confirm',
    value: 'confirmed',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    create: true,
    expand: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'blocked',
    value: 'blocked',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    expand: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: '',
    value: 'actions',
    header: true,
    expand: false,
    show: false,
    edit: false,
    pop: false,
    create: false,
    sortable: false,
    searchable: false,
    filterable: false,
    align: 'left'
  }
];
