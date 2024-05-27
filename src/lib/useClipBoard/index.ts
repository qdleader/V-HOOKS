import { type Ref, ref } from "vue"

interface ClipboardOptions {
  navigator?: Navigator
  read?: boolean
  source?: Ref<string>
  copiedDuring?: number
}

interface ClipboardReturn<T> {
  isSupported: boolean
  text: Ref<string>
  copied: Ref<T>
  copy: (value?: string) => Promise<void>
}
export function useClipboard(options: ClipboardOptions = {}): ClipboardReturn<boolean> {
  const {
    navigator = window.navigator,
    read = false,
    source,
    copiedDuring = 1500,
  } = options

  const events = ['copy', 'cut']
  const isSupported = Boolean(navigator && 'clipboard' in navigator)
  const text = ref('') // 与剪切板内容相对应的响应式值
  const copied = ref(false) // 是否拷贝完成

  // 更新text
  function updateText() {
    navigator!.clipboard.readText().then((value) => {
      text.value = value
    })
  }
  // 监听拷贝和剪切事件
  if (isSupported && read) {
    for (const event of events)
      window.addEventListener(event, updateText)
  }
  // 将响应式值value拷贝到text
  async function copy(value) {
    if (isSupported && value != null) {
      await navigator!.clipboard.writeText(value)
      text.value = value
      copied.value = true
    }
  }

  return {
    isSupported,
    text: text,
    copied: copied,
    copy,
  }
}
