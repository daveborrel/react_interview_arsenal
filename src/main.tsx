import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FunctionalComponent from './fundamental_components/FunctionalComponent'
import ClassComponent from './fundamental_components/ClassComponent'

/**
 * createRoot - creates a root / manages the DOM and then render components inside of it.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClassComponent />
    <FunctionalComponent />
  </StrictMode>,
)
