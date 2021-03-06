import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import raw from "./essay_body.json";

export default function BlogInformation() {

  /*
  const [essayBody, setEssayBody] = useState("");

	fetch(raw)
		.then((response) => response.json())
		.then((data) => {
      console.log(data);
			setEssayBody(data);
		});


	const renderItems = () => {
    const pruebita = "hola";
    console.log(pruebita);
		const items = [];
		for (let i = 0; i < raw.content.length; i++) {
			items.push(<p>{raw.content[i]}</p>);
		}
		return items;
	};
  */

	return (
		<Container>
			<p>
				Climate change and sustainability have become political factors
				that play a growing role in business management. There is more
				and more pressure for companies to limit their greenhouse gas
				emissions and act to become more environmentally friendly.
			</p>
			<p>
				Data centers that support businesses, internet services and
				social media use lots of energy. As their number grow there is
				always the pressure and the need to make them more
				energy-efficient and therefore reduce their environmental
				impact.{" "}
			</p>
			<p>
				Whenever we are watching a Netflix series or just liking a post
				on Twitter, both cause a chain reaction triggering a
				client-server communication, this equals to energy consumption
				in either your phone and the data center. This is especially
				true if we need to compute very complex algorithms on the server
				side where the information is usually stored.{" "}
			</p>
			<p>
				Today nearly all the world’s information traffic goes through a
				data center where it usually is not just captured once.
				Streaming services alone could make up to 87% consumer of
				internet traffic last year and companies like Amazon, Microsoft,
				Google, Alibaba, Meta and Apple are the top sharing the
				electricity use.{" "}
			</p>
			<p>
				Data centers are in big demand and due to the increased
				digitalization more data centers are being built, according to
				DataCentre Magazine “There are over 7.2 million data centres
				worldwide” and this increases the worldwide energy consumption
				since our data has to be available whenever it must be
				consulted.{" "}
			</p>
			<p>
				Many businesses are forfeiting their on-site servers and renting
				on cloud servers in order to focus on their core businesses
				without worrying about IT, usually this is a cheaper and more
				efficient way. This arises the following question, with over 7.2
				million data centers in the world What are the companies doing
				for sustainability in the cloud and carbon footprint reduction?
				To answer this question, it is important to talk about the
				requirements, new transaction structures, advancements in clean
				energy policy and innovative new technologies reducing reliance
				on fossil fuels.{" "}
			</p>
			<p>
				One remarkable example that I was able to come across and would
				like to talk about is Google. Their path for carbon-neutrality
				started way back in 2007 and ever since they’ve been matching
				100% of their annual electricity use with renewable energy
				purchases. They also project that for 2030 they will completely
				decarbonize the electricity use for every hour of every day. But
				you might wonder, how are they achieving this? They are
				implementing a method called carbon-intelligent computing,
				according to Google they “shift moveable compute task between
				different data centers based on regional hourly carbon-free
				energy availability. This includes both variable sources of
				energy such as solar and wind, as well as always-on carbon free
				energy such as out recently geothermal project”
			</p>
			<p>
				To further understand this solution, it is important to mention
				that Google’s geothermal project plays the role of a carbon-free
				energy source that can increasingly replace carbon-emitting
				fossil fuels. With the use of advanced drilling, fiber optic
				sensing and analytics techniques it uses the heat within the
				earth to provide up to 120 GW of generation capacity. The
				fiber-optic sensing cables inside the wells gather real-time
				data of the flow and control it through machine learning to find
				the best source of energy.
			</p>
			<p>
				Complementing this project, we find the above-mentioned method
				called carbon-intelligent computing, which shifts computer loads
				and tasks to different times of the day, using more the periods
				of time where the carbon-free energy is available. They use a
				day-ahead prediction to determine how heavily a given grid will
				be relying on carbon-intensive energy to shift computing across
				the globe favoring regions where the carbon-free energy is
				available.{" "}
			</p>
			<p>
				Installation of battery-based systems for power outages instead
				of generators in data centers in the event of a power disruption
				will avoid the use of diesel generators, batteries play an
				efficient role, this is because the generator are not being used
				if there is no need, whereas batteries are available as an asset
				that strengthens the electric grid.{" "}
			</p>
			<p>
				Additionally, usually 40% of the energy consumption is used by
				the cooling systems in the data centers, Google by directly
				controlling data center cooling, the AI-powered recommendation
				system helps energy savings of around 30 percent on average
				matching the cooling and energy efficiencies with the IT load at
				all times. And the average annual power usage effectiveness for
				the global fleet of data centers in 2019 of 1.10, compared with
				the industry average of 1.67, meaning that Google data centers
				use about six times less overhead energy for every unit of IT
				equipment energy.
			</p>
			<p>
				However, a big problem arises, even if we use the best of the
				methods nowadays computing requires a lot of resources and
				therefore a lot of energy, this is significantly more important
				for computer systems built specifically for artificial
				intelligence since we are constantly analyzing millions and
				millions of datasets, machine learning systems are quickly
				becoming larger and more capable thus reinforcing the need to
				ask ourselves the question posed in this essay. Spending the
				time and energy training the model, after which it is used and
				reused many times, for this reason is important to find Machine
				Learning algorithms that use less energy, for instance Google
				found that “the Evolved Transformer model emitted nearly 100
				times less carbon dioxide equivalent than a widely cited
				estimate”. Google uses roughly 12.7 terawatt-hours of
				electricity, and 1/200th of it was spent training their models.
				So instead of using the best and most popular algorithm they
				center their search in the combination of model, processor, data
				center and energy source allows them to reduce the carbon
				footprint of training a Machine Learning system. In conclusion,
				to achieve this they need to minimize the energy the system
				consumes, then supply that energy from the cleanest source
				possible. But to minimize the system’s energy use aside from the
				efficient model it is also needed efficient processors and data
				centers to train and serve them, here Google’s TPUs play an
				important role.{" "}
			</p>
			<p>
				As a conclusion, carbon footprint, as an environmental
				sustainability indicator, has been frequently studied to
				quantify the environmental performance of a product, individual,
				company, city, or country, using environmental life-cycle
				assessment. We can see that while using sustainable resources
				can reduce your carbon footprint, it is also important to work
				smarter and not harder. This means that the problem cannot be
				solved just by installing more solar panels, but to also have a
				change in the mindset, methods and techniques that involve the
				consciousness. These opportunities to deploy cleaner solutions
				will help the data centers to go from climate change problems to
				critical components in carbon-free energy systems.{" "}
			</p>
		</Container>
	);
}
