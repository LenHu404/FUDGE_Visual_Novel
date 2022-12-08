namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transitions = {
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

  export let sound = {
    // themes
    dystopia: "../Audio/Dystopian.ogg",
    atmo1: "../Audio/atmo1.wav",

    //background
    supermarketTrolleys: "../Audio/Supermarket_with_Trolleys.mp3",
    smallCrowd: "../Audio/smallCrowd.mp3",

    // SFX
    payingSound: "../Audio/payingSound.mp3"

  };

  export let locations = {
    nightCity: {
      name: "Night City",
      background: "Images/Backgrounds/Nightcity.png"/* ,
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

  export let dataForSave = {
    nameProtagonist: "....."
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ".....",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Prot_normal.png", // Pfad des Bildes
        behind: "Images/Characters/Prot_behind.png",
        horse_normal: "Images/Characters/Prothorse_normal.png",
        horse_behind: "Images/Characters/Prothorse_behind.png"
      }
    },
    Eduard: {
      name: "Eduard",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Free2UseCharacters/Eduard_normal.png", // Pfad des Bildes
        happy: "",
        upset: ""
      }
    },
    Aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png", // Pfad des Bildes
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png"
      }
    },
    char1: {
      name: "Sir Eduard",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/char3.png", // Pfad des Bildes
        happy: "",
        upset: ""
      }
    },
    char2: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/char2.png", // Pfad des Bildes
        happy: "",
        upset: ""
      }
    }
  };

  // **** ITEMS ****
  // items is declared here as well as initialized
  export let items = {
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

  export function slideInAnimation(fromWhereX: number, fromWhereY: number, toWhereX: number, toWhereY: number): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(fromWhereX, fromWhereY),
        color: ƒS.Color.CSS("white", 0),
      },
      end: {
        translation: ƒS.positionPercent(toWhereX, toWhereY),
        color: ƒS.Color.CSS("white", 1)
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function ghostAnimation(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(70, 110),
        color: ƒS.Color.CSS("white", 1)
      },
      end: {
        translation: ƒS.positionPercent(110, 110),
        color: ƒS.Color.CSS("white", 0)
      },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function angryAnimation(): ƒS.AnimationDefinition {
    return {
      start: {
        color: ƒS.Color.CSS("white", 1)
      },
      end: {
        color: ƒS.Color.CSS("red", 1)
      },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  // Menu shortcuts
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close"
  };

  let gameMenu: ƒS.Menu;

  // true entspricht Menü ist offen und false zu
  let menuIsOpen: boolean = true;

  // true entspricht Inventory ist offen und false zu
  let invIsOpen: boolean = false;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
    }
  }

  // Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);

  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
      case ƒ.KEYBOARD_CODE.I:
        if (!invIsOpen) {
          console.log("open inventory");
          await ƒS.Inventory.open();
          invIsOpen = true;
        }
        else {
          console.log("close inventory");
          await ƒS.Inventory.open();
          ƒS.Inventory.close();
          invIsOpen = false;
        }
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: startScene, name: "startScene" }

    ];
    /* let scenes: ƒS.Scenes = [
      { scene: SupermarketScene, name: "SupermarketScene" }
      
    ]; */
    /* let scenes: ƒS.Scenes = [
      { scene: TestScene, name: "Test Scene" },
      { scene: TestScene02, name: "Test Scene 02" }
    ]; */

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}