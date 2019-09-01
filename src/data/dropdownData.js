const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 'Sedentary (little or no exercise),1.2' }, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 'Lightly active (light exercise/sports 1-3 days/week),1.375'}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 'Moderately active (moderate exercise/sports 3-5 days/week),1.55'}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 'Very active (hard exercise/sports 6-7 days a week),1.725'}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 'Extra active (very hard exercise/sports & physical job or 2x training),1.9'}]

const goalOptions = [{key: 'lose weight', text: 'Lose weight and get lean', value: 'lose'}, {key: 'gain', text: 'Gain muscle', value: 'gain'}]

const weightPerWeek = [{key: '0.5', text: 'Slow - 0.5 lb. Per Week', value: 'Slow - 0.5 lb. Per Week,0.5'}, {key: '1.5', text: 'Steady - 1 lb. To 1.5 lb. Per Week', value: 'Steady - 1 lb. To 1.5 lb. Per Week,1 to 1.5'}, {key: '2.0', text: 'Accelerated - 2 lb. Per Week', value: 'Accelerated - 2 lb. Per Week,2.0'}]

const feetOptions = [{key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}]

const inchesOptions = [{key: 0, text: "0", value: 0}, {key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}, {key: 9, text: "9", value: 9}, {key: 10, text: "10", value: 10}, {key: 11, text: "11", value: 11}]

const weightPerWeekInKg = [{key: '0.22', text: 'Slow - 0.22 kg. Per Week', value: '0.22'}, {key: '0.68', text: ' Steady - 0.45 kg. To 0.68 kg. Per Week', value: '0.68'}, {key: '0.90', text: 'Accelerated - 0.90 kg. Per Week', value: '0.90'}]

const dietType = [{key: 'standard', text: 'Standart Western', value: 'Standart Western'}, {key: 'vegan', text: 'Vegan', value: 'Vegan'}, {key: 'vegetarian', text: 'Vegetarian', value: 'Vegetarian'}]

const motivationOptions = [{key: 'athletic', text: 'Athletic Event', value: 'Athletic Event'}, {key: 'wedding', text: 'Wedding', value: 'Wedding'}, {key: 'vacation', text: 'Vacation', value: 'Vacation'}, {key: 'health', text: 'Health Reasons', value: 'Health Reasons'}]

const bodyOptions = [{key: 'Ectomorph', text: 'Ectomorph', value: 'Ectomorph'}, {key: 'mesomorph', text: 'Mesomorph', value: 'Mesomorph'}, {key: 'endomorph', text: 'Endomorph', value: 'Endomorph'}]

export { 
  activityOptions, goalOptions, weightPerWeek, 
  feetOptions, inchesOptions, weightPerWeekInKg, 
  dietType, motivationOptions, bodyOptions 
};