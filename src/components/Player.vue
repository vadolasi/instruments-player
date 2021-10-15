<template>
  <p>{{ props.name }}</p>
  <ion-range pin="true" slot="end" v-model="volume" step="5" type="range" />
  <ion-button fill="clear" slot="end" @click="toggleVolume">
    <ion-icon :icon="volumeIcon" />
  </ion-button>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue"
import { useAudioStore } from "../store"
import { IonButton, IonIcon, IonRange } from "@ionic/vue"
import { volumeHigh, volumeMedium, volumeLow, volumeOff, volumeMute } from "ionicons/icons"

const props = defineProps({
  src: String,
  name: String,
  isPlaying: Boolean,
  currentTime: Number,
  isMain: Boolean
})

const store = useAudioStore()

const audio = new Audio(props.src)

if (props.isMain) {
  audio.addEventListener("loadedmetadata", () => {
    store.setDuration(audio.duration)
  })
  audio.addEventListener("timeupdate", () => {
    store.setCurrentTime(audio.currentTime)
  })
}

const volume = ref(100)

const volumeIcon = computed(() => {
  if (volume.value == 0) {
    return volumeMute
  } else if (volume.value <= 25) {
    return volumeOff
  } else if (volume.value <= 50) {
    return volumeLow
  } else if (volume.value <= 75) {
    return volumeMedium
  }

  return volumeHigh
})

watch(() => props.isPlaying, isPlaying => {
  if (isPlaying) {
    audio.play()
  } else {
    audio.pause()
  }
})
watch(() => props.currentTime, currentTime => {
  audio.currentTime = currentTime!
})
watch(volume, volume => {
  audio.volume = volume / 100
})

function toggleVolume() {
  if (volume.value == 0) {
    volume.value = 100
  } else {
    volume.value = 0
  }
}
</script>
