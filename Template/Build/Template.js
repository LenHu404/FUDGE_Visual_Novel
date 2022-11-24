"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "../FreeTransitions/Others/hearts.jpg",
            edge: 1
        },
        clouds: {
            duration: 1,
            alpha: "../FreeTransitions/WipesAndOther/12.jpg",
            edge: 1
        },
        starWars: {
            duration: 1,
            alpha: "../FreeTransitions/Others/008.jpg",
            edge: 1
        },
        wet: {
            duration: 1,
            alpha: "../FreeTransitions/Others/wet.jpg",
            edge: 1
        },
        swirl: {
            duration: 1,
            alpha: "../FreeTransitions/Others/swirl.png",
            edge: 1
        },
        test: {
            duration: 1,
            alpha: "../FreeTransitions/Others/034.png",
            edge: 1
        },
        test2: {
            duration: 1,
            alpha: "../FreeTransitions/Others/039.jpg",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        dystopia: "../Audio/Dystopian.ogg",
        //background
        supermarketTrolleys: "../Audio/Supermarket_with_Trolleys.mp3",
        smallCrowd: "../Audio/smallCrowd.mp3",
        // SFX
        payingSound: "../Audio/payingSound.mp3"
    };
    Template.locations = {
        nightCity: {
            name: "Night City",
            background: "Images/Backgrounds/Nightcity.png" /* ,
            foreground: "" */
        },
        nightPark: {
            name: "Night Park",
            background: "Images/Backgrounds/Nightpark.png"
        },
        supermarketInside: {
            name: "Supermarkt",
            background: "Images/Backgrounds/supermarketInside.jpg"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Eduard: {
            name: "Eduard",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Free2UseCharacters/Eduard_normal.png",
                happy: "",
                upset: ""
            }
        },
        Aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    function ghostAnimation() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 110),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            end: {
                translation: Template.ƒS.positionPercent(110, 110),
                color: Template.ƒS.Color.CSS("white", 0)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.ghostAnimation = ghostAnimation;
    function angryAnimation() {
        return {
            start: {
                color: Template.ƒS.Color.CSS("white", 1)
            },
            end: {
                color: Template.ƒS.Color.CSS("red", 1)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.angryAnimation = angryAnimation;
    function getAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.getAnimation = getAnimation;
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    // true entspricht Menü ist offen und false zu
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                console.log("Menu");
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: Template.SupermarketScene, name: "SupermarketScene" }
        ];
        /* let scenes: ƒS.Scenes = [
          { scene: TestScene, name: "Test Scene" },
          { scene: TestScene02, name: "Test Scene 02" }
        ]; */
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.textAusgelagert = {
        Narrator: {
            T0000: "Wenn du in den Szenen-Code schaust, wirst du bemerken,...",
            T0001: "dass dieser Text nicht manuell,...",
            T0002: "sondern mit einer for of-Schleife wiedergegeben wird."
        },
        Aisaka: {
            T0000: "Okay, but lets go through the city on our way home!",
            T0001: "You are not my Father! Stop telling me what to do!"
        },
        Eduard: {
            T0000: "Its raining. Lets go home.",
            T0001: "No you are not going to get something from the store!"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SupermarketScene() {
        console.log("First Test Scene");
        let dialogue = {
            iSayYes: "Okay",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.supermarketTrolleys, 0.2, 1, true);
        Template.ƒS.Sound.play(Template.sound.payingSound, 0.2, true);
        Template.ƒS.Sound.fade(Template.sound.smallCrowd, 0.2, 1, true);
        await Template.ƒS.Location.show(Template.locations.supermarketInside);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.Eduard, Template.characters.Eduard.pose.normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ƒS.positionPercent(70, 110));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Aisaka, "I'm hungry. Can I go into the store?");
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("Friendly Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "Make it quick.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Okay it wont take long!");
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ghostAnimation());
                break;
            case dialogue.iSayNo:
                console.log("Rude Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, Template.textAusgelagert.Eduard.T0001);
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ƒS.positionPercent(70, 110));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.angryAnimation());
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, Template.textAusgelagert.Aisaka.T0001);
                break;
            case dialogue.iSayNothing:
                console.log("Mute Brother");
                // continue path here
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, ".............");
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "..buy something for me too.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Alright i'll be right back with something sweet for you!");
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ghostAnimation());
                break;
        }
        Template.ƒS.Speech.hide();
    }
    Template.SupermarketScene = SupermarketScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestScene() {
        console.log("First Test Scene");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.dystopia, 0.2, 1, true);
        await Template.ƒS.Location.show(Template.locations.supermarketInside);
        await Template.ƒS.update(Template.transitions.clouds.duration, Template.transitions.clouds.alpha, Template.transitions.clouds.edge);
        await Template.ƒS.Character.show(Template.characters.Eduard, Template.characters.Eduard.pose.normal, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Eduard, Template.textAusgelagert.Eduard.T0000);
        await Template.ƒS.Character.hide(Template.characters.Eduard);
        await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.upset, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Aisaka, Template.textAusgelagert.Aisaka.T0000);
        await Template.ƒS.Character.hide(Template.characters.Aisaka);
        Template.ƒS.Speech.hide();
    }
    Template.TestScene = TestScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestScene02() {
        console.log("First Test Scene");
        let dialogue = {
            iSayYes: "Okay",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.nightCity);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.Eduard, Template.characters.Eduard.pose.normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ƒS.positionPercent(70, 110));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Aisaka, "I'm hungry. Can I go into the store?");
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("Friendly Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "Make it quick.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Okay it wont take long!");
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ghostAnimation());
                break;
            case dialogue.iSayNo:
                console.log("Rude Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, Template.textAusgelagert.Eduard.T0001);
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ƒS.positionPercent(70, 110));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.angryAnimation());
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, Template.textAusgelagert.Aisaka.T0001);
                break;
            case dialogue.iSayNothing:
                console.log("Mute Brother");
                // continue path here
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, ".............");
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "..buy something for me too.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Alright i'll be right back with something sweet for you!");
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ghostAnimation());
                break;
        }
        Template.ƒS.Speech.hide();
    }
    Template.TestScene02 = TestScene02;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestScene03() {
        console.log("First Test Scene");
        let text = {
            lily: {
                T0001: "hallo",
                T0002: "tschüss"
            }
        };
    }
    Template.TestScene03 = TestScene03;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map