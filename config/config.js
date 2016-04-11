exports.config = [{  
  //连接池
  pool: {
    name: 'mh',//连接池名称
    maxconn: 3 //最大连接数
  },
  db: {
    host: '114.215.157.230',
    //数据库IP地址
    port: 3306,
    //数据库端口
    user: 'slj',
    //用户名
    password: 'Song521530!)',
    //密码
    database: 'mh' //数据库名
  }
}];