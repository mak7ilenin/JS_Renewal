// https://playvalorant.com/en-us/agents/brimstone/
var categories = ['Duelists', 'Initiators', 'Controllers', 'Sentinels'];
var agents = [
    {
        role: 'Controllers',
        name: 'Brimstone',
        biography: "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.",
        abilities: [
            {
                key: 'Q',
                name: 'INCENDIARY',
                description: 'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.'
            },
            {
                key: 'E',
                name: 'SKY SMOKE',
                description: 'EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.'
            },
            {
                key: 'C',
                name: 'STIM BEACON',
                description: 'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire'
            },
            {
                key: 'X',
                name: 'ORBITAL STRIKE',
                description: 'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.'
            },
        ],
        picture: 'Valorant_Brimstone.jpg'
    },
    {
        role: 'Duelists',
        name: 'Phoenix',
        biography: "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.",
        abilities: [
            {
                key: 'Q',
                name: 'CURVEBALL',
                description: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.'
            },
            {
                key: 'E',
                name: 'HOT HANDS',
                description: 'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.'
            },
            {
                key: 'C',
                name: 'BLAZE',
                description: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.'
            },
            {
                key: 'X',
                name: 'RUN IT BACK',
                description: 'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.'
            },
        ],
        picture: 'Valorant_Phoenix.jpg'
    },
];