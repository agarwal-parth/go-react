import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Define your custom colors here if needed
      }
    }
  },
  globalCss: {
    body: {
      // In v3, we use "_dark" property instead of the 'mode' function
      bg: { base: "white", _dark: "gray.500" } 
    }
  }
})

export const system = createSystem(defaultConfig, config)
export default system