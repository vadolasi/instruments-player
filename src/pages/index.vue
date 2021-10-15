<template>
  <ion-list>
    <ion-item v-for="(track, index) in tracks" :key="track.name">
      <Player
        :src="track.url"
        :name="track.name"
        :isPlaying="isPlaying"
        :currentTime="currentTime"
        :isMain="index == 0"
      />
    </ion-item>
  </ion-list>
  <ion-footer class="fixed bottom-0 ion-align-items-center">
    <h1 class="text-center text-xl font-bold">Dancin (KRONO Remix)</h1>
    <h2 class="text-center text-base">Aaron Smith</h2>
    <p class="text-right mr-5">{{ formattedCurrentTime }} / {{ formattedDuraction }}</p>
    <ion-range v-model="storeCurrentTime" :max="duration" type="range" />
    <ion-button expand="block" fill="clear" @click="isPlaying = !isPlaying">
      <ion-icon :icon="isPlaying ? pause : play" />
    </ion-button>
  </ion-footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useAudioStore } from "../store"
import { IonRange, IonButton, IonList, IonItem, IonIcon, IonFooter } from "@ionic/vue"
import { play, pause } from "ionicons/icons"

const store = useAudioStore()

const isPlaying = ref(false)

interface Track {
  name: String
  url: String
}

const tracks = ref([{ name: "Voz", url: "/voice.mp3" }, { name: "Música", url: "/music.mp3" }] as Track[])
const currentTime = ref(0)

const duration = computed(() => {
  return store.duration
})

const storeCurrentTime = computed({
  get() {
    return store.currentTime
  },
  set(inputCurrentTime: number) {
    if (inputCurrentTime != store.currentTime) {
      currentTime.value = inputCurrentTime
    }
  }
})

function formatTime(value: number) {
  const format = (val: any) => `0${Math.floor(val)}`.slice(-2)
  var minutes = (value % 3600) / 60
  return [minutes, value % 60].map(format).join(":")
}

const formattedDuraction = computed(() => {
  return formatTime(store.duration)
})
const formattedCurrentTime = computed(() => {
  return formatTime(store.currentTime)
})
</script>
