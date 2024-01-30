local hyper = {"shift", "alt", "cmd"}

hs.loadSpoon("MiroWindowsManager")

hs.window.animationDuration = 0.3
spoon.MiroWindowsManager:bindHotkeys({
  up = {hyper, "up"},
  right = {hyper, "right"},
  down = {hyper, "down"},
  left = {hyper, "left"},
  fullscreen = {hyper, "-"},
  nextscreen = {hyper, "n"}
})


caffeine = hs.menubar.new()
function setCaffeineDisplay(state)
    if state then
        caffeine:setTitle("🛏️")
        hs.alert.show("Preventing Sleep")
    else
        caffeine:setTitle("🛌")
        hs.alert.show("Allowing Sleep")
    end
end

function caffeineClicked()
    setCaffeineDisplay(hs.caffeinate.toggle("displayIdle"))
end

if caffeine then
    caffeine:setClickCallback(caffeineClicked)
    setCaffeineDisplay(hs.caffeinate.get("displayIdle"))
end
hs.hotkey.bind(hyper, "Z", function()
  setCaffeineDisplay(hs.caffeinate.toggle("displayIdle"))
end)
