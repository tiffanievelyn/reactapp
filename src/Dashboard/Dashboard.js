import React, {Component} from 'react';
import {PageHeader, Panel, Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import strings from '../_resources/Strings';
import { Bar } from '@nivo/bar';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        let data = [
            {
              "country": "AD",
              "hot dog": 18,
              "hot dogColor": "hsl(253, 70%, 50%)",
              "burger": 115,
              "burgerColor": "hsl(331, 70%, 50%)",
              "sandwich": 121,
              "sandwichColor": "hsl(18, 70%, 50%)",
              "kebab": 83,
              "kebabColor": "hsl(209, 70%, 50%)",
              "fries": 1,
              "friesColor": "hsl(328, 70%, 50%)",
              "donut": 192,
              "donutColor": "hsl(215, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 41,
              "hot dogColor": "hsl(50, 70%, 50%)",
              "burger": 95,
              "burgerColor": "hsl(191, 70%, 50%)",
              "sandwich": 98,
              "sandwichColor": "hsl(344, 70%, 50%)",
              "kebab": 132,
              "kebabColor": "hsl(63, 70%, 50%)",
              "fries": 150,
              "friesColor": "hsl(313, 70%, 50%)",
              "donut": 37,
              "donutColor": "hsl(360, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 97,
              "hot dogColor": "hsl(53, 70%, 50%)",
              "burger": 84,
              "burgerColor": "hsl(60, 70%, 50%)",
              "sandwich": 103,
              "sandwichColor": "hsl(46, 70%, 50%)",
              "kebab": 93,
              "kebabColor": "hsl(298, 70%, 50%)",
              "fries": 131,
              "friesColor": "hsl(143, 70%, 50%)",
              "donut": 77,
              "donutColor": "hsl(135, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 83,
              "hot dogColor": "hsl(183, 70%, 50%)",
              "burger": 77,
              "burgerColor": "hsl(301, 70%, 50%)",
              "sandwich": 198,
              "sandwichColor": "hsl(216, 70%, 50%)",
              "kebab": 146,
              "kebabColor": "hsl(139, 70%, 50%)",
              "fries": 74,
              "friesColor": "hsl(272, 70%, 50%)",
              "donut": 155,
              "donutColor": "hsl(76, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 195,
              "hot dogColor": "hsl(322, 70%, 50%)",
              "burger": 154,
              "burgerColor": "hsl(258, 70%, 50%)",
              "sandwich": 125,
              "sandwichColor": "hsl(85, 70%, 50%)",
              "kebab": 145,
              "kebabColor": "hsl(288, 70%, 50%)",
              "fries": 168,
              "friesColor": "hsl(277, 70%, 50%)",
              "donut": 131,
              "donutColor": "hsl(58, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 165,
              "hot dogColor": "hsl(277, 70%, 50%)",
              "burger": 106,
              "burgerColor": "hsl(230, 70%, 50%)",
              "sandwich": 121,
              "sandwichColor": "hsl(31, 70%, 50%)",
              "kebab": 139,
              "kebabColor": "hsl(236, 70%, 50%)",
              "fries": 181,
              "friesColor": "hsl(10, 70%, 50%)",
              "donut": 194,
              "donutColor": "hsl(262, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 49,
              "hot dogColor": "hsl(177, 70%, 50%)",
              "burger": 175,
              "burgerColor": "hsl(2, 70%, 50%)",
              "sandwich": 170,
              "sandwichColor": "hsl(180, 70%, 50%)",
              "kebab": 76,
              "kebabColor": "hsl(137, 70%, 50%)",
              "fries": 115,
              "friesColor": "hsl(106, 70%, 50%)",
              "donut": 118,
              "donutColor": "hsl(157, 70%, 50%)"
            }
          ]
        return (
            <div>
                <PageHeader>
                    {strings.label_dashboard}
                </PageHeader>
                <Thumbnail className="thumbnail">
                    <p>NIVO Bar (Stacked Horizontal)</p>
                    <Bar
                        width={400}
                        height={200}
                        margin={{top: 0, right: 0, bottom: 30, left: 30}}
                        data={data}
                        indexBy="country"
                        keys={["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"]}
                        padding={0.2}
                        labelTextColor="inherit:darker(1.4)"
                        labelSkipWidth={16}
                        labelSkipHeight={16}
                        layout="horizontal"
                        enableGridY={false}
                        enableGridX
                    />
                </Thumbnail>
                <Thumbnail className="thumbnail">
                    <p>NIVO Bar (Grouped)</p>
                    <Bar
                        width={400}
                        height={200}
                        margin={{top: 0, right: 0, bottom: 30, left: 30}}
                        data={data}
                        indexBy="country"
                        keys={["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"]}
                        padding={0.2}
                        labelTextColor="inherit:darker(1.4)"
                        labelSkipWidth={16}
                        labelSkipHeight={16}
                        groupMode="grouped"
                    />
                </Thumbnail>
            </div>
        )
    }
}

export default Dashboard;