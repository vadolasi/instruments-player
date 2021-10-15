import { defineStore } from "pinia"

export const useAudioStore = defineStore("audio", {
  state: () => {
    return {
      duration: 0,
      currentTime: 0
    }
  },
  actions: {
    setDuration(duration: number) {
      this.duration = duration
    },
    setCurrentTime(currentTime: number) {
      this.currentTime = currentTime
    }
  }
})
