# belly_button_challenge
In this assignment I created an interactive dashboard based on data given to me that revealed the bacteria,   that colonise the belly button of test subjects. The data was stored in a json file. The data grouped the bacteria into operational taxonomic units (OTU's), for example bacilli and lactobacilli are grouped together. The data also included the demographic information of the test subject, including their age, gender, their location and the number of times they wash per week. 

I used the D3 library to read in the data from the following URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

I created a a dropdown menu to allow the website user to select which test subject they wish to see a visual representation of the data for. 
This menu links to 4 objects - a horizontal bar chart, a bubble chart, the individual demographics table and a gauge. 

1. The horizontal bar chart displays the top 10 OTUs found in each individual.

2. The bubble chart displays all of the OTUs for each individual and the size of the bubble indicates the population size of those bacteria. As you hover over each bubble the OTU labels are displayed. 

3. The individual's demographic information(their metadata) is displayed in a table display each key-value pair from JSON source file

4. The gauge displays the number of times the participant washes per week, although the task specific a needle based gauge I couldn't get this to work so I just used this code instead from the documentation https://plotly.com/javascript/gauge-charts/

Finally the app (dashboard) was deployed to the free static page hosting service GitHub Pages.
