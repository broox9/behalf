const credentials = require(`${process.env.CREDENTIALS_PATH}/neo4j.json`)
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic(credentials.user, credentials.password));

module.exports = { driver, getAllNodes, getAllUsers, getAllPrayers, createPrayer };

const unfiedSession = driver.session()

function getAllNodes() {
  return driver.session()
    .run('match (n) return (n)')
    .then(result => result)
    .catch(e => console.log('Error', e))
}


function getAllUsers() {
  return unfiedSession.run('match (u:User) return u.fname as fname , u.lname as lname , u.email as email, u.uuid AS uuid')
}

function getAllPrayers() {
  return unfiedSession.run('match (p:Prayer) return p.title as title , p.description as description , p.isPublic as isPublic, p.uuid AS uuid, p.createdAt AS createdAt')
}

function createPrayer(prayer) {
  console.log('CREATE THIS ', prayer)
  return unfiedSession.run('MATCH (u:User {uuid: {uuid} }) MERGE (u) - [r:POST {isPublic: {isPublic} }] -> (p:Prayer {title: {title}, description: {description}, isPinned: {isPinned}, createdAt: date(), uuid: randomUUID() }) return (p)', prayer)
}

//TODO: getUserByid or getUserByEmail, getPrayerById, getPublicPrayers

