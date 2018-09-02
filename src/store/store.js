import {
    applyMiddleware,
    compose,
    createStore
  } from 'redux'
  import createSagaMiddleware from 'redux-saga'
  import { connectRouter, routerMiddleware } from 'connected-react-router'
import history from './history'
  
  import rootReducer from './reducer'
  import rootSaga from './sagas'
  
  const sagaMiddleware = createSagaMiddleware()
  
  const enhancers = compose(
    applyMiddleware(routerMiddleware(history),sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
  
  const store = createStore(
    connectRouter(history)(rootReducer),
    enhancers
  )
  
  sagaMiddleware.run(rootSaga)
  
  export default store