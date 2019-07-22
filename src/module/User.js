import {
   list,
   call
} from './../service/index'

export const getTheUser = () => {
   return call({
      url: list.getUser,
      method: 'get',
      header: {
         'Authorization': 'Bearer asdkoaskda'
      }
   })
}

export const getTheUserById = id => {
   return call({
      url: `${list.getUser}/${id}`,
      method: 'get',
      header: {
         'Authorization': 'Bearer asdkoaskda'
      }
   })
}

export const createUser = (obj) => {
   return call({
      url: list.getUser,
      method: 'post',
      data: obj
   })
}

export const testCustomErrorHandling = (obj) => {
   return call(
      {
         url: list.getUser,
         method: 'post',
         data: obj
      },
      handleUserError
   )
}

const handleUserError = res => {
   // THIS IS CUSTOM ERROR HANDLING
   // FOR EXAMPLE IF BACKEND SEND SPECIAL PROPERTY SOMETHING...
   // THEN DO SOMETHING...
   
   alert('THIS IS CUSTOM ERROR')
   return Promise.reject()
}