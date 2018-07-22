

const prayers = [
  { id: 1, user: 'Brookes', title: 'Pray 4 peace', description: 'For peace in the streets, and in the other nations' }
]

let users = []

const savePrayer = prayer => {
  prayer.id = prayers.length
  prayer.user = 'Brookes'
  prayers.push(prayer)
}

const getPrayers = () => prayers

const getUsers = async () => {
  let data = await getUsers().json()
  console.log('data', data)
  return data;
  // .then(res => res.json())
  // .then(users => users)
  // .catch(error => {
  //   console.error('ERROR', error);
  //   return []
  // })
}

const callForUsers = () => {
  return fetch('/users')
    .catch(console.error)
}


export default {
  getPrayers,
  getUsers,
  savePrayer
}


