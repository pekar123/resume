// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$',
  address: 'м.Київ вул.Вокзальна 21',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    link: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
var big

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills ',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'Vs Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 7,
        },
        {
          name: 'NPM',
          point: 6,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Ігрові карти',
          isMain: true,
        },
        {
          name: 'Гольф',
          isMain: false,
        },
        {
          name: 'Покер',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header,

    main: {
      educations: [
        {
          name: 'SHOOL1',
          isEnd: true,
        },
        {
          name: 'SHOOL2',
          isEnd: false,
        },
        {
          name: 'SHOOL3',
          isEnd: true,
        },
        {
          name: 'SHOOL4',
          isEnd: false,
        },
        {
          name: 'SHOOL5',
          isEnd: true,
        },
        {
          name: 'SHOOL6',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Міністерство освіти і науки',
          id: 1,
        },
        {
          name: 'Міністерство освіти і науки',
          id: 2,
        },
        {
          name: 'Міністерство освіти і науки',
          id: 3,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Devoloper',
          company: {
            name: 'IT BR',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://youtube.com.ua',
              about: 'Text',

              stackAmount: 4,
              stack: [
                {
                  name: 'React',
                },
                {
                  name: 'CSS',
                },
                {
                  name: 'HTML',
                },
              ],
              awardAmout: 5,
              awards: [
                {
                  name: 'text',
                },
                {
                  name: 'text2',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
