import springCore from "./core";

import { isNumber, isObject } from "./utils";
import { reactive, watchEffect, isReactive, isRef, toRefs } from "vue";

import { SpringProps, SpringValue } from "./types";

export function spring(springValue: SpringValue, props: SpringProps) {
  // check if props are reactive, if not, make them reactive so we can use toRefs
  const _props = (props as any)?.__ob__ ? props : reactive(props);

  // construct a reactive spring config object
  const springConfig = reactive({ to: springValue, ...toRefs(_props) });
  let output: any;

  // if there is only one value
  if (!springValue || isNumber(springValue)) {
    springConfig.from = isNumber(springConfig.from) ? springConfig.from : 0;
    output = springCore(springConfig);
  }
  // if the passed value is ref
  else if (isRef(springValue)) {
    springConfig.to = springValue.value;
    springConfig.from = isNumber(springConfig.from) ? springConfig.from : 0;

    output = springCore(springConfig);
  }
  // if the sprint has more than one variable
  else if (isObject(springValue)) {
    const keys = Object.keys(springValue);
    if (!keys.length) {
      throw new Error("[spring] can not find any values");
    }

    const springs = keys.reduce((obj: any, key) => {
      springConfig.to = springValue[key];
      springConfig.from = props?.from?.[key] || 0;

      obj[key] = springCore(springConfig);
      return obj;
    }, {});

    output = reactive(springs);
  }

  // watch reactive variables changes
  if (isReactive(springValue)) {
    watchEffect(() => {
      Object.entries(springValue).forEach(([key, value]) => {
        output[key] = value;
      });
    });
  } else if (isRef(springValue)) {
    watchEffect(() => (output.value = springValue.value));
  }

  return output;
}

export default spring;
