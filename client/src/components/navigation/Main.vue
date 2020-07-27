<template>
  <v-card
      color="grey lighten-4"
      tile
      flat
  >
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer;">DG SHOP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push('/shop?q=0')" text>기획상품</v-btn>
      <v-btn @click="$router.push('/shop?q=1')" text>마스크/세정제</v-btn>
      <v-btn @click="$router.push('/shop?q=2')" text>차포트</v-btn>
      <v-btn @click="$router.push('/shop?q=3')" text>물병/주전</v-btn>
      <v-btn @click="$router.push('/shop?q=4')" text>컵/잔</v-btn>
      <v-btn @click="$router.push('/shop?q=5')" text>텀블러/보틀</v-btn>
      <v-btn @click="$router.push('/shop?q=6')" text>워머/트레이/보관함</v-btn>
      <v-btn @click="$router.push('/shop?q=7')" text>플로이</v-btn>
      <v-btn @click="$router.push('/shop?q=8')" text>차류</v-btn>
      <v-btn @click="$router.push('/shop?q=9')" text>세트 상품</v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
}
</script>

<style>
</style>
