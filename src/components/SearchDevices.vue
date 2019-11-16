<template>
  <div>
    <ul class="liste">
      <li v-for="device in foundDevices" :key="device.mac">
        <div class="container">
          <p>Gerät: {{device.vendor}}</p>
          <p>IP-Adresse: {{device.ip}}</p>
          <p>MAC-Adresse: {{device.mac}}</p>
          <button class="button is-small is-success">+ Meine Geräte</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import quickScan from "../assets/quickScan";
export default {
  data() {
    return {
      foundDevices: quickScan.quickscan
    };
  },
  mounted() {
    console.log(this.foundDevices);
  }
};
</script>

<style lang="scss" scoped>
.liste {
  max-height: 600px;
  overflow: scroll;
}
.container {
  margin: 2%;
  background-color: rgb(231, 231, 231);
}
.container > p,
button {
  margin: 1%;
}
</style>