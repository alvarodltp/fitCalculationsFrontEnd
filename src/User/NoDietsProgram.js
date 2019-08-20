import React from 'react'

class NoDietsProgram  extends React.Component {

  activityLevel = (props) => {
    if(this.props.currentUserStatsNewCalc.activity_level === "Sedentary (little or no exercise)"){
      return 1.2
    } else if(this.props.currentUserStatsNewCalc.activity_level === "Lightly active (light exercise/sports 1-3 days/week)"){
      return 1.375
    } else if(this.props.currentUserStatsNewCalc.activity_level === "Moderately active (moderate exercise/sports 3-5 days/week)"){
      return 1.55
    } else if(this.props.currentUserStatsNewCalc.activity_level === "Very active (hard exercise/sports 6-7 days/week)"){
      return 1.725
    } else {
      return 1.9
    }
  }

  increaseOrReduce = () => {
    if(this.props.currentUserStatsNewCalc.goal === "Lose Weight/Get Lean"){
      return "reduce"
    } else {
      return "increase"
    }
  }

  deficitForGoal = () => {
    if(this.props.currentUserStatsNewCalc.weight_to_manage === "Steady - 1 lb. To 1.5 lb. Per Week"){
      return 500
    } else if(this.props.currentUserStatsNewCalc.weight_to_manage === "Slow - 0.5 lb. Per Week") {
      return 250
    } else {
      return 1000
    }
  }

  extraOrDeficit = () => {
    if(this.props.currentUserStatsNewCalc.goal === "Lose Weight/Get Lean"){
      return "a deficit of"
    } else {
      return "an extra"
    }
  }

  render(){
    return(
      <React.Fragment>
        <div style={{margin: "40px"}}>
          <h1 style={{fontSize: "40px", color: "#2761f1"}}>Getting Started</h1>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            Hi {this.props.currentUserStatsNewCalc.user.name}, welcome to your personalized F#ck Diets guide and congratulations on taking a big step towards becoming a healthier, fitter you.
            I created this guide in order to provide all the information you need so you can finally accomplish your fitness goals once and for all. In this guide, you will learn to understand your body, your results, and it will help you get started to get strong, lean, and healthy.
            I can’t wait to see the life changing results you will get once you start implementing this guide into your daily routine.
          </p>

          <h1 style={{fontSize: "40px", color: "#2761f1"}}>Safety And Disclaimer</h1>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            This program is for reference and informational purposes only and is no way intended as medical counseling or medical advice. The information contained herein should not be used to treat, diagnose, or prevent a disease or medical condition without the advice of a competent medical professional. This program deals with in-depth information on health, fitness, and nutrition. Before making any changes in your lifestyle, you should consult with your physician. The author, writer, editors, and graphic designer shall have neither liability nor responsibility to any person or entity with respect to any damage or injury alleged to be caused directly or indirectly by the information contained in this report. Results may vary. Proper exercise and diet are necessary to achieve and maintain muscle definition.
            You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute, in any manner, the material in this presentation, including text, graphics, or photos. You may print and download portions of material from this Presentation solely for your own non-commercial use provided that you agree not to change or delete any copyright or proprietary notices from the materials.
          </p>

          <h1 style={{fontSize: "40px", color: "#2761f1"}}>Things You Need</h1>
          <h4 style={{textAlign: "left", lineHeight: "2.5"}}>
            In order to get started, you will need to get and do a couple of things:
          </h4>

          <h4 style={{textAlign: "left"}}>1. Get a kitchen scale</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            It’s essential for you to be able to count your macronutrients effectively. A kitchen scale will allow you to do so. You can find one on Amazon for as little as $10.00. If you are not ready to count your macros but still want to start changing your eating habits for the better, you will see an alternative to counting your macros in page two of your Macro Friendly Food List.
          </p>

          <h4 style={{textAlign: "left"}}>2. Get measuring cups</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            You will be using these a lot in the kitchen.
          </p>

          <h4 style={{textAlign: "left"}}>3. Download the MyFitnessPal app</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            An application that allows you to enter the foods you eat throughout the day is a must in order to keep track of your macronutrients and calories. If you already use a different tool that accomplishes the same goal, feel free to use it.
          </p>
          <h4 style={{textAlign: "left"}}>4. Take pictures</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            It is the best way to track your progress. Do a front, back, and side picture every week and weigh yourself first thing in the morning on the same day with minimum clothes.
          </p>

          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            We will go into more detail about how to use a kitchen scale as well as a guide on setting up MyFitnessPal in the Implementing Your Results section on page 17.
          </p>

          <h1 style={{fontSize: "40px", color: "#2761f1"}}>Understanding Your Results</h1>
          <h2 style={{fontSize: "30px", color: "#F1B727", textAlign: "left"}}>Your BMR - {this.props.currentUserStatsNewCalc.bmr}</h2>
          <h4 style={{textAlign: "left"}}>What is BMR?</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            Your Bаѕаl Metabolic Rаtе іѕ the number оf calories you need tо kеер уоur body funсtіоnіng at rеѕt. It is аlѕо knоwn аѕ уоur body’s mеtаbоlіѕm. You can increase your body's metabolism and burn more calories throughout the day.
          </p>
          <h4 style={{textAlign: "left"}}>How do we calculate your BMR?</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            Tо get уоur BMR, we used the Mifflin St Jeor Equation. This formula is one of the most accurate formulas to determine your BMR. We used your weight, hеіght, gеndеr and аgе. Onсе we’ve calculated уоur BMR, we can calculate how mаnу саlоrіеѕ you nееd on a daily basis in order tо lose weight and get lean. So look at your BMR as the foundation where we start to determine how many calories you will need to reach your goal.
          </p>
          <h4 style={{textAlign: "left"}}>Why is BMR important?</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            An important part to accomplishing your fitness goals is to understand how your body works at least at a basic level. Knowing what your BMR is and how you can actually increase it with exercise and good nutrition can result in accelerated progress and more energy to make you feel better.
          </p>

          <h2 style={{fontSize: "30px", color: "#F1B727", textAlign: "left"}}>Calories</h2>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            A саlоrіе іѕ an unіt of еnеrgу. In nutrіtіоn, calories are thе еnеrgу реорlе gеt frоm thе foods and drіnks thеу соnѕumе as well as the еnеrgу thеу uѕе in рhуѕісаl асtіvіtу. In a nutritional ѕеnѕе, аll tуреѕ оf fооd such as fats, рrоtеіnѕ and саrbоhуdrаtеѕ, are an important source of calories, which you need tо live аnd function.
          </p>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>
            That being said, evеrуоnе requires dіffеrеnt amounts of еnеrgу or calories еасh dау, dереndіng on factors such as age, gender, weight, аnd асtіvіtу lеvеl.
          </p>
          <h4 style={{textAlign: "left"}}>Consider this when you are trying to lose or gain weight:</h4>
          <ul style={{textAlign: "left"}}>
            <li>You need an extra 3500 calories per week over your maintenance calories to gain one pound weekly</li>
            <li>You need a deficit of 3500 calories per week from your maintenance calories to lose one pound weekly</li>
          </ul>

          <h2 style={{fontSize: "30px", color: "#F1B727", textAlign: "left"}}>Your Maintenance Calories - {this.props.currentUserStatsNewCalc.calories_to_maintain}</h2>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>Once we have calculated your BMR and we know the number of calories your body needs to perform basic life functions, we determine how many calories on top of your BMR your body needs to maintain your body weight with no gain or losses in fat and/or muscle tissue.</p>
          <h4 style={{textAlign: "left"}}>We do so by using the activity factor:</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>In your case, you are {this.props.currentUserStatsNewCalc.activity_level}. This means we multiply your BMR by {this.activityLevel()}. The result is {this.props.currentUserStatsNewCalc.calories_to_maintain} as your maintnance calories.</p>

          <h2 style={{fontSize: "30px", color: "#F1B727", textAlign: "left"}}>Your Goal Calories - {this.props.currentUserStatsNewCalc.calories_for_goal}</h2>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>As mentioned above, you need {this.props.currentUserStatsNewCalc.calories_for_goal} calories in order to reach your goal. Based on your goal to {this.props.currentUserStatsNewCalc.goal}, we need to {this.increaseOrReduce()} your calorie intake.</p>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>As mentioned previously, it takes {this.extraOrDeficit()} 3500 calories per week to {this.increaseOrReduce()} a pound per week at a safe rate. Based on your choice to {this.increaseOrReduce()} {this.props.currentUserStatsNewCalc.weight_to_manage.split("-")[1]}, we {this.increaseOrReduce()} {this.deficitForGoal()} calories to maintenance calories in order to get to your goal in a safe and effective way.</p>

          <h2 style={{fontSize: "30px", color: "#F1B727", textAlign: "left"}}>Your BMI - {this.props.currentUserStatsNewCalc.bmi}</h2>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>BMI or Body Mass Index is mostly used by doctors and nurses to help determine if a person has a weight problem. It gives an estimate of total body fat for most people, but it does not work well for individuals who have more muscle than the average person.</p>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>Even though, it is a good way to have an idea of a person’s weight status, it should not always be the final word.</p>
          <ul style={{textAlign: "left"}}>
            <li>Underweight: BMI is less than 18.5</li>
            <li>Normal weight: BMI is 18.5 to 24.9</li>
            <li>Overweight: BMI is 25 to 29.9</li>
            <li>Obese: BMI is 30 or more</li>
          </ul>

          <h2 style={{fontSize: "30px", color: "#F1B727", textAlign: "left"}}>Your Macronutrients</h2>
          <ul style={{textAlign: "left"}}>
            <li>Protein: {this.props.currentUserStatsNewCalc.protein_grams} grams</li>
            <li>Carbs: {this.props.currentUserStatsNewCalc.carb_grams} grams</li>
            <li>Fats: {this.props.currentUserStatsNewCalc.fat_grams} grams</li>
          </ul>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>Macros are the basic building blocks of foods. These include protein, carbs, and fats. They are simply an abbreviation of the word macronutrients.</p>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>The reason why we mainly focus on macronutrients and not on calories when it comes to either losing weight or gaining muscle is due to the fact that macronutrients make up 100% of your calories.</p>
          <h4 style={{textAlign: "left"}}>Before we get into more detail, keep this in mind:</h4>
          <ul style={{textAlign: "left"}}>
            <li>1 gram of protein = 4 calories</li>
            <li>1 gram of carbohydrate = 4 calories</li>
            <li>1 gram of fat = 9 calories</li>
            <li>1 gram of alcohol = 7 calories</li>
          </ul>
          <h4 style={{textAlign: "left"}}>So given the information above, let’s calculate your calories based on your macros:</h4>
          <h4 style={{textAlign: "left", color: "#F1B727"}}>{this.props.currentUserStatsNewCalc.protein_grams}g of protein x 4 calories = {this.props.currentUserStatsNewCalc.protein_grams * 4} calories from protein</h4>
          <h4 style={{textAlign: "left", color: "#F1B727"}}>{this.props.currentUserStatsNewCalc.carb_grams}g of carbs x 4 calories = {this.props.currentUserStatsNewCalc.carb_grams * 4} calories from carbs</h4>
          <h4 style={{textAlign: "left", color: "#F1B727"}}>{this.props.currentUserStatsNewCalc.fat_grams}g of fats x 4 calories = {this.props.currentUserStatsNewCalc.fat_grams * 9} calories from fats</h4>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>The reason why we mainly focus on macronutrients and not on calories when it comes to either losing weight or gaining muscle is due to the fact that macronutrients make up 100% of your calories.</p>
          <p style={{textAlign: "left", lineHeight: "2.5"}}>As you can see in the example above, if you focus on getting as close to your macros as possible on a daily basis, you will also get the needed number of calories to accomplish your goal.</p>

        </div>
      </React.Fragment>
    )
  }
}

export default NoDietsProgram
