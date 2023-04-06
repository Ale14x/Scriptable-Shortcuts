/*
Owner: Alessandro Luca Cremasco
GitHub: https://github.com/Ale14x

You can set this widget in both block screen and homescreen.

Set your sizes and colors as you want for each size of the widget.

If you think something can be upgraded, send a pull request to the repository of this file.
*/

//Configuration of the widget
const widget = new ListWidget()
if (config.runsInWidget){
  Script.setWidget(widget)
  Script.complete()
}
//Settings for dark mode
let param = args.widgetParameter
widget.backgroundColor = Color.black()

//Small widget 
if (param == 'small'){
  let text = widget.addText("Your text here");
//Font and text color, you can modify the 
  text.font = Font.blackRoundedSystemFont(13)//you can change the size in the parenthesis
  text.textColor = Color.purple()//can change the color in Color.writeYourColor
  text.centerAlignText()
  widget.presentSmall()
//Medium widget
}else if (param == "medium"){
  let text = widget.addText("Your text year");
  text.font = Font.blackRoundedSystemFont(18)//you can change the size in the parenthesis
  text.textColor = Color.purple()//can change the color in Color.writeYourColor
  text.centerAlignText()
  widget.presentMedium()
}
//Large Widget
  let text = widget.addText("Your text here");
  text.font = Font.blackRoundedSystemFont(16)//you can change the size in the parenthesis
  text.textColor = Color.purple()//you can change the color in Color.writeYourColor
  text.centerAlignText()
  widget.presentLarge()
 