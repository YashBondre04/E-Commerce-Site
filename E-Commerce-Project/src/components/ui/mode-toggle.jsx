import { useTheme } from "@/context/theme-provider"
import React from "react"
import { Switch } from "@/components/ui/switch"

const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    /*<div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>*/

    <div>
        <Switch
          onCheckedChange={(checked) => {
            setTheme(checked ? "dark" : "light")
          }}
          aria-label="Toggle dark mode"
        />
    </div>
  )
}

export { ModeToggle }


