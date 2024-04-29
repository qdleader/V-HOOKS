# V-HOOK


## useWatermark 使用
```ts
import { useWatermark } from "@/hooks/useWatermark"
const { setWatermark: setGlobalWatermark } = useWatermark()

 setGlobalWatermark("全局水印", {
      color: '#333',
      opacity: 0.2,
    })
```
