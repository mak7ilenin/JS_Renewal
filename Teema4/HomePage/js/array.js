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
    {
        role: 'Sentinels',
        name: 'Sage',
        biography: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        abilities: [
            {
                key: 'Q',
                name: 'SLOW ORB',
                description: 'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.'
            },
            {
                key: 'E',
                name: 'HEALING ORB',
                description: 'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.'
            },
            {
                key: 'C',
                name: 'BARRIER ORB',
                description: 'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.'
            },
            {
                key: 'X',
                name: 'RESURRECTION',
                description: 'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.'
            },
        ],
        picture: 'Valorant_Sage.jpg'
    },
    {
        role: 'Initiators',
        name: 'Sova',
        biography: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        abilities: [
            {
                key: 'Q',
                name: 'SHOCK BOLT',
                description: 'EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.'
            },
            {
                key: 'E',
                name: 'RECON BOLT',
                description: 'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.'
            },
            {
                key: 'C',
                name: 'OWL DRONE',
                description: 'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.'
            },
            {
                key: 'X',
                name: 'HUNTER’S FURY',
                description: 'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.'
            },
        ],
        picture: 'Valorant_Sova.jpg'
    },
    {
        role: 'Controllers',
        name: 'Viper',
        biography: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
        abilities: [
            {
                key: 'Q',
                name: 'POISON CLOUD',
                description: 'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.'
            },
            {
                key: 'E',
                name: 'TOXIC SCREEN',
                description: 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.'
            },
            {
                key: 'C',
                name: 'SNAKE BITE',
                description: 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.'
            },
            {
                key: 'X',
                name: 'VIPER’S PIT',
                description: 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.'
            },
        ],
        picture: 'Valorant_Viper.jpg'
    },
    {
        role: 'Sentinels',
        name: 'Cypher',
        biography: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        abilities: [
            {
                key: 'Q',
                name: 'CYBER CAGE',
                description: 'INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.'
            },
            {
                key: 'E',
                name: 'SPYCAM',
                description: 'EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.'
            },
            {
                key: 'C',
                name: 'TRAPWIRE',
                description: 'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.'
            },
            {
                key: 'X',
                name: 'NEURAL THEFT',
                description: 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.'
            },
        ],
        picture: 'Valorant_Cypher.jpg'
    },
    {
        role: 'Duelists',
        name: 'Reyna',
        biography: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        abilities: [
            {
                key: 'Q',
                name: 'DEVOUR',
                description: 'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.'
            },
            {
                key: 'E',
                name: 'DISMISS',
                description: 'INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.'
            },
            {
                key: 'C',
                name: 'LEER',
                description: 'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.'
            },
            {
                key: 'X',
                name: 'EMPRESS',
                description: 'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.'
            },
        ],
        picture: 'Valorant_Reyna.jpg'
    },
    {
        role: 'Sentinels',
        name: 'Killjoy',
        biography: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        abilities: [
            {
                key: 'Q',
                name: 'ALARMBOT',
                description: 'EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.'
            },
            {
                key: 'E',
                name: 'TURRET',
                description: 'EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.'
            },
            {
                key: 'C',
                name: 'NANOSWARM',
                description: 'EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.'
            },
            {
                key: 'X',
                name: 'LOCKDOWN',
                description: 'EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.'
            },
        ],
        picture: 'Valorant_Killjoy.jpg'
    },
    {
        role: 'Initiators',
        name: 'Breach',
        biography: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
        abilities: [
            {
                key: 'Q',
                name: 'FLASHPOINT',
                description: 'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.'
            },
            {
                key: 'E',
                name: 'FAULT LINE',
                description: 'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.'
            },
            {
                key: 'C',
                name: 'AFTERSHOCK',
                description: 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.'
            },
            {
                key: 'X',
                name: 'ROLLING THUNDER',
                description: 'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.'
            },
        ],
        picture: 'Valorant_Breach.jpg'
    },
    {
        role: 'Controllers',
        name: 'Omen',
        biography: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        abilities: [
            {
                key: 'Q',
                name: 'PARANOIA',
                description: 'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.'
            },
            {
                key: 'E',
                name: 'DARK COVER',
                description: 'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the marker closer.'
            },
            {
                key: 'C',
                name: 'SHROUDED STEP',
                description: 'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.'
            },
            {
                key: 'X',
                name: 'FROM THE SHADOWS',
                description: 'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.'
            },
        ],
        picture: 'Valorant_Omen.jpg'
    },
    {
        role: 'Duelists',
        name: 'Jett',
        biography: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        abilities: [
            {
                key: 'Q',
                name: 'UPDRAFT',
                description: 'INSTANTLY propel Jett high into the air.'
            },
            {
                key: 'E',
                name: 'TAILWIND',
                description: 'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.'
            },
            {
                key: 'C',
                name: 'CLOUDBURST',
                description: 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.'
            },
            {
                key: 'X',
                name: 'BLADE STORM',
                description: 'EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.'
            },
        ],
        picture: 'Valorant_Jett.jpg'
    },
    {
        role: 'Duelists',
        name: 'Raze',
        biography: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
        abilities: [
            {
                key: 'Q',
                name: 'BLAST PACK',
                description: "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough."
            },
            {
                key: 'E',
                name: 'PAINT SHELLS',
                description: 'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.'
            },
            {
                key: 'C',
                name: 'BOOM BOT',
                description: 'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.'
            },
            {
                key: 'X',
                name: 'SHOWSTOPPER',
                description: 'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.'
            },
        ],
        picture: 'Valorant_Raze.jpg'
    },
    {
        role: 'Initiators',
        name: 'Skye',
        biography: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
        abilities: [
            {
                key: 'Q',
                name: 'TRAILBLAZER',
                description: "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies."
            },
            {
                key: 'E',
                name: 'GUIDING LIGHT',
                description: 'EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.'
            },
            {
                key: 'C',
                name: 'REGROWTH',
                description: 'EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.'
            },
            {
                key: 'X',
                name: 'SEEKERS',
                description: 'EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.'
            },
        ],
        picture: 'Valorant_Skye.jpg'
    },
    {
        role: 'Duelists',
        name: 'Yoru',
        biography: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        abilities: [
            {
                key: 'Q',
                name: 'BLINDSIDE',
                description: "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world."
            },
            {
                key: 'E',
                name: 'GATECRASH',
                description: "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport."
            },
            {
                key: 'C',
                name: 'FAKEOUT',
                description: "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies."
            },
            {
                key: 'X',
                name: 'DIMENSIONAL DRIFT',
                description: "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside."
            },
        ],
        picture: 'Valorant_Yoru.jpg'
    },
    {
        role: 'Controllers',
        name: 'Astra',
        biography: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
        abilities: [
            {
                key: 'Q',
                name: 'NOVA PULSE',
                description: "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area."
            },
            {
                key: 'E',
                name: 'NEBULA',
                description: "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning."
            },
            {
                key: 'C',
                name: 'GRAVITY WELL',
                description: "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile."
            },
            {
                key: 'X',
                name: 'ASTRAL FORM / COSMIC DIVIDE',
                description: "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio."
            },
        ],
        picture: 'Valorant_Astra.jpg'
    },
    {
        role: 'Initiators',
        name: 'KAY/O',
        biography: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        abilities: [
            {
                key: 'Q',
                name: 'FLASH/DRIVE',
                description: "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight."
            },
            {
                key: 'E',
                name: 'ZERO/POINT',
                description: "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion."
            },
            {
                key: 'C',
                name: 'FRAG/MENT',
                description: "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion."
            },
            {
                key: 'X',
                name: 'NULL/CMD',
                description: "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration."
            },
        ],
        picture: 'Valorant_Kayo.jpg'
    },
    {
        role: 'Sentinels',
        name: 'Chamber',
        biography: "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
        abilities: [
            {
                key: 'Q',
                name: 'HEADHUNTER',
                description: "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights."
            },
            {
                key: 'E',
                name: 'RENDEZVOUS',
                description: "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED."
            },
            {
                key: 'C',
                name: 'TRADEMARK',
                description: "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it."
            },
            {
                key: 'X',
                name: 'TOUR DE FORCE',
                description: "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it."
            },
        ],
        picture: 'Valorant_Chamber.jpg'
    },
    {
        role: 'Duelists',
        name: 'Neon',
        biography: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        abilities: [
            {
                key: 'Q',
                name: 'RELAY BOLT',
                description: "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast."
            },
            {
                key: 'E',
                name: 'HIGH GEAR',
                description: "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills."
            },
            {
                key: 'C',
                name: 'FAST LANE',
                description: "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them."
            },
            {
                key: 'X',
                name: 'OVERDRIVE',
                description: "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill."
            },
        ],
        picture: 'Valorant_Neon.jpg'
    },
    {
        role: 'Initiators',
        name: 'Fade',
        biography: "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
        abilities: [
            {
                key: 'Q',
                name: 'SEIZE',
                description: "Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight"
            },
            {
                key: 'E',
                name: 'HAUNT',
                description: "Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight."
            },
            {
                key: 'C',
                name: 'PROWLER',
                description: "EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair."
            },
            {
                key: 'X',
                name: 'NIGHTFALL',
                description: "EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them."
            },
        ],
        picture: 'Valorant_Fade.jpg'
    },
];