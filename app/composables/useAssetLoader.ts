export const useAssetLoader = () => {
  const progress = ref(0)
  const isLoading = ref(true)

  const loadImages = async (imageUrls: string[]) => {
    if (imageUrls.length === 0) {
      progress.value = 100
      isLoading.value = false
      return
    }

    let loadedCount = 0
    const total = imageUrls.length

    const loadImage = (url: string) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = url
        img.onload = () => resolve(url)
        img.onerror = () => resolve(url) 
      })
    }

    const promises = imageUrls.map(async (url) => {
      await loadImage(url)
      loadedCount++
      progress.value = (loadedCount / total) * 100
    })

    await Promise.all(promises)
    
    setTimeout(() => {
      isLoading.value = false
    }, 400)
  }

  return { progress, isLoading, loadImages }
}