const database = {
    fish: [
        {
            image: `https://farmrpg.com/img/items/trout.png`,
            name: "Reginald",
            species: "Trout",
            length: 8,
            location: "Caney Fork",
            food: "insects"
        },
        {
            image: `https://arz-wiki.com/wp-content/uploads/2022/11/4170-1.png`,
            name: "Harrison",
            species: "Haddock",
            length: 25,            
            location: "Boston",
            food: "stuff"
        },
        {
            image: `https://palia.wiki.gg/images/7/73/Channel_Catfish.png`,
            name: "Nev",
            species: "Catfish",
            length: 36,            
            location: "Percy Priest",
            food: "bugs"

        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
debugger
export const mostHolyFish = () => {  
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const item of database) {
        if (item.fish.length % 3 === 0) {
            holyFish.push(item.fish.length) 
        }
    }

     return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}