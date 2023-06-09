import { createPinia } from "pinia";
import type { ViteSSGContext } from "vite-ssg";

// Setup Pinia
// https://pinia.vuejs.org/
export const install = ({ isClient, initialState, app, onSSRAppRendered }: ViteSSGContext<true>) => {
  const pinia = createPinia();
  app.use(pinia);
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient) {
    pinia.state.value = initialState.pinia || {};
  } else {
    onSSRAppRendered(() => {
      initialState.pinia = pinia.state.value;
    });
  }
};
