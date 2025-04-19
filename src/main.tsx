import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PriceCalculator } from './fundamental_components/PriceCalculator'

/**
 * createRoot - creates a root / manages the DOM and then render components inside of it.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PriceCalculator />
  </StrictMode>,
)
