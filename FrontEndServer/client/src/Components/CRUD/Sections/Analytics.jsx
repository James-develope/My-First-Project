import React from "react"
import CanvasJSReact from '@canvasjs/react-charts';
const Analytics = ()=>{
 const data =[
	{
		image : <img src="https://apexcharts.com/wp-content/uploads/2018/05/basic-area-chart.svg" alt="" className="Chart-image1" />,
		detail: <p className>Market Value</p>
	},
	{
		image : <img src="https://apexcharts.com/wp-content/uploads/2018/05/basic-area-chart.svg" alt="" className="Chart-image2" />,
		detail: <p>Available</p>
	},
	{
		image : <img src="https://apexcharts.com/wp-content/uploads/2018/05/basic-area-chart.svg" alt="" className="Chart-image3" />,
		detail: <p>Onhand</p>
	},
	{
		image : <img src="https://apexcharts.com/wp-content/uploads/2018/05/basic-area-chart.svg" alt="" className="Chart-image4"/>,
		detail: <p>Reserved</p>
	}
 ]
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
		const options = {
			animationEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
			subtitles: [{
				text: "71% Positive",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Unsatisfied", y: 5 },
					{ name: "Very Unsatisfied", y: 31 },
					{ name: "Very Satisfied", y: 40 },
					{ name: "Satisfied", y: 17 },
					{ name: "Neutral", y: 7 }
				]
			}]}
			const options1 = {
				animationEnabled: true,
				title:{
					text: "Monthly Sales - 2017"
				},
				axisX: {
					valueFormatString: "MMM"
				},
				axisY: {
					title: "Sales (in USD)",
					prefix: "$"
				},
				data: [{
					yValueFormatString: "$#,###",
					xValueFormatString: "MMMM",
					type: "spline",
					dataPoints: [
						{ x: new Date(2017, 0), y: 25060 },
						{ x: new Date(2017, 1), y: 27980 },
						{ x: new Date(2017, 2), y: 42800 },
						{ x: new Date(2017, 3), y: 32400 },
						{ x: new Date(2017, 4), y: 35260 },
						{ x: new Date(2017, 5), y: 33900 },
						{ x: new Date(2017, 6), y: 40000 },
						{ x: new Date(2017, 7), y: 52500 },
						{ x: new Date(2017, 8), y: 32300 },
						{ x: new Date(2017, 9), y: 42000 },
						{ x: new Date(2017, 10), y: 37160 },
						{ x: new Date(2017, 11), y: 38400 }
					]
				}]
			}
 return(
	<>
	<div><h1 style={{color:"red", textAlign:"center",marginBottom:"50px"}}>ANALYTICS</h1></div>
	<div className="image-graph">
		{
			data.map((item,index)=>(
				<div className='card-1' key={index}>
                 <div>
					{item.image}
				 </div>
				<div className="detail">{item.detail}</div>	
				</div>
			))
		}
	</div>
	<div className="Chart">
		<div className="Chart-1">
		<CanvasJSChart options = {options}/>
		</div>
		<div className="Chart-2">
		<CanvasJSChart options = {options1}/>
		</div>
	</div>
	</>
 )
}
export default Analytics