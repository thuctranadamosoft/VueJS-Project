import {ref} from 'vue'
export const temp = ref({
  text: 'init',
  setText (value: string) {
    this.text = value;
  }
})

