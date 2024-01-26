// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	{
		section: "UCL Seasons"
	},
	{
		name: "[Gen 9] UCL Season 3",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', '!Sleep Clause Mod', '!Evasion Clause', '+Unobtainable', '+Past', 'Min Source Gen = 3', 'Force Open Team Sheets', 'Picked Team Size = 4'],
	}
];