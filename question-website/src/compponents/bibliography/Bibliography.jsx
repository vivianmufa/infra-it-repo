import React from "react";
import Container from "react-bootstrap/Container";

export default function Bibliography() {
	return (
		<Container className="display-block">
      <h4>References</h4>
      <div><a href="https://datacentremagazine.com/top10/top-10-countries-most-data-centres" target="_blank">DataCentre Magazine - Top 10 countries with most data centers</a></div>
      <div><a href="https://www.eia.gov/energyexplained/geothermal/" target="_blank">U.S. Energy Information Administration - Geothermal energy</a></div>
			<div><a href="https://blog.google/outreach-initiatives/sustainability/carbon-aware-computing-location/" target="_blank">Google - Carbon aware computing location</a></div>
			<div><a href="https://blog.google/technology/ai/minimizing-carbon-footprint/" target="_blank">Google - Minimizing Carbon Footprint</a></div>
		</Container>
	);
}
