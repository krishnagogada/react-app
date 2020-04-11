import { observable, action } from 'mobx'

class CounterStore {
   @observable count = '';

   @action.bound
   increment() {
      if (this.count === '' || this.count.toString().search(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$ /) != -1) {
         this.count = 1
      }
      else {
         this.count = Number(this.count) + 1
      }
   }
   @action.bound
   decrement() {
      if (this.count === '' || this.count.toString().search(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$ /) != -1) {
         this.count = -1
      }
      else {
         this.count = Number(this.count) - 1
      }
   }
   @action.bound
   onChange(value) {
      if (value.search(/^[-+.0-9eE]*$/) != -1) {
         if (value === '') {
            this.count = '';
         }
         else {
            this.count = value;
         }
      }
      else {
         this.count = '';
      }
   }
}
export default CounterStore;
///^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$)/
