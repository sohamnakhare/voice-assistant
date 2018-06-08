import Artyom from "artyom.js"
const artyom = new Artyom();
artyom.initialize({
    // Run "forever"
    continuous: true,
    lang:"en-GB",
    debug:true,
    speed:0.9, 
    mode:"normal",
    listen: true
});

class SpeechHandler {

    speak(message, onStart, onEnd) {
        artyom.say(message, {
            onStart: function () {
                console.log("The text has been started.");
                if(onStart) {
                    onStart();
                }           
            },
            onEnd: function () {
                console.log("The text has been finished.");
                if(onEnd) {
                    onEnd();
                }
            }
        });
    }

    addCommand(command, action) {
        var command = {
            indexes: [command],
            action: action
        };
        
        artyom.addCommands(command);
    }
}

export default SpeechHandler;