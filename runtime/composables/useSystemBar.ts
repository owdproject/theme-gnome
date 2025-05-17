import { ref, computed } from 'vue'
import { useDesktopManager } from '@owdproject/core/runtime/composables/useDesktopManager'
import { useApplicationManager } from '@owdproject/core/runtime/composables/useApplicationManager'

export function useSystemBar(_config?: DesktopSystemBarConfig | undefined) {
  const applicationManager = useApplicationManager()
  const desktopManager = useDesktopManager()

  const config = desktopManager.config

  const defaultTerminalApp = desktopManager.getDefaultApp('terminal')
  const defaultAuthApp = desktopManager.getDefaultApp('auth')

  const enabled = ref(false)
  const windows = computed(() => applicationManager.windowsOpened)

  const menu = computed(() => {
    const systemBarMenu: any = []

    return systemBarMenu
  })

  return {
    config,
    windows,
    menu,
  }
}
