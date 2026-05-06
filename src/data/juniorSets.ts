import type { SentenceBands } from './olderSets'
import type { VerbRow } from '../types'

const BLANK_LINE = '______'
const PLACEHOLDER_STEMS = Array.from({ length: 5 }, () => BLANK_LINE)
const PLACEHOLDER_VERB_ROWS: VerbRow[] = Array.from({ length: 5 }, () => ({
  verbStart: BLANK_LINE,
  completion: '',
}))

export const JUNIOR_SETS: SentenceBands[] = [
  {
      mixedTopic: 'dogs',
      mixed: [
        'Early in the morning,',
        'Barking at the gate,',
        'After hearing a whistle,',
        'With muddy paws,',
        'Beside the back fence,',
      ],
      verbs: [
        {
          verbStart: 'Chasing the ________',
          completion: ', the ________ dog ________',
        },
        {
          verbStart: 'Carrying his ________',
          completion: ', Max ________',
        },
        {
          verbStart: 'Sniffing around ________',
          completion: ', the ________ puppy ________',
        },
        {
          verbStart: 'Waiting near ________',
          completion: ', dogs ________',
        },
        {
          verbStart: 'Protecting her ________',
          completion: ', the ________ mother ________',
        },
      ],
      logicTopic: 'Even though',
      logic: [
        'Even though the gate was closed,',
        'Even though the yard was empty,',
        'Even though Max felt tired,',
        'Even though the puppy was small,',
        'Even though the storm was loud,',
      ],
    },
  {
      mixedTopic: 'classrooms',
      mixed: [...PLACEHOLDER_STEMS],
      verbs: PLACEHOLDER_VERB_ROWS,
      logicTopic: 'Instead of',
      logic: [...PLACEHOLDER_STEMS],
    },
  {
      mixedTopic: 'soccer',
      mixed: [
        'After the first goal,',
        'Running towards the ball,',
        'During the final minutes,',
        'With one quick kick,',
        'Before the crowd cheered,',
      ],
      verbs: [
        {
          verbStart: 'Kicking the ________',
          completion: ', the ________ player ________',
        },
        {
          verbStart: 'Guarding his ________',
          completion: ', Noah ________',
        },
        {
          verbStart: 'Watching the ________',
          completion: ', teammates ________',
        },
        {
          verbStart: 'Missing the ________',
          completion: ', the ________ striker ________',
        },
        {
          verbStart: 'Celebrating with ________',
          completion: ', Mia ________',
        },
      ],
      logicTopic: 'Because of',
      logic: [
        'Because of the muddy field,',
        'Because of the loud whistle,',
        'Because of the missing player,',
        'Because of the final goal,',
        "Because of the coach's warning,",
      ],
    },
  {
      mixedTopic: 'pizza',
      mixed: [
        'After school,',
        'Smelling the melted cheese,',
        'With sauce on the table,',
        'Before dinner began,',
        'Inside the hot oven,',
      ],
      verbs: [
        {
          verbStart: 'Cutting the ________',
          completion: ', Dad ________',
        },
        {
          verbStart: 'Choosing her ________',
          completion: ', the ________ girl ________',
        },
        {
          verbStart: 'Smelling the ________',
          completion: ', children ________',
        },
        {
          verbStart: 'Dropping his ________',
          completion: ', Liam ________',
        },
        {
          verbStart: 'Sharing a ________',
          completion: ', the ________ family ________',
        },
      ],
      logicTopic: 'As well as',
      logic: [
        'As well as eating pizza,',
        'As well as setting the table,',
        'As well as helping Mum,',
        'As well as choosing a drink,',
        'As well as cleaning his plate,',
      ],
    },
  {
      mixedTopic: 'caves',
      mixed: [
        'At the edge of the hill,',
        'Holding a small torch,',
        'Before stepping inside,',
        'With nervous footsteps,',
        'Deep below the rocks,',
      ],
      verbs: [
        {
          verbStart: 'Holding the ________',
          completion: ', the ________ explorer ________',
        },
        {
          verbStart: 'Searching for ________',
          completion: ', Ava ________',
        },
        {
          verbStart: 'Crawling through ________',
          completion: ', the ________ children ________',
        },
        {
          verbStart: 'Listening to ________',
          completion: ', Jack ________',
        },
        {
          verbStart: 'Pointing at ________',
          completion: ', explorers ________',
        },
      ],
      logicTopic: 'Without',
      logic: [
        'Without a working torch,',
        'Without a map,',
        'Without telling anyone,',
        'Without making a sound,',
        'Without looking back,',
      ],
    },
  {
      mixedTopic: 'waves',
      mixed: [
        'After the tide changed,',
        'Rolling towards the shore,',
        'Beside the sandcastle,',
        'With salty hair,',
        'Before sunset,',
      ],
      verbs: [
        {
          verbStart: 'Building a ________',
          completion: ', the ________ child ________',
        },
        {
          verbStart: 'Splashing through ________',
          completion: ', Ruby ________',
        },
        {
          verbStart: 'Carrying his ________',
          completion: ', the ________ lifeguard ________',
        },
        {
          verbStart: 'Watching the ________',
          completion: ', families ________',
        },
        {
          verbStart: 'Finding a ________',
          completion: ', Leo ________',
        },
      ],
      logicTopic: 'In case',
      logic: [
        'In case the water rose,',
        'In case the sun became too hot,',
        'In case someone got lost,',
        'In case the bag was stolen,',
        'In case the waves grew stronger,',
      ],
    },
  {
      mixedTopic: 'rockets',
      mixed: [
        'Before the countdown ended,',
        'Blasting into the sky,',
        'With smoke everywhere,',
        'After months of planning,',
        'Above the cheering crowd,',
      ],
      verbs: [
        {
          verbStart: 'Checking the ________',
          completion: ', the ________ astronaut ________',
        },
        {
          verbStart: 'Pressing the ________',
          completion: ', Zara ________',
        },
        {
          verbStart: 'Floating near ________',
          completion: ', astronauts ________',
        },
        {
          verbStart: 'Watching the ________',
          completion: ', the ________ scientist ________',
        },
        {
          verbStart: 'Repairing his ________',
          completion: ', Captain Lee ________',
        },
      ],
      logicTopic: 'After',
      logic: [
        'After the countdown reached zero,',
        'After the engine started,',
        'After the astronaut waved,',
        'After the rocket disappeared,',
        'After the mission began,',
      ],
    },
  {
      mixedTopic: 'clues',
      mixed: [
        'Behind the old painting,',
        'Searching under the bed,',
        'After the door creaked,',
        'With a shaking hand,',
        'Before anyone noticed,',
      ],
      verbs: [
        {
          verbStart: 'Finding the ________',
          completion: ', the ________ detective ________',
        },
        {
          verbStart: 'Opening a ________',
          completion: ', Sam ________',
        },
        {
          verbStart: 'Following the ________',
          completion: ', detectives ________',
        },
        {
          verbStart: 'Hiding behind ________',
          completion: ', the ________ thief ________',
        },
        {
          verbStart: 'Reading the ________',
          completion: ', Emma ________',
        },
      ],
      logicTopic: 'Before',
      logic: [
        'Before the police arrived,',
        'Before opening the box,',
        'Before telling the truth,',
        'Before checking the window,',
        'Before leaving the room,',
      ],
    },
  {
        mixedTopic: 'storms',
        mixed: [
          'Before the rain began,',
          'Crashing over the rooftops,',
          'During the wild afternoon,',
          'With thunder in the distance,',
          'After the sky turned grey,',
        ],
        verbs: [
          {
            verbStart: 'Closing the ________',
            completion: ', Mum ________',
          },
          {
            verbStart: 'Running through ________',
            completion: ', children ________',
          },
          {
            verbStart: 'Watching the ________',
            completion: ', the ________ family ________',
          },
          {
            verbStart: 'Holding his ________',
            completion: ', Ben ________',
          },
          {
            verbStart: 'Listening to ________',
            completion: ', the ________ dog ________',
          },
        ],
        logicTopic: 'Because of',
        logic: [
          'Because of the heavy rain,',
          'Because of the loud thunder,',
          'Because of the strong wind,',
          'Because of the flooded road,',
          'Because of the dark clouds,',
        ],
      },
  {
        mixedTopic: 'dinosaurs',
        mixed: [
          'Long before humans existed,',
          'Stomping through the valley,',
          'Beside the muddy river,',
          'With enormous claws,',
          'After hearing a distant roar,',
        ],
        verbs: [
          {
            verbStart: 'Chasing the ________',
            completion: ', the ________ dinosaur ________',
          },
          {
            verbStart: 'Hiding behind ________',
            completion: ', explorers ________',
          },
          {
            verbStart: 'Finding the ________',
            completion: ', Lily ________',
          },
          {
            verbStart: 'Digging for ________',
            completion: ', scientists ________',
          },
          {
            verbStart: 'Running from ________',
            completion: ', the ________ children ________',
          },
        ],
        logicTopic: 'Even though',
        logic: [
          'Even though the dinosaur was huge,',
          'Even though the cave was dark,',
          'Even though the bones were old,',
          'Even though Lily felt scared,',
          'Even though the ground shook,',
        ],
      },
  {
        mixedTopic: 'spells',
        mixed: [
          'Inside the dusty book,',
          'Whispering the strange words,',
          'Before the candle went out,',
          'With a flash of light,',
          'After the room became silent,',
        ],
        verbs: [
          {
            verbStart: 'Reading the ________',
            completion: ', the ________ wizard ________',
          },
          {
            verbStart: 'Mixing her ________',
            completion: ', Ava ________',
          },
          {
            verbStart: 'Pointing at ________',
            completion: ', the ________ witch ________',
          },
          {
            verbStart: 'Opening the ________',
            completion: ', apprentices ________',
          },
          {
            verbStart: 'Dropping his ________',
            completion: ', Leo ________',
          },
        ],
        logicTopic: 'Without',
        logic: [
          'Without the magic wand,',
          'Without reading the spell,',
          'Without warning anyone,',
          'Without closing the book,',
          'Without making a sound,',
        ],
      },
  {
        mixedTopic: 'animals',
        mixed: [
          'After the gates opened,',
          'Roaring from the enclosure,',
          'Beside the feeding area,',
          'With excited voices,',
          'During the school excursion,',
        ],
        verbs: [
          {
            verbStart: 'Feeding the ________',
            completion: ', the ________ keeper ________',
          },
          {
            verbStart: 'Watching the ________',
            completion: ', students ________',
          },
          {
            verbStart: 'Pointing at ________',
            completion: ', Oliver ________',
          },
          {
            verbStart: 'Cleaning the ________',
            completion: ', keepers ________',
          },
          {
            verbStart: 'Hiding behind ________',
            completion: ', the ________ monkey ________',
          },
        ],
        logicTopic: 'Instead of',
        logic: [
          'Instead of feeding the lions,',
          'Instead of following the group,',
          'Instead of reading the sign,',
          'Instead of taking a photo,',
          'Instead of walking quietly,',
        ],
      },
  {
        mixedTopic: 'tents',
        mixed: [
          'Before night arrived,',
          'Standing beside the fire,',
          'After unpacking the car,',
          'With sleeping bags ready,',
          'Near the edge of the forest,',
        ],
        verbs: [
          {
            verbStart: 'Setting up ________',
            completion: ', Dad ________',
          },
          {
            verbStart: 'Carrying the ________',
            completion: ', Mia ________',
          },
          {
            verbStart: 'Collecting ________',
            completion: ', children ________',
          },
          {
            verbStart: 'Checking the ________',
            completion: ', the ________ camper ________',
          },
          {
            verbStart: 'Lighting the ________',
            completion: ', Uncle Sam ________',
          },
        ],
        logicTopic: 'In case',
        logic: [
          'In case the fire went out,',
          'In case the tent leaked,',
          'In case someone felt cold,',
          'In case the food attracted ants,',
          'In case the torch stopped working,',
        ],
      },
  {
        mixedTopic: 'cake',
        mixed: [
          'Before the candles were lit,',
          'Sitting on the kitchen bench,',
          'After everyone arrived,',
          'With icing on his fingers,',
          'During the birthday song,',
        ],
        verbs: [
          {
            verbStart: 'Blowing out ________',
            completion: ', the ________ birthday boy ________',
          },
          {
            verbStart: 'Cutting the ________',
            completion: ', Mum ________',
          },
          {
            verbStart: 'Opening her ________',
            completion: ', Sophie ________',
          },
          {
            verbStart: 'Singing with ________',
            completion: ', friends ________',
          },
          {
            verbStart: 'Dropping the ________',
            completion: ', the ________ clown ________',
          },
        ],
        logicTopic: 'As well as',
        logic: [
          'As well as eating cake,',
          'As well as opening presents,',
          'As well as playing games,',
          'As well as singing loudly,',
          'As well as helping clean up,',
        ],
      },
  {
        mixedTopic: 'treasure',
        mixed: [
          'Across the rough sea,',
          'Digging beneath the palm tree,',
          'After finding the map,',
          'With a rusty shovel,',
          'Before the sun disappeared,',
        ],
        verbs: [
          {
            verbStart: 'Searching for ________',
            completion: ', pirates ________',
          },
          {
            verbStart: 'Holding the ________',
            completion: ', Captain Jack ________',
          },
          {
            verbStart: 'Opening the ________',
            completion: ', the ________ sailor ________',
          },
          {
            verbStart: 'Following the ________',
            completion: ', the ________ crew ________',
          },
          {
            verbStart: 'Hiding behind ________',
            completion: ', the ________ captain ________',
          },
        ],
        logicTopic: 'After',
        logic: [
          'After finding the old map,',
          'After hearing the warning,',
          'After digging for hours,',
          'After opening the chest,',
          'After spotting another ship,',
        ],
      },
  {
        mixedTopic: 'chickens',
        mixed: [
          'Early in the morning,',
          'Scratching near the fence,',
          'After the farmer opened the gate,',
          'With feathers everywhere,',
          'Beside the old tractor,',
        ],
        verbs: [
          {
            verbStart: 'Feeding the ________',
            completion: ', the ________ farmer ________',
          },
          {
            verbStart: 'Collecting the ________',
            completion: ', Grace ________',
          },
          {
            verbStart: 'Chasing the ________',
            completion: ', children ________',
          },
          {
            verbStart: 'Opening the ________',
            completion: ', Grandpa ________',
          },
          {
            verbStart: 'Carrying her ________',
            completion: ', the ________ girl ________',
          },
        ],
        logicTopic: 'Before',
        logic: [
          'Before collecting the eggs,',
          'Before feeding the animals,',
          'Before opening the gate,',
          'Before leaving the barn,',
          'Before the rooster crowed,',
        ],
      },
]
