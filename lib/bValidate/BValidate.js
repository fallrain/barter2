import bValidateRules from './bValidateRules';

export default class {
  constructor (option) {
    this.option = option;
    this.bValidateRules = bValidateRules;
  }

  valid (fromData) {
    let _this = this.option._this;
    let vdtMap = this.option.rules;
    for (let p in vdtMap) {
      let regs = vdtMap[p];
      for (let i in regs) {
        if (regs[i] !== 0 && !regs[i]) {
          continue;
        }
        if (!this.bValidateRules.rules[i](this.option.formData[p], regs[i])) {
          _this.$vux.toast.show({
            type: 'text',
            text: this.option.messages[p][i] || this.bValidateRules.messages[i]
          });
          return false;
        }
      }
    }
    return true;
  }

  validOne (name) {
    let _this = this.option._this;
    let regs = this.option.rules[name];
    for (let i in regs) {
      if (!this.bValidateRules.rules[i](this.option.formData[name], regs[i])) {
        _this.$vux.toast.show({
          type: 'text',
          text: this.option.messages[name][i] || this.bValidateRules.messages[i]
        });
        return false;
      }
    }
    return true;
  }
}
