import ItemStore from './stores/itemstore'
import router from './router.js'
import route from 'riot-route'

// import tags
import './pages/home.tag'
import './pages/projects.tag'

// Riot router
route(router)
// Execute router function once for rendering the items
route.exec(router)

// add store to riot control
const itemStore = new ItemStore()
RiotControl.addStore(itemStore)

riot.mount('riot-app') // Kickoff the Riot app.
