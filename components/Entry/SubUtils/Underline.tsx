import { Animate, useColorMode } from "@chakra-ui/react"

function Underline({ children }) {
  const { colorMode } = useColorMode()
  const hoverColor = { light: "teal.500", dark: "teal.200" }

  return (
    <Animate
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.4 }}
    >
      <span
        _hover={{
          textDecoration: "none",
        }}
      >
        {children}
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            height: "1px",
            width: "100%",
            backgroundColor: hoverColor[colorMode],
          }}
        />
      </span>
    </Animate>
  )
}