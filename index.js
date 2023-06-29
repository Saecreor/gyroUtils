import PogObject from "PogData"

let settingData = new PogObject("gyroUtils", {
    utilsToggled: false
})

const display = new Display()
display.addLine(new DisplayLine("Cells Align Has Worn Off").setScale(4))
display.setTextColor(Renderer.RED)
display.setAlign("center")
display.setRenderLoc(485, 240)
display.hide()

register("chat", () => {
    if(settingData.utilsToggled == true) {
        setTimeout(() => {
            display.show()
            setTimeout(() => {
                display.hide()
            }, 1500)
        }, 6000) 
    }
    else return
  }).setCriteria("&r&eYou &r&aaligned &r&eyourself!&r").setContains();

  register("chat", () => {
    if(settingData.utilsToggled == true) {
        setTimeout(() => {
            display.show()
            setTimeout(() => {

                display.hide()
            }, 1500)
        }, 6000) 
    }
    else return
  }).setCriteria("&r&eYou aligned").setContains();


register("command", () => {
    if(settingData.utilsToggled == true) {
        settingData.utilsToggled = false
        settingData.save()
        ChatLib.chat("&cgyroUtils has been toggled off!")
    }
    else if(settingData.utilsToggled == false) {
        settingData.utilsToggled = true
        settingData.save()
        ChatLib.chat("&agyroUtils has been toggled on!")
    }
}).setName("togglegyro")