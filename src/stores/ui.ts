import { addPrefix } from '@/utils'
import { store } from '@/utils/storage'

/**
 * UI 状态 Store
 * 负责管理全局 UI 状态，包括深色模式、侧边栏、对话框等
 */
export const useUIStore = defineStore(`ui`, () => {
  // ==================== 全局 UI 状态 ====================
  // 是否开启深色模式
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // 是否在左侧编辑
  const isEditOnLeft = store.reactive(`isEditOnLeft`, true)
  const toggleEditOnLeft = useToggle(isEditOnLeft)

  // 是否打开右侧滑块
  const isOpenRightSlider = store.reactive(addPrefix(`is_open_right_slider`), false)

  // 是否打开文章列表滑块
  const isOpenPostSlider = store.reactive(addPrefix(`is_open_post_slider`), false)

  // 是否为移动端
  const isMobile = store.reactive(`isMobile`, false)

  // 是否固定显示浮动目录
  const isPinFloatingToc = store.reactive(addPrefix(`isPinFloatingToc`), false)
  const togglePinFloatingToc = useToggle(isPinFloatingToc)

  // 是否显示浮动目录
  const isShowFloatingToc = store.reactive(addPrefix(`isShowFloatingToc`), true)
  const toggleShowFloatingToc = useToggle(isShowFloatingToc)

  // ==================== 对话框状态 ====================
  // 是否展示 CSS 编辑器
  const isShowCssEditor = store.reactive(`isShowCssEditor`, false)
  const toggleShowCssEditor = useToggle(isShowCssEditor)

  // 是否展示插入表格对话框
  const isShowInsertFormDialog = ref(false)
  const toggleShowInsertFormDialog = useToggle(isShowInsertFormDialog)

  // 是否展示插入公众号名片对话框
  const isShowInsertMpCardDialog = ref(false)
  const toggleShowInsertMpCardDialog = useToggle(isShowInsertMpCardDialog)

  // 是否展示模板管理对话框
  const isShowTemplateDialog = ref(false)
  const toggleShowTemplateDialog = useToggle(isShowTemplateDialog)

  // 是否打开重置样式确认对话框
  const isOpenConfirmDialog = ref(false)

  // 搜索面板状态
  const searchTabRequest = ref<{ word: string, showReplace: boolean } | null>(null)

  function openSearchTab(searchWord: string = '', showReplace: boolean = false) {
    searchTabRequest.value = { word: searchWord, showReplace }
  }

  function clearSearchTabRequest() {
    searchTabRequest.value = null
  }

  // ==================== 工具函数 ====================
  // 处理窗口大小变化
  function handleResize() {
    isMobile.value = window.innerWidth <= 768
  }

  onMounted(() => {
    handleResize()
    window.addEventListener(`resize`, handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener(`resize`, handleResize)
  })

  return {
    // ==================== 全局 UI 状态 ====================
    isDark,
    isEditOnLeft,
    isOpenRightSlider,
    isOpenPostSlider,
    isMobile,
    isPinFloatingToc,
    isShowFloatingToc,

    // ==================== 对话框状态 ====================
    isShowCssEditor,
    toggleShowCssEditor,
    isShowInsertFormDialog,
    toggleShowInsertFormDialog,
    isShowInsertMpCardDialog,
    toggleShowInsertMpCardDialog,
    isShowTemplateDialog,
    toggleShowTemplateDialog,
    isOpenConfirmDialog,

    // ==================== 搜索面板 ====================
    searchTabRequest,
    openSearchTab,
    clearSearchTabRequest,

    // ==================== Actions ====================
    toggleDark,
    toggleEditOnLeft,
    togglePinFloatingToc,
    toggleShowFloatingToc,
  }
})
