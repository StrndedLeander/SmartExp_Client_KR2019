import Server from './axios'

export default {
  getDevices(){
    return Server().get('devices');
  },
  registerDevice(){
    return Server().post('devices');
  }
}