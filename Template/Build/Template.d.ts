declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        clouds: {
            duration: number;
            alpha: string;
            edge: number;
        };
        starWars: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        test: {
            duration: number;
            alpha: string;
            edge: number;
        };
        test2: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        dystopia: string;
        atmo1: string;
        supermarketTrolleys: string;
        smallCrowd: string;
        payingSound: string;
    };
    let locations: {
        nightCity: {
            name: string;
            background: string;
        };
        nightPark: {
            name: string;
            background: string;
        };
        supermarketInside: {
            name: string;
            background: string;
        };
        gif: {
            name: string;
            background: string;
        };
        eldenRing01: {
            name: string;
            background: string;
        };
        eldenRing02: {
            name: string;
            background: string;
        };
        eldenRing_dorf_eingang: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                behind: string;
                horse_normal: string;
                horse_behind: string;
            };
        };
        Eduard: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                upset: string;
            };
        };
        Aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        char1: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                upset: string;
            };
        };
        char2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                upset: string;
            };
        };
    };
    let items: {
        blobRED: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        blobBU: {
            name: string;
            description: string;
            image: string;
        };
        blobDKBU: {
            name: string;
            description: string;
            image: string;
        };
        blobGN: {
            name: string;
            description: string;
            image: string;
        };
        blobPK: {
            name: string;
            description: string;
            image: string;
        };
        blobYL: {
            name: string;
            description: string;
            image: string;
        };
        blobOG: {
            name: string;
            description: string;
            image: string;
        };
    };
    function slideInAnimation(fromWhereX: number, fromWhereY: number, toWhereX: number, toWhereY: number): ƒS.AnimationDefinition;
    function ghostAnimation(): ƒS.AnimationDefinition;
    function angryAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let textAusgelagert: {
        Narrator: {
            T0000: string;
            T0001: string;
            T0002: string;
        };
        Aisaka: {
            T0000: string;
            T0001: string;
        };
        Eduard: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Template {
    function startScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function SupermarketScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestScene02(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestScene03(): ƒS.SceneReturn;
}
