<template>
  <div class="hero-body has-text-centered">
    <div class="columns" :class="{'is-hidden-desktop': step >= 6}">
      <div class="column" :class="{'has-background-link': step >= 1}"></div>
      <div class="column" :class="{'has-background-link': step >= 2}"></div>
      <div class="column" :class="{'has-background-link': step >= 3}"></div>
      <div class="column" :class="{'has-background-link': step >= 4}"></div>
      <div class="column" :class="{'has-background-link': step >= 5}"></div>
    </div>
    <div class="container" id="step1" :class="{'is-hidden-desktop': step != 1}">
      <div class="card">
        <div class="card-content">
          <p class="title">Wählen Sie ein Gerät aus mit dem Sie Probleme haben:</p>
          <div class="dropdown" :class="{'is-active':activeDrop}" @click="toggleDropdown">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">Dropdown item</a>
                <a class="dropdown-item">Other dropdown item</a>
                <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                <a href="#" class="dropdown-item">Other dropdown item</a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">With a divider</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="step2" :class="{'is-hidden-desktop': step != 2}">
      <div class="card">
        <div class="card-content"></div>
      </div>
    </div>
    <div class="container" id="step3" :class="{'is-hidden-desktop': step != 3}"></div>
    <div class="container" id="step4" :class="{'is-hidden-desktop': step != 4}"></div>
    <div class="container" id="step5" :class="{'is-hidden-desktop': step != 5}"></div>
    <div class="container" id="step6" :class="{'is-hidden-desktop': step != 6}"></div>
    <button class="button is-pulled-right is-info" @click="nextStep">
      Next
      <span class="icon" id="rightArrow">
        <i class="fa fa-arrow-right"></i>
      </span>
    </button>
    <button
      class="button is-pulled-left is-info"
      :class="{'is-hidden-desktop':step == 1}"
      @click="backStep"
    >
      <span class="icon" id="leftArrow">
        <i class="fa fa-arrow-left"></i>
      </span>
      Back
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDrop: false,
      step: 1
    };
  },
  methods: {
    toggleDropdown() {
      this.activeDrop != this.activeDrop;
    },
    nextStep() {
      this.step++;
    },
    backStep(){
      this.step--;
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
}
.column {
  border: 2px solid black;
  height: 15px;
  width: 55px;
}
#rightArrow {
  margin-left: 25%;
}
#leftArrow {
  margin-right: 15%;
}
.is-pulled-left {
  display: inline;
}
</style>