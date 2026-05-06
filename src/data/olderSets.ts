import type { VerbRow } from '../types'

/** One themed sheet: mixed starts, verb starts, logic starts. */
export type SentenceBands = {
  mixed: string[]
  mixedTopic: string
  verbs: VerbRow[]
  logic: string[]
  logicTopic: string
}

/** Older Sets 1–16 (pair with Younger 1–16; sets 9–16 used for junior–senior rows and senior-only weeks). */
export const OLDER_SETS: SentenceBands[] = [
  {
    mixedTopic: 'advertising',
    mixed: [
      'During prime-time television,',
      'Targeting teenage audiences,',
      'Through repeated slogans,',
      'Instead of presenting facts,',
      'Across social media platforms,',
    ],
    verbs: [
      {
        verbStart: 'Questioning the ________',
        completion: ', viewers ________',
      },
      {
        verbStart: 'Challenging ________',
        completion: ', the ________ advertisement ________',
      },
      {
        verbStart: 'Promoting a ________',
        completion: ', companies ________',
      },
      {
        verbStart: 'Analysing the ________',
        completion: ', students ________',
      },
      {
        verbStart: 'Positioning teenagers as ________',
        completion: ', the ________ campaign ________',
      },
    ],
    logicTopic: 'In addition to',
    logic: [
      'In addition to promoting the product,',
      'In addition to targeting young consumers,',
      'In addition to using bright colours,',
      'In addition to creating urgency,',
      'In addition to shaping audience attitudes,',
    ],
  },
  {
    mixedTopic: 'social media',
    mixed: [
      'Before posting online,',
      'Scrolling through endless feeds,',
      'Despite privacy warnings,',
      'Through carefully edited images,',
      'Across different platforms,',
    ],
    verbs: [
      {
        verbStart: 'Comparing the ________',
        completion: ', teenagers ________',
      },
      {
        verbStart: 'Uploading her ________',
        completion: ', Mia ________',
      },
      {
        verbStart: 'Questioning ________',
        completion: ', the ________ influencer ________',
      },
      {
        verbStart: 'Ignoring the ________',
        completion: ', users ________',
      },
      {
        verbStart: 'Responding to ________',
        completion: ', the ________ audience ________',
      },
    ],
    logicTopic: 'Despite',
    logic: [
      'Despite knowing the risks,',
      'Despite wanting privacy,',
      'Despite receiving negative comments,',
      'Despite checking the source,',
      'Despite feeling confident online,',
    ],
  },
  {
    mixedTopic: 'climate change',
    mixed: [
      'Across coastal communities,',
      'Rising beyond safe levels,',
      'Because of human activity,',
      'During extreme weather events,',
      'Without immediate action,',
    ],
    verbs: [
      {
        verbStart: 'Protecting the ________',
        completion: ', communities ________',
      },
      {
        verbStart: 'Reducing ________',
        completion: ', governments ________',
      },
      {
        verbStart: 'Challenging the ________',
        completion: ', activists ________',
      },
      {
        verbStart: 'Ignoring ________',
        completion: ', the ________ company ________',
      },
      {
        verbStart: 'Measuring the ________',
        completion: ', scientists ________',
      },
    ],
    logicTopic: 'As a result of',
    logic: [
      'As a result of rising temperatures,',
      'As a result of damaged ecosystems,',
      'As a result of poor planning,',
      'As a result of increased pollution,',
      'As a result of government inaction,',
    ],
  },
  {
    mixedTopic: 'film',
    mixed: [
      'Through close-up shots,',
      'During the opening sequence,',
      'Using low-key lighting,',
      'Instead of direct explanation,',
      'Across the final scene,',
    ],
    verbs: [
      {
        verbStart: 'Revealing the ________',
        completion: ', the ________ director ________',
      },
      {
        verbStart: 'Positioning viewers as ________',
        completion: ', the ________ camera ________',
      },
      {
        verbStart: 'Contrasting the ________',
        completion: ', filmmakers ________',
      },
      {
        verbStart: 'Highlighting ________',
        completion: ', the ________ scene ________',
      },
      {
        verbStart: 'Building tension through ________',
        completion: ', composers ________',
      },
    ],
    logicTopic: 'Rather than',
    logic: [
      "Rather than explaining the character's fear,",
      'Rather than showing the violence directly,',
      'Rather than using dialogue,',
      'Rather than ending with certainty,',
      'Rather than presenting a clear hero,',
    ],
  },
  {
    mixedTopic: 'protest',
    mixed: [
      'Outside the parliament building,',
      'Demanding immediate change,',
      'After years of frustration,',
      'Through organised public action,',
      'Against official warnings,',
    ],
    verbs: [
      {
        verbStart: 'Chanting for ________',
        completion: ', protesters ________',
      },
      {
        verbStart: 'Criticising the ________',
        completion: ', speakers ________',
      },
      {
        verbStart: 'Defending their ________',
        completion: ', citizens ________',
      },
      {
        verbStart: 'Blocking the ________',
        completion: ', activists ________',
      },
      {
        verbStart: 'Responding to ________',
        completion: ', police ________',
      },
    ],
    logicTopic: 'In response to',
    logic: [
      'In response to unfair treatment,',
      'In response to government silence,',
      'In response to public pressure,',
      'In response to media criticism,',
      'In response to growing inequality,',
    ],
  },
  {
    mixedTopic: 'competition',
    mixed: [
      'During the final quarter,',
      'Pushing beyond exhaustion,',
      'Under intense public pressure,',
      'Before the decisive moment,',
      'With the score level,',
    ],
    verbs: [
      {
        verbStart: 'Defending the ________',
        completion: ', players ________',
      },
      {
        verbStart: 'Questioning his ________',
        completion: ', the ________ coach ________',
      },
      {
        verbStart: 'Missing the ________',
        completion: ', Jordan ________',
      },
      {
        verbStart: 'Recovering from ________',
        completion: ', athletes ________',
      },
      {
        verbStart: 'Challenging ________',
        completion: ', the ________ captain ________',
      },
    ],
    logicTopic: 'Even though',
    logic: [
      'Even though the team was exhausted,',
      'Even though the crowd expected victory,',
      'Even though the injury seemed minor,',
      'Even though the decision was unpopular,',
      'Even though the result was uncertain,',
    ],
  },
  {
    mixedTopic: 'artificial intelligence',
    mixed: [
      'Across modern workplaces,',
      'Responding within seconds,',
      'Despite concerns about accuracy,',
      'Through automated decision-making,',
      'Without human supervision,',
    ],
    verbs: [
      {
        verbStart: 'Generating the ________',
        completion: ', programs ________',
      },
      {
        verbStart: 'Replacing ________',
        completion: ', machines ________',
      },
      {
        verbStart: 'Questioning the ________',
        completion: ', experts ________',
      },
      {
        verbStart: 'Using ________',
        completion: ', students ________',
      },
      {
        verbStart: 'Improving the ________',
        completion: ', developers ________',
      },
    ],
    logicTopic: 'Compared with',
    logic: [
      'Compared with traditional research,',
      'Compared with human judgement,',
      'Compared with older technology,',
      'Compared with written feedback,',
      'Compared with manual work,',
    ],
  },
  {
    mixedTopic: 'conflict',
    mixed: [
      'After the first attack,',
      'Dividing entire communities,',
      'During periods of political tension,',
      'Without reliable leadership,',
      'Across contested borders,',
    ],
    verbs: [
      {
        verbStart: 'Protecting the ________',
        completion: ', soldiers ________',
      },
      {
        verbStart: 'Questioning the ________',
        completion: ', civilians ________',
      },
      {
        verbStart: 'Escaping from ________',
        completion: ', families ________',
      },
      {
        verbStart: 'Defending his ________',
        completion: ', Amir ________',
      },
      {
        verbStart: 'Reporting the ________',
        completion: ', journalists ________',
      },
    ],
    logicTopic: 'Because of',
    logic: [
      'Because of limited resources,',
      'Because of political disagreement,',
      'Because of fear and confusion,',
      'Because of poor communication,',
      'Because of historical tension,',
    ],
  },
  {
    mixedTopic: 'journalism',
    mixed: [
      'During breaking news coverage,',
      'Questioning official statements,',
      'Through selective reporting,',
      'Despite public criticism,',
      'Across multiple news platforms,',
    ],
    verbs: [
      {
        verbStart: 'Investigating the ________',
        completion: ', journalists ________',
      },
      {
        verbStart: 'Challenging the ________',
        completion: ', the ________ reporter ________',
      },
      {
        verbStart: 'Presenting ________',
        completion: ', media outlets ________',
      },
      {
        verbStart: 'Interviewing the ________',
        completion: ', Grace ________',
      },
      {
        verbStart: 'Exposing ________',
        completion: ', the ________ article ________',
      },
    ],
    logicTopic: 'In contrast to',
    logic: [
      'In contrast to social media rumours,',
      'In contrast to official reports,',
      'In contrast to the first witness account,',
      'In contrast to public opinion,',
      'In contrast to earlier coverage,',
    ],
  },
  {
    mixedTopic: 'consumerism',
    mixed: [
      'Before making a purchase,',
      'Targeting personal insecurity,',
      'Through constant advertising,',
      'Despite financial pressure,',
      'Across online shopping platforms,',
    ],
    verbs: [
      {
        verbStart: 'Promoting the ________',
        completion: ', brands ________',
      },
      {
        verbStart: 'Questioning ________',
        completion: ', consumers ________',
      },
      {
        verbStart: 'Encouraging unnecessary ________',
        completion: ', the ________ campaign ________',
      },
      {
        verbStart: 'Comparing her ________',
        completion: ', shoppers ________',
      },
      {
        verbStart: 'Exploiting ________',
        completion: ', companies ________',
      },
    ],
    logicTopic: 'Rather than',
    logic: [
      'Rather than buying what they need,',
      'Rather than questioning the message,',
      'Rather than resisting social pressure,',
      'Rather than saving their money,',
      'Rather than choosing carefully,',
    ],
  },
  {
    mixedTopic: 'identity',
    mixed: [
      'During adolescence,',
      'Shaped by family expectations,',
      'Through language and culture,',
      'Despite pressure to conform,',
      'Across different social groups,',
    ],
    verbs: [
      {
        verbStart: 'Questioning her ________',
        completion: ', Amelia ________',
      },
      {
        verbStart: 'Representing the ________',
        completion: ', characters ________',
      },
      {
        verbStart: 'Challenging ________',
        completion: ', young people ________',
      },
      {
        verbStart: 'Exploring his ________',
        completion: ', the ________ protagonist ________',
      },
      {
        verbStart: 'Rejecting the ________',
        completion: ', individuals ________',
      },
    ],
    logicTopic: 'As well as',
    logic: [
      'As well as shaping personal values,',
      'As well as influencing behaviour,',
      'As well as affecting relationships,',
      'As well as creating belonging,',
      'As well as causing conflict,',
    ],
  },
  {
    mixedTopic: 'authority',
    mixed: [
      'Within strict social systems,',
      'Controlling access to information,',
      'Through fear and punishment,',
      'Despite claims of fairness,',
      'After resistance begins,',
    ],
    verbs: [
      {
        verbStart: 'Controlling the ________',
        completion: ', leaders ________',
      },
      {
        verbStart: 'Questioning his ________',
        completion: ', citizens ________',
      },
      {
        verbStart: 'Defying ________',
        completion: ', the ________ character ________',
      },
      {
        verbStart: 'Enforcing the ________',
        completion: ', authorities ________',
      },
      {
        verbStart: 'Protecting their ________',
        completion: ', officials ________',
      },
    ],
    logicTopic: 'Due to',
    logic: [
      'Due to unequal power,',
      'Due to strict rules,',
      'Due to fear of punishment,',
      'Due to limited freedom,',
      'Due to public resistance,',
    ],
  },
  {
    mixedTopic: 'colonisation',
    mixed: [
      'After European settlement,',
      'Disrupting established ways of life,',
      'Through laws and policies,',
      'Despite Indigenous resistance,',
      'Across different Australian communities,',
    ],
    verbs: [
      {
        verbStart: 'Examining the ________',
        completion: ', historians ________',
      },
      {
        verbStart: 'Challenging the ________',
        completion: ', communities ________',
      },
      {
        verbStart: 'Recording ________',
        completion: ', witnesses ________',
      },
      {
        verbStart: 'Protecting their ________',
        completion: ', Indigenous leaders ________',
      },
      {
        verbStart: 'Interpreting the ________',
        completion: ', students ________',
      },
    ],
    logicTopic: 'As a result of',
    logic: [
      'As a result of forced removal,',
      'As a result of land dispossession,',
      'As a result of government policy,',
      'As a result of cultural disruption,',
      'As a result of historical injustice,',
    ],
  },
  {
    mixedTopic: 'mystery',
    mixed: [
      'Before the detective arrived,',
      'Concealing crucial evidence,',
      'Through misleading clues,',
      "Despite the witness's confidence,",
      'Inside the locked room,',
    ],
    verbs: [
      {
        verbStart: 'Investigating the ________',
        completion: ', detectives ________',
      },
      {
        verbStart: 'Concealing her ________',
        completion: ', Evelyn ________',
      },
      {
        verbStart: 'Questioning the ________',
        completion: ', the ________ inspector ________',
      },
      {
        verbStart: 'Revealing ________',
        completion: ', the ________ clue ________',
      },
      {
        verbStart: 'Following the ________',
        completion: ', witnesses ________',
      },
    ],
    logicTopic: 'Instead of',
    logic: [
      'Instead of reporting the crime,',
      'Instead of trusting the witness,',
      'Instead of revealing the truth,',
      'Instead of searching the house,',
      'Instead of accusing the suspect,',
    ],
  },
  {
    mixedTopic: 'control',
    mixed: [
      'Inside the surveillance state,',
      'Monitoring every movement,',
      'Through fear and propaganda,',
      'Despite promises of safety,',
      'Without personal freedom,',
    ],
    verbs: [
      {
        verbStart: 'Resisting the ________',
        completion: ', citizens ________',
      },
      {
        verbStart: 'Obeying every ________',
        completion: ', the ________ worker ________',
      },
      {
        verbStart: 'Questioning the ________',
        completion: ', Maya ________',
      },
      {
        verbStart: 'Restricting ________',
        completion: ', the ________ government ________',
      },
      {
        verbStart: 'Watching from ________',
        completion: ', guards ________',
      },
    ],
    logicTopic: 'Even though',
    logic: [
      'Even though the system promised safety,',
      'Even though citizens were afraid,',
      'Even though the rules seemed fair,',
      'Even though rebellion was dangerous,',
      'Even though the truth was hidden,',
    ],
  },
  {
    mixedTopic: 'sustainability',
    mixed: [
      'Across modern cities,',
      'Reducing unnecessary waste,',
      'Through renewable energy,',
      'Despite rising demand,',
      'For future generations,',
    ],
    verbs: [
      {
        verbStart: 'Reducing ________',
        completion: ', households ________',
      },
      {
        verbStart: 'Protecting the ________',
        completion: ', communities ________',
      },
      {
        verbStart: 'Developing ________',
        completion: ', engineers ________',
      },
      {
        verbStart: 'Questioning the ________',
        completion: ', activists ________',
      },
      {
        verbStart: 'Improving ________',
        completion: ', the ________ policy ________',
      },
    ],
    logicTopic: 'In addition to',
    logic: [
      'In addition to reducing waste,',
      'In addition to protecting ecosystems,',
      'In addition to saving money,',
      'In addition to changing habits,',
      'In addition to supporting future communities,',
    ],
  },
]
