import { useBoolean, useLocalStorageState, useUpdateEffect } from 'ahooks'
import { useEffect } from 'react'

const USE_DARK_MODE_STORAGE_KEY = '__plasticine_astro_doc_site_dark_mode__'

export function useDarkMode() {
  const [storageDarkMode, setStorageDarkMode] = useLocalStorageState(USE_DARK_MODE_STORAGE_KEY, {
    defaultValue: () => resolveDarkModeFollowTheSystem(),
  })

  const [isDarkMode, actions] = useBoolean(storageDarkMode)

  // 同步 LocalStorage 里的状态
  useUpdateEffect(() => {
    setStorageDarkMode(isDarkMode)
  }, [isDarkMode])

  // 同步 html 标签的 data-mode 属性
  useEffect(() => {
    const documentElement = document.documentElement

    documentElement.dataset.mode = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return [isDarkMode, actions] as const
}

/**
 * 跟随系统的深色模式 - 如果浏览器不支持 matchMedia API 则默认是深色模式
 */
function resolveDarkModeFollowTheSystem(): boolean {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ?? true

  return isDarkMode
}
