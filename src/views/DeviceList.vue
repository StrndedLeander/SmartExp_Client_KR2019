<template>
  <div class="deviceList">
    <div class="columns has-text-centered">
      <div class="column is-8 has-text-centered">
        <div class="regDev" v-for="device in registeredDevices" :key="device.id">
          <RegisteredDevice
            :name="device.name"
            :modell="device.modell"
            :jahr="device.jahr"
            :version="device.version"
            :patchNotes="device.patchNotes"
            :usage="device.usage"
          ></RegisteredDevice>
        </div>
      </div>
      <div class="column is-4">
        <h4 class="title is-4"></h4>
        <SearchDevices></SearchDevices>
      </div>
    </div>
  </div>
</template>

<script>
import RegisteredDevice from "../components/RegisteredDevice";
import SearchDevices from "../components/SearchDevices";
import Devices from "../serverReqs/Devices";
import registeredDevices from "../assets/registeredDevices";
export default {
  components: {
    RegisteredDevice,
    SearchDevices
  },
  data() {
    return {
      registeredDevices: registeredDevices.hosts.host
    };
  },
  mounted(){
    console.log(registeredDevices);
  }
};
</script>

<style lang="scss" scoped>
.regDev{
  margin-left: 10%;
  margin-bottom: 3%;
}
</style>