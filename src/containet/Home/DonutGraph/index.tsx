import DonutChart from "react-donut-chart";
import "./donut.scss"



function DonutGraph() {

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
                        value: 13568
                    },{
                        label:'vé đã sử dụng' ,
                        value: 56024
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
                <span className="number" style={positionNumber(56024,13568,"left")}>56024</span>
                <span className="number" style={positionNumber(13568,56024,'right')}>13568</span>
                
            </div>
            <div className="even-wapper">
                <span className='label'>Gói sự kiện</span>
                <DonutChart data={[ 
                    {
                        label:'vé chưa sử dụng',
                        value: 28302
                    },{
                        label:'vé đã sử dụng' ,
                        value: 30256
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
                <span className="number" style={positionNumber(30256,28302,"left")}>30256</span>
                <span className="number" style={positionNumber(28302,30256,"right")}>28302</span>
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