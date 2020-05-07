import Api from './api'

export default {
  getAll() {
    return Api().get('api/estate')
  },
  createOne(estate, token) {
    return Api().post('api/estate', estate, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'content-type': 'multipart/form-data'
      }
    })
  },
  deleteOne(id, token) {
    return Api().delete(`api/estate/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

}
