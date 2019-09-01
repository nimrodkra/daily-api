const pubs = [
  {
    id: 'itnext',
    name: 'ITNEXT',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/itnext2',
    enabled: 1,
    twitter: 'itnext_io',
  },
  {
    id: 'devto',
    name: 'DEV',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/devto',
    enabled: 1,
    twitter: 'ThePracticalDev',
  },
  {
    id: 'medium_js',
    name: 'Medium',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/medium',
    enabled: 1,
    twitter: '',
  },
  {
    id: 'echojs',
    name: 'Echo JS',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/echojs',
    enabled: 1,
    twitter: '',
  },
  {
    id: 'ph',
    name: 'Product Hunt',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/ph',
    enabled: 1,
    twitter: 'ProductHunt',
  },
  {
    id: 'tc',
    name: 'TechCrunch',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/tc',
    enabled: 1,
    twitter: 'TechCrunch',
  },
  {
    id: 'tnw',
    name: 'The Next Web',
    image: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/tnw',
    enabled: 1,
    twitter: 'thenextweb',
  },
];

const now = new Date();
now.setMilliseconds(0);

const posts = [
  {
    id: '332dea17513053ee6cd58831fbe1775a',
    title: 'Things Newbies Should Know',
    url: 'https://itnext.io/javascript-things-newbies-should-know-e04bab10449f',
    publishedAt: new Date(now - 1000),
    createdAt: new Date(now - 1000),
    publicationId: 'itnext',
    views: 235,
    tags: [
      'javascript',
      'webdev',
      'nodejs',
    ],
    readTime: 7,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/2e347452b141d9afffe61d435aacecb4',
    ratio: 1,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAIxAAAgIBAwMFAAAAAAAAAAAAAQIDBBEABTEGEiEVIyRBof/EABUBAQEAAAAAAAAAAAAAAAAAAAUH/8QAGREAAwEBAQAAAAAAAAAAAAAAAQIDABJB/9oADAMBAAIRAxEAPwDTeqeok2BIPhWbssySukcGO721DH8P1ng6RobnTuUa9mOzB2TRrIuJVYYIzyD5550P1DtlC1buzWaVWab09l75IlZsBsgZI1QUKNSKjWjjqwJGkaqqrGAAAPAA1G6QRYI3pzgY9Eb/2Q==',
  },
  {
    id: '7081997e25ab3c91d26ff249d51b5d10',
    title: 'Breaking down the last monolith - Micro Frontends',
    url: 'https://dev.to/aregee/breaking-down-the-last-monolith-micro-frontends-hd4',
    createdAt: new Date(now - 2000),
    publicationId: 'devto',
    views: 79,
    tags: [
      'javascript',
      'webdev',
      'react',
      'vue',
    ],
    readTime: 19,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ef7aa3e7ecc48830e6f41aa482e7ab7e',
    ratio: 2,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAiEAABAgUEAwAAAAAAAAAAAAACAQMABAUREgYHEyEzQdP/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAEQMS8P/aAAwDAQACEQMRAD8AnGrtqaXQZrWDLc/OvLRhlSZIsEz5QAlyS3rJbWtA9taAJkPLVOlt52/nCEBbI2oN9QiFUWZ//9k=',
  },
  {
    id: '908204196bcc3a0b543a245a55446b30',
    title: 'GoLangーZero downtime deploys and Rollbacks | Go HTTP serverーEcho Web Framework & Apache',
    url: 'https://medium.com/web-developer/golang%E3%83%BCzero-downtime-deploys-and-rollbacks-go-http-server%E3%83%BCecho-web-framework-apache-12a9a21bfc25',
    publishedAt: new Date(now - 3000),
    createdAt: new Date(now - 3000),
    publicationId: 'medium_js',
    views: 16,
    tags: [
      'tech',
      'webdev',
      'golang',
      'web',
      'deployment',
    ],
    readTime: 3,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/c51ad89a8474608072db6e3ba8ea9f98',
    ratio: 1.76,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHxAAAQQCAgMAAAAAAAAAAAAAAQACAxEEBRIxUZGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwDddhpJMnLmkjzp4hI6+AcaHV16V+NpYxrb6AHn6iKhGW//2Q==',
  },
  {
    id: 'a1321ea21f0eafb32975c678ce834de1',
    title: 'Project Architecture For Front End Applications',
    url: 'https://medium.com/gradeup/project-architecture-for-front-end-applications-5db31abb63c2',
    publishedAt: now,
    createdAt: new Date(now - 4000),
    publicationId: 'echojs',
    views: 9,
    tags: [
      'react',
      'frontend',
    ],
    readTime: 5,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/f905a63676a6fb77ab6256aab192de5f',
    ratio: 0.63,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQH/8QAIBAAAQIFBQAAAAAAAAAAAAAAAAECBBESEyEzUXGCsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDDIzW6p4AURbnXp1TwmU4BqduB/9k=',
  },
  {
    id: '88dbb59d3407127592365d16f8f71070',
    title: 'Swifty — Simple, lightweight & free password manager',
    url: 'https://www.producthunt.com/posts/swifty-4',
    publishedAt: new Date(now - 5000),
    createdAt: new Date(now - 5000),
    publicationId: 'ph',
    views: 17,
    tags: [
      'tech',
      'open-source',
      'privacy',
      'developer-tools',
      'saas',
      'crypto',
    ],
    readTime: null,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/bb72ba1ed9234a3102d00420622cc375',
    ratio: 2,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHxAAAQQCAgMAAAAAAAAAAAAAAgABAwYEBRESEyEx/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAbEQACAgMBAAAAAAAAAAAAAAABAgADBGGREf/aAAwDAQACEQMRAD8ArK7dN6FYxOmTEwwYsIi3gF/XRmWO2OwbGaw7SWSUHM8qUi4jb65uiKsysWlUBCDmhAaL7Cx9Y93P/9k=',
  },
  {
    id: '8a9a2157ff8e7c0ab8552985182987ec',
    title: 'Week in Review: Google rips out its sweet tooth',
    url: 'http://social.techcrunch.com/2019/08/25/week-in-review-google-rips-out-its-sweet-tooth/',
    publishedAt: new Date(now - 6000),
    createdAt: new Date(now - 6000),
    publicationId: 'tc',
    views: 0,
    tags: [
      'google',
      'android',
      'apple',
      'y-combinator',
      'techcrunch',
      'iphone',
      'operating-system',
      'nike',
    ],
    readTime: 4,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/a1a1bce0e3fa94bce6508e67499f1442',
    ratio: 1.91,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAHBAAAQUBAQEAAAAAAAAAAAAAAQACAxESIQUx/8QAFQEBAQAAAAAAAAAAAAAAAAAABQf/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIRITH/2gAMAwEAAhEDEQA/ANaCKN8BOaaHVn7xVnnQ5GrJrp51EQaYdSg2snJ//9k=',
  },
  {
    id: 'dba374dec0d24da7b22c5f637190de4c',
    title: 'v2 of instagram-public-api',
    url: 'https://www.npmjs.com/package/instagram-public-api',
    createdAt: new Date(now - 7000),
    publicationId: 'echojs',
    views: 2,
    tags: [],
    readTime: 2,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/338e4905a2684ca96e08c7780fc68412',
    ratio: 1.9,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAIBAAAAYCAgMAAAAAAAAAAAAAAAECAwQRBQYSITEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAYH/8QAGREBAQADAQAAAAAAAAAAAAAAAQIAAyEx/9oADAMBAAIRAxEAPwDC4raZeN1qfhWGmTjzV83Fqvl6GmvNV3f0iEAABlpeOXGNUQtSdfc//9k=',
  },
  {
    id: '5b66967572cc5f6abdc269c0762d263c',
    title: 'Don’t be an idiot — here’s how to store and remember all your passwords',
    url: 'https://thenextweb.com/basics/2019/08/25/dont-be-an-idiot-heres-how-to-store-and-remember-all-your-passwords/',
    createdAt: new Date(now - 8000),
    publicationId: 'tnw',
    views: 4,
    tags: [
      'security',
    ],
    readTime: 6,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/17855b8ec875fe933e9d6374f5878c99',
    ratio: 2,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQH/8QAIhAAAQQBAgcAAAAAAAAAAAAAAQIDBBEABSEGEhMUImHi/8QAFQEBAQAAAAAAAAAAAAAAAAAABAb/xAAeEQACAgAHAAAAAAAAAAAAAAABAgAEAwUREjGh0f/aAAwDAQACEQMRAD8Ayh2JCahw4506E664x5PuIVzg2RYpQHve98jXwYErUnvro1fR+sYwtzEZH2rwJRNlVUEaJ2fZ/9k=',
  },
  {
    id: '7876c6adf5473771bd54c81112f3973a',
    title: 'Stolen fingerprints could spell the end of biometric security – here’s how to save it',
    url: 'https://thenextweb.com/syndication/2019/08/25/stolen-fingerprints-could-spell-the-end-of-biometric-security-heres-how-to-save-it/',
    createdAt: new Date(now - 9000),
    publicationId: 'tnw',
    views: 4,
    tags: [
      'tech',
    ],
    readTime: 4,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/86390755fc084065793d4d45fa381ee7',
    ratio: 2,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAIBAAAgEDBQEBAAAAAAAAAAAAAQIDAAQFBhETITEiUf/EABUBAQEAAAAAAAAAAAAAAAAAAAQG/8QAHBEAAQUAAwAAAAAAAAAAAAAAAgABAwQRBaHR/9oADAMBAAIRAxEAPwDFzOJx1jp2yu8dbuuSeA8t3cvzyO2+5bcgEHv96qc6QSUmSa5R5X+nYwDsn0+0pRrhPEeAqOXjqzZg9v6v/9k=',
  },
  {
    id: 'c92e6241e3dc612aaf06fb0d86dd75a7',
    title: 'How to manage projects effectively?',
    url: 'https://frontnet.eu/how-to-manage-projects-effectively/',
    createdAt: new Date(now - 10000),
    publicationId: 'echojs',
    views: 1,
    tags: [],
    readTime: 7,
    image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/298128eb1c48c0a24f89bbfe0799f5ab',
    ratio: 1.78,
    placeholder: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAHxAAAQMEAwEAAAAAAAAAAAAAAQIDEQAEBRITQVTR/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAaEQABBQEAAAAAAAAAAAAAAAACAAEDBDFB/9oADAMBAAIRAxEAPwDYXmZXjW8pYtJdPDro4XjskKAECZiJnuqVYMFRJfyEk+k/KUobTG/VSr1YS0V//9k=',
  },
];

export default {
  pubs,
  posts,
  now,
};