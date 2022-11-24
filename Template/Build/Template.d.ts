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
        supermarketTrolleys: string;
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
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
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
    };
    let dataForSave: {
        nameProtagonist: string;
    };
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
}
declare namespace Template {
    function TestScene(): ƒS.SceneReturn;
}
declare namespace Template {
}
declare namespace Template {
    function TestScene03(): ƒS.SceneReturn;
}
