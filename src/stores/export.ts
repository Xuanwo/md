import { toPng } from 'html-to-image'
import {
  downloadFile,
  downloadMD,
  exportHTML,
  exportPDF,
  exportPureHTML,
  getHtmlContent,
  sanitizeTitle,
} from '@/utils'
import { useEditorStore } from './editor'
import { useRenderStore } from './render'
import { useUIStore } from './ui'

/**
 * 导出功能 Store
 * 负责处理各种导出功能：HTML、PDF、MD、图片等
 */
export const useExportStore = defineStore(`export`, () => {
  const editorStore = useEditorStore()
  const renderStore = useRenderStore()
  const uiStore = useUIStore()

  function inferTitleFromMarkdown(markdown: string): string {
    const match = markdown.match(/^#{1,6}\s+(.+?)\s*#*\s*$/m)
    return match?.[1]?.trim() || `untitled`
  }

  function getExportTitleFromMarkdown(markdown?: string): string {
    return inferTitleFromMarkdown(markdown ?? editorStore.getContent())
  }

  // 将编辑器内容转换为 HTML
  const editorContent2HTML = () => {
    const temp = getHtmlContent()
    document.querySelector(`#output`)!.innerHTML = renderStore.output
    return temp
  }

  // 导出编辑器内容为 HTML，并且下载到本地
  const exportEditorContent2HTML = async () => {
    const title = getExportTitleFromMarkdown()
    await exportHTML(title)
    document.querySelector(`#output`)!.innerHTML = renderStore.output
  }

  // 导出编辑器内容为无样式 HTML
  const exportEditorContent2PureHTML = (content: string) => {
    exportPureHTML(content, getExportTitleFromMarkdown(content))
  }

  // 下载卡片图片
  const downloadAsCardImage = async () => {
    const el = document.querySelector<HTMLElement>(`#output-wrapper>.preview`)
    if (!el)
      return

    const url = await toPng(el, {
      backgroundColor: uiStore.isDark ? `` : `#fff`,
      skipFonts: true,
      pixelRatio: Math.max(window.devicePixelRatio || 1, 2),
      style: {
        margin: `0`,
      },
    })

    const title = getExportTitleFromMarkdown()
    downloadFile(url, `${sanitizeTitle(title)}.png`, `image/png`)
  }

  // 导出编辑器内容为 PDF
  const exportEditorContent2PDF = async () => {
    const title = getExportTitleFromMarkdown()
    await exportPDF(title)
    document.querySelector(`#output`)!.innerHTML = renderStore.output
  }

  // 导出编辑器内容到本地（Markdown）
  const exportEditorContent2MD = (content: string) => {
    downloadMD(content, getExportTitleFromMarkdown(content))
  }

  return {
    editorContent2HTML,
    exportEditorContent2HTML,
    exportEditorContent2PureHTML,
    downloadAsCardImage,
    exportEditorContent2PDF,
    exportEditorContent2MD,
  }
})
