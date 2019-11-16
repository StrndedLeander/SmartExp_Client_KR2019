<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column">
          <div class="card-image">
            <figure class="image">
              <img src="https://picsum.photos/320/240" />
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="card-content">
            <h3 class="title is-3">{{device.name}}</h3>
            <ul class="info">
              <li v-for="info in device" :key="info.Mac">
                {{info.key}}{{info.value}}
              </li>
            </ul>
          </div>
          <p>
            Status:
            <span class="dot"></span>
          </p>
          <div class="buttons">
            <button class="button is-warning" :disabled="hasUpdate == false">Update</button>
            <button class="button is-primary">Mehr Details</button>
            <button class="button is-link">Steuerung</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    device: { type: Object }
  },
  data() {
    return {
      isSmart: true,
      hasUpdate: false
    };
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  margin-top: 2%;
}
.card {
  height: 33vh;
  width: 40vw;
  border: 1px solid black;
  border-radius: 1%;
}
.image {
  width: 320px;
  height: 240px;
}
#deviceImg {
  margin: 1%;
}
.modell {
  display: inline;
}
.dot {
  height: 11px;
  width: 11px;
  background-color: rgb(0, 255, 0);
  border-radius: 50%;
  display: inline-block;
}
</style>