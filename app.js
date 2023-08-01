const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

function dropdownmenu(){
// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);

  let myLinkAnchor = d3.select("#selDataset");
  let names = data.names
  console.log(names);
       
  names.forEach((sample) => {
    myLinkAnchor
        .append("option")
        .text(sample)
        .property("value", sample);
});
metadata(names[0])
charts(names[0])
});
}

dropdownmenu()

function metadata(sample_id){

d3.json(url).then(function(data) {
         console.log(data);
      
        let myLinkAnchor = d3.select("#sample-metadata");
        let metadataobject = data.metadata
        console.log(metadataobject);
        let filteredmeta = metadataobject.filter(x => x.id == sample_id)[0]  
        myLinkAnchor.html("")   
        Object.entries(filteredmeta).forEach(entry => {
            const [key, value] = entry;
            myLinkAnchor
        .append("h5")
        .text(` ${key}: ${value}`);
        
            console.log(key, value);
          });
      });
      }
      
function optionChanged(sample_id){
    metadata(sample_id)
    charts(sample_id)


}


function charts(sample_id){
    d3.json(url).then(function(data) {
        console.log(data);
     
       let samplesobject = data.samples
       
       let filteredobject = samplesobject.filter(x => x.id == sample_id)[0]  
       otu_ids = filteredobject.otu_ids
       sample_values = filteredobject.sample_values
       otu_labels = filteredobject.otu_labels
       
       let metadataobject = data.metadata
       console.log(metadataobject);
       let filteredmeta = metadataobject.filter(x => x.id == sample_id)[0]  
       let wfrequency = filteredmeta.wfreq

       var bardata = [{
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).map(x => `OTU ${x}`).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        name: 'Bar Chart',
        orientation: 'h',
        marker: {
          color: 'rgba(55,128,191,0.6)',
          width: 1
        },
        type: 'bar'
      }];
      
      
      
      var barlayout = {
        title: 'Belly Button Bar Chart',
        barmode: 'stack'
      };
      
      Plotly.newPlot('bar', bardata, barlayout);
      



       var bubbledata = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          color: otu_ids,
          size: sample_values,
          colorscale: "Earth"
        }
      }];
      
      
      var bubblelayout = {
        title: 'Belly Button Bubble chart',
        xaxis: { title : 'OTU ID'},
        showlegend: false,
      };
      
      Plotly.newPlot('bubble', bubbledata, bubblelayout);
     

      var gaugedata = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: wfrequency,
          title: { text: "<b>Belly Button Washing Frequency </b><br> Scrubs Per Week" },
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 10] },
            steps: [
              { range: [0, 2], color: "rgba(14, 127, 0, .5)" },
              { range: [2, 4], color: "rgba(110, 154, 22, .5)" },
              { range: [4, 6], color: "rgba(170, 202, 42, .5)" },
              { range: [6, 8], color: "rgba(202, 209, 95, .5)" },
              { range: [8, 10], color: "rgba(210, 206, 145, .5)" }
            ],
            
          }
        }
      ];
      
      var gaugelayout = { margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', gaugedata, gaugelayout);
      


    });




}



