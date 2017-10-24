export default [
  {
    'description': {
      'noun':'user',
      'verb':'use the front end for the application'
    },
    'name': 'Website',
    'createdAt': '',
    'items': [
      {
        'description': {
          'noun':'user',
          'verb': 'Login, Signup, edit your profile, and recover a lost password'
        },
        'name': 'Sessions',
        'items': [
          {
            'description': {
              'noun': 'user',
              'verb':'login to the site'
            },
            'name': 'Login',
            'value': false
          },
          {
            'description': {
              'noun':'user',
              'verb':'sign up on the site'
            },
            'name': 'Sign Up',
            'value': true
          },
          {
            'description': {
              'noun':'user',
              'verb':'log out of the site'
            },
            'name': 'Logout',
            'value': false
          }
        ]
      },
      {
        'description': {
          'noun':'user',
          'verb':'search the site'
        },
        'name': 'Search',
        'items': [
          {
            'description': {
              'noun':'developer (or user via website)',
              'verb':'query the api with your a search request'
            },
            'name': 'Api Integration',
            'value': true
          },
          {
            'description': {
              'noun':'user',
              'verb':'enter a search term into the website and then see results'
            },
            'name': 'UI',
            'value': true
          }
        ]
      }
    ]
  },
  {
    'description': {
      'noun':'developer (or user via website)',
      'verb':'make requests to the api'
    },
    'name': 'Api',
    'items': [
      {
        'description': {
          'noun':'developer (or a user via website)',
          'verb':'login, sign up, logout, edit your profile and recover your password '
        },
        'name': 'Sessions',
        'items':[
          {
            'name':'Login',
            'description': {
              'noun':'developer (or a user via website)',
              'verb':'login to the api'
            },
            'value': true
          }
        ]
      }
    ]
  },
  {
    'description': {
      'noun':'android user',
      'verb':'use the android app'
    },
    'name': 'Android App',
    'items': [
      {
        'description': {
          'noun':'android user',
          'verb':'login, sign up, edit your profile, and logout'
        },
        'name': 'Sessions',
        'value': true
      }
    ]
  },
  {
    'description': {
      'noun':'iPhone user',
      'verb':'use the iPhone app'
    },
    'name': 'iPhone App',
    'items': [
      {
        'description': {
          'noun':'iPhone user',
          'verb':'login, sign up, edit your profile, and logout'
        },
        'name': 'Sessions',
        'value': false
      }
    ]
  }
]