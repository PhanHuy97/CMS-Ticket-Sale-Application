import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../../../redux/action-creator';
import { ReducerState } from '../../../redux/reducers';
import DonutChart from "react-donut-chart";
import "./donut.scss"



function DonutGraph() {

    const data = useSelector((state:ReducerState)=>state.api.data)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadData('quantily'))
    },[dispatch])

    let family = { used: 1 ,unused: 0 }
    let event = { used: 1 ,unused: 0 }
    if (data.quantily) {
        family= data.quantily.family
        event= data.quantily.even
    }

    // funtion handel position for value in donut chart
    const positionNumber = ( num1: number, num2: number, type: 'left'|'right' ) =>{
        if((num1/num2)*100>=50) {
            return { 
                top: '50%',
                [type]: '-10%'
            }
        }
        if((num1/num2)*100<=25) {
            return { 
                top: ((num1/num2)*100-4)<=15?'15%':((num1/num2)*100-4)+'%',
                [type]: -(num1/num2)*100+20+'%'
            }
        }
    }
    
    return (
        <div style={{ display: 'flex'}}>
            <div className="family-wapper">
                <div className="label">Gói gia đình</div>
                <DonutChart data={[ 
                    {
                        label:'vé chưa sử dụng',
                        value: family.unused
                    },{
                        label:'vé đã sử dụng' ,
                        value: family.used
                    } ]} 
                    height={240}
                    width={240} 
                    legend={false} 
                    colors={["#FF8A48","#4F75ff"]} 
                    innerRadius={0.4} 
                    outerRadius={0.9} 
                    selectedOffset={0} 
                    clickToggle={false}
                    strokeColor="transparent"
                    className="donut-graph" />
                <span className="number" style={positionNumber(family.used,family.unused,"left")}>{family.used.toString()}</span>
                <span className="number" style={positionNumber(family.unused,family.used,'right')}>{family.unused.toString()}</span>
                
            </div>
            <div className="even-wapper">
                <span className='label'>Gói sự kiện</span>
                <DonutChart data={[ 
                    {
                        label:'vé chưa sử dụng',
                        value: event.unused
                    },{
                        label:'vé đã sử dụng' ,
                        value: event.used
                    } ]} 
                    height={240}
                    width={240} 
                    legend={false} 
                    colors={["#FF8A48","#4F75ff"]} 
                    innerRadius={0.4} 
                    outerRadius={0.9} 
                    selectedOffset={0} 
                    clickToggle={false}
                    strokeColor="transparent"
                    className="donut-graph" />
                <span className="number" style={positionNumber(event.used,event.unused,"left")}>{event.used.toString()}</span>
                <span className="number" style={positionNumber(event.unused,event.used,"right")}>{event.unused.toString()}</span>
            </div>
            <div style={{ marginTop:'54px', marginLeft: '170px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px'}}>
                    <div className='box-used'></div>
                    <span className="label-tiket">Vé đã sử dụng</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className='box-not_use'></div>                    
                    <span className='label-tiket'>Vé chưa sử dụng</span>
                </div>

            </div>
        </div>
    );
}

export default DonutGraph;