/*
Owner: Alessandro Luca Cremasco
GitHub: https://github.com/Ale14x

Shortcuts that show the current status of the Apple Services.

If you think something can be upgraded, send a pull request to the repository of this file.
*/

let appleLink = 'https://www.apple.com/support/systemstatus/'
let req = new Request(appleLink)
let response = await req.loadString()
Safari.openInApp(appleLink)
if (config.runsWithSiri){
    let needles = [
    "All services are operating normally."
  ]
  let foundNeedles = needles.filter(n => {
    return response.includes(n)
  })
  if (foundNeedles.length > 0) {
    Speech.speak("No, there are some problems.'")
  } else {
    Speech.speak("Yes, all works!")
  }
}
Script.complete()