import { useEffect } from '@hook/useEffect.ts'
import { useGlobalState } from '@hook/useGlobalState.ts'
import { useState } from '@hook/useState.ts'

export const usePathname = () => {
  const [paths] = useGlobalState<string[]>('RVJS_ROUTER_PATHS')
  const [path, setPath] = useState<string>(null)

  useEffect(() => {
    setPath((window.location.hash || '#/').replace('#/', '/'))
  }, [paths])

  return path
}
