import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './ExploreCalgary.css';
import togetherImg from '/Calgary_Cityscape.jpg';
import sunsetImg from '/Cityscape1.jpg';
import downtownImg from '/Cityscape2.jpg';
import towerImg from '/Citycape3.jpg';
import stephenDayImg from '/Cityscape4.jpg';
import stephenNightImg from '/Cityscape5.jpg';
import peaceBridgeImg from '/Cityscape6.jpg';
import transitImg from '/Cityscape7.jpg';
import cityHallImg from '/Cityscape8.jpeg';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ExploreCalgary = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSwitchChange = (event) => {
        if (event.target.checked) {
            navigate('/insights');
        }
    };

    const handleBackHome = () => {
        navigate("/");
    };

    const [expandedSection, setExpandedSection] = useState(null);

    const toggleReadMore = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const isExpanded = (section) => {
        return expandedSection === section;
    };

    const sections = [
        {
            title: "Calgary Cityscape",
            imgSrc: togetherImg,
            shortText: "The Calgary real estate market is currently experiencing a notable upswing. The average home price has reached $518,000, reflecting a 3% increase year-over-year.",
            longText: "The median home price stands at $475,000, with approximately 2,300 homes sold in the last month. Properties typically spend around 35 days on the market, with the price per square foot averaging $325. This indicates a robust demand across various neighborhoods in the city. Investing in Calgary's diverse and dynamic real estate market provides significant opportunities for growth and stability, making it an attractive option for both new buyers and seasoned investors.\n\nOver the past decade, Calgary's real estate market has shown resilience and growth, despite economic fluctuations. The early 2000s saw a boom due to the oil and gas industry's expansion, which significantly increased property values. However, the market faced a downturn in 2014 when oil prices plummeted. Since then, Calgary has diversified its economy, leading to a more stable and resilient real estate market. The chart below illustrates the average home price trends in Calgary over the past 20 years, highlighting key periods of growth and decline.",
            chartData: {
                labels: ['2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022'],
                datasets: [
                    {
                        label: 'Average Home Price',
                        data: [200000, 250000, 300000, 350000, 400000, 450000, 400000, 420000, 480000, 518000],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Sunset Over Calgary",
            imgSrc: sunsetImg,
            shortText: "Sunsets in Calgary not only offer a beautiful view but also signify the potential for lucrative real estate investments.",
            longText: "Properties with views of the Calgary skyline and sunset have been known to command a premium price, attracting high-net-worth individuals and investors. The average price for such properties has increased by 7% annually. The serene environment and aesthetic appeal of sunset properties also enhance the quality of life, making them highly desirable for both residential and rental markets. Historically, properties with scenic views have outperformed the general market by 3-5% in value appreciation, providing investors with a stable and profitable asset.\n\nSunset properties have consistently outperformed the general market, particularly after the city invested in waterfront development projects in the early 2010s. These projects significantly enhanced the appeal of properties with scenic views, leading to higher property values and rental yields. Historically, properties with scenic views have appreciated by 5-7% annually, compared to the general market's 3-5%. The chart below shows the appreciation rates of sunset properties compared to the general market over the past 15 years.",
            chartData: {
                labels: ['2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021'],
                datasets: [
                    {
                        label: 'Sunset Property Appreciation Rate',
                        data: [3, 3.5, 4, 5, 6, 6.5, 7, 7.5],
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Downtown Calgary",
            imgSrc: downtownImg,
            shortText: "The downtown skyline of Calgary is a testament to its growth and sustainability.",
            longText: "With ongoing urban development projects, the area has seen a surge in commercial real estate investments. Office spaces in downtown Calgary have an average occupancy rate of 85%, with rental yields averaging 6-7%. The blend of green spaces and urban infrastructure makes downtown Calgary an attractive destination for businesses and residents alike. Over the past five years, there has been a 10% increase in mixed-use developments, which integrate residential, commercial, and recreational spaces, enhancing the overall appeal and value of properties in the area.\n\nDowntown Calgary has undergone significant transformation since the 1990s, with the construction of iconic buildings such as The Bow and the development of East Village. These projects have attracted businesses and residents, leading to increased demand for real estate. Historical data shows that commercial property values in downtown Calgary have appreciated by 4-6% annually over the past 30 years. The chart below illustrates the growth of commercial real estate in downtown Calgary from 1990 to the present.",
            chartData: {
                labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
                datasets: [
                    {
                        label: 'Commercial Property Value',
                        data: [150000, 200000, 250000, 300000, 350000, 400000, 450000],
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Calgary Tower at Night",
            imgSrc: towerImg,
            shortText: "The Calgary Tower, illuminated at night, symbolizes the city's vibrant nightlife and economic vitality.",
            longText: "Properties near the tower benefit from high visibility and tourist traffic, which translates to higher rental income and property values. The average rental income for properties in this area is 15% higher than the city average. Investing in real estate around the Calgary Tower offers long-term benefits. The area has historically shown a 4-6% annual increase in property values, driven by continuous tourism and business activities. Moreover, the city's investment in infrastructure and public amenities around the tower ensures sustained growth and stability in property prices.\n\nSince its completion in 1968, the Calgary Tower has been a central landmark, driving real estate development in its vicinity. The surrounding area has evolved into a bustling hub for tourism and commerce. Historical data indicates that property values around the Calgary Tower have appreciated steadily, with significant spikes during major city events and tourism promotions. The chart below depicts the historical property value appreciation around the Calgary Tower from 1970 to the present.",
            chartData: {
                labels: ['1970', '1980', '1990', '2000', '2010', '2020'],
                datasets: [
                    {
                        label: 'Property Value Appreciation',
                        data: [100000, 150000, 200000, 250000, 300000, 350000],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Stephen Avenue Walk",
            imgSrc: stephenDayImg,
            shortText: "Stephen Avenue Walk is a bustling pedestrian mall that enhances the commercial real estate market in Calgary.",
            longText: "Properties here benefit from high foot traffic and vibrant commercial activities. The area has seen a 20% increase in retail property values over the past five years. The avenue's mix of historic charm and modern amenities makes it a prime location for businesses and retail investors. Historically, properties on Stephen Avenue have enjoyed higher-than-average returns, with rental yields surpassing 8%. This area is ideal for investors looking to capitalize on Calgary's retail and commercial growth.\n\nStephen Avenue has been a key commercial corridor since the early 20th century. Its historical buildings and pedestrian-friendly design have attracted numerous businesses and tourists. Over the past century, retail property values on Stephen Avenue have shown consistent growth, with notable increases during economic booms and urban redevelopment projects. The chart below illustrates the retail property value trends on Stephen Avenue over the past 100 years.",
            chartData: {
                labels: ['1920', '1940', '1960', '1980', '2000', '2020'],
                datasets: [
                    {
                        label: 'Retail Property Value',
                        data: [50000, 100000, 150000, 200000, 250000, 300000],
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Stephen Avenue at Night",
            imgSrc: stephenNightImg,
            shortText: "At night, Stephen Avenue transforms into a hub of entertainment and nightlife, significantly boosting the hospitality and short-term rental markets.",
            longText: "Properties here have an occupancy rate of 90% for short-term rentals, with nightly rates 25% higher than the city average. The lively atmosphere attracts both tourists and locals, ensuring a steady stream of income for property owners. Historically, short-term rentals on Stephen Avenue have yielded 15-20% higher returns compared to traditional rental properties, making it a lucrative investment for those looking to maximize rental income.\n\nThe nightlife on Stephen Avenue has been a significant draw for both tourists and residents. Over the past two decades, the area has seen a surge in entertainment venues, restaurants, and bars, further boosting the appeal of properties. Historical data indicates that the hospitality sector on Stephen Avenue has experienced robust growth, with short-term rental rates appreciating by an average of 10% annually. The chart below shows the growth in short-term rental rates and occupancy on Stephen Avenue from 2000 to the present.",
            chartData: {
                labels: ['2000', '2005', '2010', '2015', '2020'],
                datasets: [
                    {
                        label: 'Short-term Rental Rates',
                        data: [75, 85, 95, 105, 115],
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Peace Bridge",
            imgSrc: peaceBridgeImg,
            shortText: "The Peace Bridge is not only an architectural marvel but also a driver of real estate development in its vicinity.",
            longText: "Properties near the bridge have appreciated by 10% annually, driven by the bridge's iconic status and the connectivity it offers. Investing in real estate around the Peace Bridge offers both aesthetic and practical benefits. The bridge enhances accessibility to downtown Calgary, making it a desirable location for both residential and commercial properties. Historically, areas around landmark structures like the Peace Bridge have shown higher property value retention and growth.\n\nSince its completion in 2012, the Peace Bridge has become a significant landmark in Calgary. Its unique design and strategic location have spurred real estate development in the surrounding areas. Historical data shows that property values near the Peace Bridge have appreciated significantly, outperforming the general market. The chart below illustrates the property value trends around the Peace Bridge from 2012 to the present.",
            chartData: {
                labels: ['2012', '2014', '2016', '2018', '2020', '2022'],
                datasets: [
                    {
                        label: 'Property Value Near Peace Bridge',
                        data: [350000, 380000, 410000, 440000, 470000, 500000],
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Calgary Transit",
            imgSrc: transitImg,
            shortText: "Calgary’s efficient public transit system is a boon for the real estate market.",
            longText: "Properties near transit lines have seen a 12% increase in value due to the convenience and accessibility they offer. The average property near a transit line commands a 10-15% premium over those further away. Investing in properties near Calgary Transit ensures a steady demand from renters and buyers who prioritize accessibility. Historically, transit-oriented developments have outperformed the general market, offering higher rental yields and property value appreciation.\n\nCalgary's public transit system has expanded significantly since the early 1980s, with the introduction of the CTrain light rail system. This expansion has driven real estate development along transit lines, with properties near stations appreciating faster than those further away. Historical data indicates that transit-oriented developments have seen an average annual appreciation rate of 8-10%. The chart below shows the property value trends near transit lines from the inception of the CTrain system to the present.",
            chartData: {
                labels: ['1980', '1990', '2000', '2010', '2020'],
                datasets: [
                    {
                        label: 'Property Value Near Transit Lines',
                        data: [150000, 200000, 250000, 300000, 350000],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                ],
            }
        },
        {
            title: "Calgary Historic City Hall",
            imgSrc: cityHallImg,
            shortText: "The historic Calgary City Hall is a landmark that adds value to the surrounding properties.",
            longText: "Real estate in this area has appreciated by 8% annually, driven by the historical significance and aesthetic appeal of the city hall. Investing in properties near Calgary City Hall offers long-term stability and growth. The area attracts tourists and history enthusiasts, ensuring a steady demand for rental properties. Historically, properties around historical landmarks have shown resilience against market downturns, providing a secure investment option.\n\nCalgary City Hall, built in 1911, is one of the city's most iconic historical landmarks. Over the years, the area around City Hall has seen significant real estate development, driven by its central location and historical appeal. Historical data shows that property values near Calgary City Hall have appreciated consistently, even during economic downturns. The chart below illustrates the historical property value trends around Calgary City Hall from 1911 to the present.",
            chartData: {
                labels: ['1911', '1930', '1950', '1970', '1990', '2010', '2022'],
                datasets: [
                    {
                        label: 'Property Value Near City Hall',
                        data: [20000, 50000, 80000, 120000, 180000, 250000, 320000],
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    },
                ],
            }
        }
    ];

    return (
        <div className="calgary-explore-container">
            <header className="calgary-explore-header">
                <button className="calgary-back-home-button" onClick={handleBackHome}>Home</button>
                <h1>Explore The Market Of Calgary</h1>
                <p>Discover opportunities and insights in Calgary's real estate market</p>
                <div className="calgary-news-insights-switch">
                    <label>
                        <input type="checkbox" onChange={handleSwitchChange} />
                        COMMUNITY INSIGHTS
                    </label>
                </div>
            </header>
            <div className="calgary-explore-content">
                {sections.map((section, index) => (
                    <section className={`calgary-explore-section calgary-explore-section-${index % 8 + 1}`} key={index}>
                        {index % 2 === 0 ? (
                            <>
                                <img src={section.imgSrc} alt={section.title} className="calgary-section-image" />
                                <div className={`calgary-explore-text calgary-explore-text-${index % 8 + 1}`}>
                                    <h2 className="calgary-section-title">{section.title}</h2>
                                    <p>
                                        {section.shortText}
                                        {isExpanded(index) && <span>{section.longText}</span>}
                                    </p>
                                    <button className="calgary-query-button" onClick={() => toggleReadMore(index)}>
                                        {isExpanded(index) ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                                {isExpanded(index) && (
                                    <div className="chart-wrapper">
                                        <div className="chart-container">
                                            <Line data={section.chartData} />
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className={`calgary-explore-text calgary-explore-text-${index % 8 + 1}`}>
                                    <h2 className="calgary-section-title">{section.title}</h2>
                                    <p>
                                        {section.shortText}
                                        {isExpanded(index) && <span>{section.longText}</span>}
                                    </p>
                                    <button className="calgary-query-button" onClick={() => toggleReadMore(index)}>
                                        {isExpanded(index) ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                                <img src={section.imgSrc} alt={section.title} className="calgary-section-image" />
                                {isExpanded(index) && (
                                    <div className="chart-wrapper">
                                        <div className="chart-container">
                                            <Line data={section.chartData} />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ExploreCalgary;
