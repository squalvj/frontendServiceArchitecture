import {
   list,
   call
} from './../service/index'

export const getTheUser = () => {
   return call(
      {
         url: list.getUser,
         method: 'get',
         data: {
            kok: 123
         },
         header: {
            'Authorization': 'Bearer asdkoaskda'
         }
      }
   )
}