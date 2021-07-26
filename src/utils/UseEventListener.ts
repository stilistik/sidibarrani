import { onBeforeUnmount, onMounted } from "vue";

export function useEventListener(
  target: HTMLElement | Document | Window,
  eventType: string,
  callback: (event: Event) => void
) {
  onMounted(() => {
    target.addEventListener(eventType, callback);
  });
  onBeforeUnmount(() => {
    target.removeEventListener(eventType, callback);
  });
}
