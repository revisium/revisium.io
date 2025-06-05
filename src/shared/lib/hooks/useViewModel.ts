/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useMemo, useState } from 'react'
import { container } from 'src/shared/lib'

export const useViewModel = <T extends { init: (...args: any[]) => void; dispose: () => void }>(
  Class: new (...args: any[]) => T,
  ...initArgs: Parameters<NonNullable<T['init']>>
) => {
  const [model] = useState(() => container.get(Class))

  const [previousArgs, setPreviousArgs] = useState<Parameters<NonNullable<T['init']>>>(initArgs)

  const memoizedInitArgs = useMemo(() => {
    if (previousArgs.length !== initArgs.length || previousArgs.some((arg, index) => arg !== initArgs[index])) {
      setPreviousArgs(initArgs)

      return initArgs
    }

    return previousArgs
  }, [initArgs, previousArgs])

  useEffect(() => {
    const instance = model
    instance?.init?.(...memoizedInitArgs)

    return () => {
      instance?.dispose?.()
    }
  }, [memoizedInitArgs, model])

  return model
}
