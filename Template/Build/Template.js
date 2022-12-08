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
        atmo1: "../Audio/atmo1.wav",
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
        },
        gif: {
            name: "gifs",
            background: "Images/Backgrounds/starry.gif"
        },
        eldenRing01: {
            name: "eldenRing01",
            background: "Images/Backgrounds/eldenRing01.jpg"
        },
        eldenRing02: {
            name: "eldenRing02",
            background: "Images/Backgrounds/eldenRing02.png"
        },
        eldenRing_dorf_eingang: {
            name: "eldenRing_dorf_eingang",
            background: "Images/Backgrounds/eldenRing_Dorf_eingang.jpg"
        }
    };
    Template.dataForSave = {
        nameProtagonist: "....."
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ".....",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Prot_normal.png",
                behind: "Images/Characters/Prot_behind.png",
                horse_normal: "Images/Characters/Prothorse_normal.png",
                horse_behind: "Images/Characters/Prothorse_behind.png"
            }
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
        },
        char1: {
            name: "Sir Eduard",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/char3.png",
                happy: "",
                upset: ""
            }
        },
        char2: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/char2.png",
                happy: "",
                upset: ""
            }
        }
    };
    // **** ITEMS ****
    // items is declared here as well as initialized
    Template.items = {
        blobRED: {
            name: "Blob Red",
            description: "A reddish something",
            image: "Images/Items/blobRED.png",
            static: true
        },
        blobBU: {
            name: "Blob Blue",
            description: "A blueish something",
            image: "Images/Items/blobBU.png"
        },
        blobDKBU: {
            name: "Blob DK Blue",
            description: "A dark blueish something",
            image: "Images/Items/blobDKBU.png"
        },
        blobGN: {
            name: "Blob Green",
            description: "A greenish something",
            image: "Images/Items/blobGN.png"
        },
        blobPK: {
            name: "Blob Pink",
            description: "A pinkish something",
            image: "Images/Items/blobPK.png"
        },
        blobYL: {
            name: "Blob Yellow",
            description: "A yellowish something",
            image: "Images/Items/blobYL.png"
        },
        blobOG: {
            name: "Blob Orange",
            description: "An orangeish something",
            image: "Images/Items/blobOG.png"
        }
    };
    function slideInAnimation(fromWhereX, fromWhereY, toWhereX, toWhereY) {
        return {
            start: {
                translation: Template.ƒS.positionPercent(fromWhereX, fromWhereY),
                color: Template.ƒS.Color.CSS("white", 0),
            },
            end: {
                translation: Template.ƒS.positionPercent(toWhereX, toWhereY),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.slideInAnimation = slideInAnimation;
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
    // true entspricht Inventory ist offen und false zu
    let invIsOpen = false;
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
            // Inventory shortcuts
            case Template.ƒ.KEYBOARD_CODE.I:
                if (!invIsOpen) {
                    console.log("open inventory");
                    await Template.ƒS.Inventory.open();
                    invIsOpen = true;
                }
                else {
                    console.log("close inventory");
                    await Template.ƒS.Inventory.open();
                    Template.ƒS.Inventory.close();
                    invIsOpen = false;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                await Template.ƒS.Inventory.open();
                Template.ƒS.Inventory.close();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: Template.startScene, name: "startScene" }
        ];
        /* let scenes: ƒS.Scenes = [
          { scene: SupermarketScene, name: "SupermarketScene" }
          
        ]; */
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
    async function startScene() {
        console.log("First Test Scene");
        let text = {
            narrator: {
                T0000: "As your travling down a road you notic a village. You decide to go through it. ",
                T0001: "Just as you are traveling through the rough looking village an old man is approaching you.",
            },
            char1: {
                T0000: "Please sir, please ",
                T0001: "We need your help!!",
                T0002: "Its my daughter. She is in desperate need of help.",
                T0003: "She happens to get infected with a sickness or worse maybe a curse.",
                T0004: "There is a way to help her but we don't have the necessary items.",
                T0005: "And to get them you have to face some dark creatures and decieving riddles.",
                T0006: "Oh thank you kind sir!",
                T0007: "What name can we call you?",
                T0008: "Be praised...",
                T0009: "No no no nonono... ",
                T0010: "You have to help us!! Or we are doomed!",
                T0011: "This can not be happening...",
            },
            protagonist: {
                T0000: "...",
                T0001: "What is the matter?",
                T0002: "How do you think i can help?",
                T0003: "Sounds intersting.",
                T0004: "Point me to where i can start.",
                T0005: "I am sorry but i cant to this. I have a more urgent matter to attend to. ",
                T0006: "I wish you all best of luck.",
            }
        };
        let helpYesNo = {
            iSayYes: "Help the old man and his daughter.",
            iSayNo: "Keep on traveling"
        };
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.eldenRing_dorf_eingang);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.slideInAnimation(0, 100, 20, 100));
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(100, 100, 70, 100));
        Template.ƒS.Inventory.add(Template.items.blobRED);
        for (let i = 0; i < 5; i++) {
            Template.ƒS.Inventory.add(Template.items.blobOG);
        }
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0005);
        let dialogueElement = await Template.ƒS.Menu.getInput(helpYesNo, "choices");
        switch (dialogueElement) {
            case helpYesNo.iSayYes:
                console.log("Friendly");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "");
                Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
                Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
                //await ƒS.Speech.tell(characters.protagonist, "");
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0008 + Template.dataForSave.nameProtagonist);
                break;
            case helpYesNo.iSayNo:
                console.log("Rude");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0009);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0010);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0011);
                await Template.ƒS.Location.show(Template.locations.eldenRing01);
                await Template.ƒS.Character.hide(Template.characters.char1);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(20, 100));
                await Template.ƒS.update(Template.transitions.test2.duration, Template.transitions.test2.alpha, Template.transitions.test2.edge);
                break;
        }
        /* await ƒS.Speech.tell(characters.char1, text.char1.T0003);
        dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");
    
    
        switch (dialogueElement) {
          case dialogue.iSayYes:
            console.log("Friendly");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.protagonist, "");
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
            await ƒS.Speech.tell(characters.char1, text.char1.T0005);
    
    
            break;
    
          case dialogue.iSayNo:
            console.log("Rude");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            break;
    
          case dialogue.iSayNothing:
            console.log("Mute");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            break;
        } */
        /* dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name = dataForSave.nameProtagonist; */
        Template.ƒS.Speech.hide();
    }
    Template.startScene = startScene;
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
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("Friendly Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Make it quick.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Okay it wont take long!");
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ghostAnimation());
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
        /* let text = {
          lily: {
            T0001: "hallo",
            T0002: "tschüss"
          }
        }; */
    }
    Template.TestScene03 = TestScene03;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map