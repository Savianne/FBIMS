import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";
import React from 'react';

// const PIECHART_COUNTER = ({percentage, size}) => {
//     const [progress, setProgress] = useState(0);
//     const [data, setData] = useState([{ x: 1, y: 0 }, { x: 2, y: 100 - 0 }])

//     useEffect(() => {
//         let percent = 1;
//         const interval = window.setInterval(() => {
//         percent += 1;
//         setProgress(percent);
//         }, 500);

//         if(progress === percent) window.clearInterval(interval);
//     });

//     useEffect(() => {
//         setData([{ x: 1, y: progress }, { x: 2, y: 100 - progress }])
//     }, [progress]);
//     return <>
//         <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
//             <VictoryPie
//                 standalone={false}
//                 animate={{ duration: 500 }}
//                 width={size} height={size}
//                 data={data}
//                 innerRadius={120}
//                 cornerRadius={25}
//                 labels={() => null}
//                 style={{
//                 data: { fill: ({ datum }) => {
//                     const color = datum.y > 30 ? "green" : "red";
//                     return datum.x === 1 ? color : "transparent";
//                 }
//                 }
//                 }}
//             />
//             <VictoryAnimation duration={1000} data={progress}>
//                 {(newProps) => {
//                 return (
//                     <VictoryLabel
//                     textAnchor="middle" verticalAnchor="middle"
//                     x={200} y={200}
//                     text={`${newProps}%`}
//                     style={{ fontSize: 15 }}
//                     />
//                 );
//                 }}
//             </VictoryAnimation>
//         </svg>
//     </>
// }

class PIECHART_COUNTER extends React.Component {
    constructor() {
      super();
      this.state = {
        percent: 25, data: this.getData(0)
      };
    }
  
    componentDidMount() {
      let percent = 25;
      this.setStateInterval = window.setInterval(() => {
        percent += (Math.random() * 25);
        percent = (percent > 100) ? 0 : percent;
        this.setState({
          percent, data: this.getData(percent)
        });
      }, 2000);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }
  
    getData(percent) {
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }
  
    render() {
      return (
        <svg viewBox={`0 0 ${this.props.size} ${this.props.size}`} width="100%" height="100%" style={{border: 0}}>
            <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={this.props.size} height={this.props.size}
                data={this.state.data}
                innerRadius={this.props.size - 70}
                cornerRadius={5}
                labels={() => null}
                style={{
                data: { fill: ({ datum }) => {
                    const color = datum.y > 30 ? "green" : "red";
                    return datum.x === 1 ? color : "transparent";
                }
                }
                }}
            />
            <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                return (
                    <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={this.props.size / 2} y={this.props.size / 2}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{ fontSize: 11 }}
                    />
                );
                }}
            </VictoryAnimation>
        </svg>
      );
    }
  }
export default PIECHART_COUNTER;