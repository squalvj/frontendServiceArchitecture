import {
   list,
   call
} from './../service/index'

export const getTheUser = () => {
   return call(
      {
         url: list.getUser,
         method: 'get',
         header: {
            'Authorization': 'Bearer asdkoaskda'
         }
      }
   )
}

export const getTheUserById = id => {
   return call(
      {
         url: `${list.getUser}/${id}`,
         method: 'get',
         header: {
            'Authorization': 'Bearer asdkoaskda'
         }
      }
   )
}

export const createUser = (obj) => {
   return call(
      {
         url: list.getUser,
         method: 'post',
         data: obj
      }
   )
}