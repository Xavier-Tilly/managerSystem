import request from '@/utils/request'



export function userList(page, pageSize) {
    const data={
        page:page,
        pageSize:pageSize
    }
    return request({
        url: '/userList',
        method: 'get',
        params:data
      })
  }