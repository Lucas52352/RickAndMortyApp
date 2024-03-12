import { lazy } from 'react'

export { HomePage } from './Home'
export const LoginPage = lazy(() => import('./Login'))
export const CharacterPage = lazy(() => import('./Character'))